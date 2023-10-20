import styled from "styled-components";
import BackImg from "../assets/newImages/back.png";
import {useNavigate, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import axios from "axios";
import Loading from "./loading";

const BoxOuter = styled.div`
    display: flex;
  flex-direction:column;
`

const FstLine = styled.div`
    display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 30px;
`

const SeedBox = styled.div`
  background: #fff;
  border-radius: 30px;
  padding:20px 10px;
  margin: 0 30px;
  position: relative;
  z-index: 1;
  .outer{
    width:300px ;
    overflow-x: auto;
  }
  ul{
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  li{
    display: flex;
    align-content: center;
    justify-content: center;
    width: 90px;
    height: 90px;
    border-radius: 100px;
    background: #D9D9D9;
    margin: 5px 6px;
    flex-shrink: 0;
    img{
      width: 100%;
      height: 100%;
      border-radius: 100px;
    }
  }
`

const SbtOuter =styled.div`
  margin-top: 30px;
    dl{
      margin-bottom: 50px;
    }
  dt{
    font-size: 20px;
    text-align: center;
    span{
      color: #B5B6C4;
      font-size: 12px;
    }
  }
  dd{
    padding: 20px;
    width: 100%;
    overflow-x: auto;
  }
  ul{
    display: flex;
    align-items: center;
  }
  li{
    background: #fff;
    border-radius: 5px;
    padding: 15px;
    margin-right: 10px;
    box-sizing: border-box;
    width: 90px;
    flex-shrink: 0;
    height: 120px;
    &:first-child{
      margin-left: 20px;
    }
    .imgBox{
      width: 60px;
      height: 60px;
      background: #d9d9d9;   
      border-radius: 3px;
      img{
        width: 60px;
        height: 60px;
        object-fit: cover;
        object-position: center;
      }
    }
    .title{
      width: 60px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      /*! autoprefixer: off */
      -webkit-box-orient: vertical;
      margin-top: 10px;
    }
    .num{
      text-align: center;
      font-size: 12px;
      margin-top: 10px;
    }
  }
`

const SeedTop = styled.div`
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 10px;
  text-align: center;
`

const BackLine = styled.div`
    padding: 10px 30px 0 ;
`

export default function HomeDetail(){
    const navigate = useNavigate()
    const {id} = useParams();
    const ToBack = () =>{
        navigate(`/${id}`)
    }



    const { i18n,t } = useTranslation();
    const [ detail,setDetail] = useState<any>();
    const [show,setShow] = useState(false);
    const [lan, setLan] = useState('en');
    const [sbt, setSbt] = useState<any[]>([]);

    const getLanguages = () => [
        {
            value: 'en',
            label: 'English',
        },
        {
            value: 'zh',
            label: '中文',
        },
    ];


    useEffect(() => {
        if(!id){
            navigate("/404");
        }else if(id.indexOf(".seedao") === -1){
            navigate("/404");
        }else{
            getDetail()
        }

    }, [id]);


    useEffect(() => {
        const myLan = localStorage.getItem('language');
        if (!myLan) {
            const lanInit = getLanguages()[0];
            localStorage.setItem('language', lanInit.value);
            changeLang(lanInit.value);
        } else {
            changeLang(myLan);
        }

    }, []);
    const getDetail = async() =>{
        setShow(true);
        axios.get(`https://test-seepass-api.seedao.tech/seepass/${id}`)
            .then(response => {
                const {data} = response;
                setDetail(data)

                let sbtArr = data.sbt;


                const groupedData = sbtArr.reduce((result:any, item:any) => {
                    const key = item?.metadata?.properties?.category? item?.metadata?.properties?.category:"others";
                    const group = result?.find((group:any) => group.category === key);
                    if (group) {
                        group.tokens.push(item);
                    } else {
                        result.push({ category: key, tokens: [item] });
                    }
                    return result;
                }, []);
                setSbt(groupedData)


            })
            .catch(error => {
                console.error(error);
                navigate("/tips")
            }).finally(()=>{
            setShow(false);
        });
    }



    const changeLang = (v: string) => {
        setLan(v);
        localStorage.setItem('language', v);
        i18n.changeLanguage(v);
    };



    return <BoxOuter>
        {
            show && <Loading />
        }
        <BackLine onClick={()=>ToBack()}>
            <img src={BackImg} alt=""/>
        </BackLine>
        <FstLine>
            <div>XXX</div>

        </FstLine>

        <div>
            <SeedTop>SEED</SeedTop>
            <SeedBox>
                <div className="outer">
                    <ul>

                        {
                            detail?.seed?.map((item:any,index:number)=>(
                                <li key={`seed_${index}`}>
                                    <img src={item.image_uri} alt=""/>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </SeedBox>
        </div>


        <SbtOuter>


            {
                sbt?.map((item:any,index:number)=>(<dl key={`sbt_${index}`}>

                    <dt>SBT <span>{item.category}</span></dt>


                    <dd>
                        <ul>
                            {
                                item.tokens.map((it:any,ind:number) =>(<li key={`sbt_${item.category}_${ind}`}>
                                    <div className="imgBox">
                                        <img src={it.image_uri} alt=""/>
                                    </div>
                                </li>))
                            }

                        </ul>
                    </dd>

                </dl>))
            }

        </SbtOuter>
    </BoxOuter>
}