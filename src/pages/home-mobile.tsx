import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import RoleMobile from "../components/roleMobile";
import {Discord, Google, PersonFill, Twitter, Wechat} from "react-bootstrap-icons";
import MirrorImg from "./mirror.png";
import Roles from "../components/roleMobile";
import Loading from "./loading";


const BoxOuter = styled.div`
    display: flex;
  flex-direction:column;
  
`

const BannerBox = styled.div`
    background: #000;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 110px 0 80px;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  position: relative;
`

const InnerBox = styled.div`
    display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;

`

const AvatarBox = styled.div`
    margin: 0 auto;
  width: 100px;
  height: 100px;
  border-radius: 15px;
  overflow: hidden;
  background: #fff;
  .iconBox{
    font-size:100px;
    color: rgba(0,0,0,0.12);
  }
  img{
    width: 100%;
    height: 100%;
    border-radius: 15px;
    border: 2px solid #fff;
  }
`


const TitleBox = styled.div`
    font-size: 24px;
  font-weight: 700;
  margin-top: 5px;
  text-align: center;
  color: #fff;
`
const NameBox = styled.div`
    font-size: 18px;
  text-align: center;
  font-weight: 500;
  color: #fff;
`

const DescBox = styled.div`
    width: 200px;
  text-align: center;
  color: #C5C5C5;
  margin-top: 10px;
`

const MainBox = styled.div`
    margin: -30px auto 0;
  display: flex;
  flex-direction: column;
`


const ProgressOuter = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 30px 20px;
`

const FstLine = styled.div`
    display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`

const LevelBox = styled.div`
    background: #ff3231;
  color: #fff;
  padding: 2px 10px;
  border-radius: 7px;
  text-transform: uppercase;
  font-size: 12px;
`

const SCRBox = styled.div`
    font-size:15px;
  text-align: right;
  font-weight: 700;
`
interface ProgressProp {
    width:string
}

const ProgressBox = styled.div<ProgressProp>`
    width: 100%;
  height: 20px;
  background: #fff;
  border:2px solid #000;
  border-radius: 20px;
  overflow: hidden;
  .inner{
    height: 18px;
    background: #000;
    width: ${props => props.width +"%"};
    border-radius: 16px;
  }
`
const TipsBox = styled.div`
    color: #b5b6c4;
  margin-top: 10px;
  font-size: 12px;
`

const LastLine = styled.ul`
    display: flex;
  align-items: center;
  justify-content: center;
  .tit{
    text-align: center;
    font-size: 18px;
    color: #000;
    margin: 10px 0 80px;
  }
`

const Logo = styled.div`
    display: flex;
  align-content: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background: #D9D9D9;
  margin: 5px 30px;

`
const MidLine = styled.div`
  margin: 0 30px  40px;
    .fst{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;
    }
  .tit{
    font-size: 18px;
    font-weight: 900;
  }
  .more{
    color: #d9d9d9;
    font-size: 15px;
  }
  ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  li{
    width: 140px;
    height: 140px;
    border-radius: 20px;
    background: #fff;
    
  }
`

export default function HomeMobile(){

    const { i18n,t } = useTranslation();
    const [ detail,setDetail] = useState<any>();
    const {id} = useParams();
    const navigate = useNavigate();
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

    // const returnSocial = (str: string, val: string) => {
    //     switch (str) {
    //         case "twitter":
    //             return [
    //                 <Twitter />,
    //                 <SocialLink href={val} target="_blank">
    //                     {val}
    //                 </SocialLink>,
    //             ];
    //         case "wechat":
    //             return [<Wechat />, val];
    //         case "google":
    //             return [
    //                 <Google />,
    //                 <SocialLink href={`mailto:${val}`} target="_blank">
    //                     {val}
    //                 </SocialLink>,
    //             ];
    //         case "discord":
    //             return [<Discord />, val];
    //         case "mirror":
    //             return [
    //                 <img src={MirrorImg} alt="" />,
    //                 <SocialLink href={val} target="_blank">
    //                     {val}
    //                 </SocialLink>,
    //             ];
    //     }
    // };

    const changeLang = (v: string) => {
        setLan(v);
        localStorage.setItem('language', v);
        i18n.changeLanguage(v);
    };


    const switchRoles = (role:string) =>{
        let str:string = "";
        switch (role){
            case "SGN_HOLDER":
                str = t("roles.SGN_HOLDER");
                break;
            case "NODE_S1":
                str = t("roles.NODE_S1");
                break;
            case "NODE_S2":
                str = t("roles.NODE_S2");
                break;
            case "NODE_S3":
                str = t("roles.NODE_S3");
                break;
            case "NODE_S4":
                str = t("roles.NODE_S4");
                break;
            case "CITYHALL_S1":
                str = t("roles.CITYHALL_S1");
                break;
            case "CITYHALL_S2":
                str = t("roles.CITYHALL_S2");
                break;
            case "CITYHALL_S3":
                str = t("roles.CITYHALL_S3");
                break;
            case "CITYHALL_S4":
                str = t("roles.CITYHALL_S4");
                break;
            case "CONTRIBUTOR_L1":
                str = t("roles.CONTRIBUTOR_L1");
                break;
            case "CONTRIBUTOR_L2":
                str = t("roles.CONTRIBUTOR_L2");
                break;
            case "CONTRIBUTOR_L3":
                str = t("roles.CONTRIBUTOR_L3");
                break;
            case "CONTRIBUTOR_L4":
                str = t("roles.CONTRIBUTOR_L4");
                break;
            case "CONTRIBUTOR_L5":
                str = t("roles.CONTRIBUTOR_L5");
                break;
            case "CONTRIBUTOR_L6":
                str = t("roles.CONTRIBUTOR_L6");
                break;
            case "CONTRIBUTOR_L7":
                str = t("roles.CONTRIBUTOR_L7");
                break;
            case "CONTRIBUTOR_L8":
                str = t("roles.CONTRIBUTOR_L8");
                break;
            case "CONTRIBUTOR_L9":
                str = t("roles.CONTRIBUTOR_L9");
                break;
            case "SEEDAO_MEMBER":
                str = t("roles.SEEDAO_MEMBER");
                break;
            case "SEEDAO_ONBOARDING":
                str = t("roles.SEEDAO_ONBOARDING");
                break;
            default:
                str = role;
                break;
        }
        return str;
    }

    const formatNumber = (amount?: string) => {
        if (!amount) {
            return "0";
        }
        return Number(amount).toLocaleString("en-US");
    }
    return <BoxOuter>
        {
            show && <Loading />
        }
        <BannerBox>
            <InnerBox>
                <AvatarBox>
                    {
                        !!detail?.avatar &&<img src={detail?.avatar} alt=""/>
                    }
                    {
                        !detail?.avatar &&<PersonFill  className="iconBox"/>
                    }
                </AvatarBox>
                <TitleBox>{detail?.sns}</TitleBox>
                <NameBox>{detail?.nickname}</NameBox>
                <DescBox>
                    {detail?.bio}
                </DescBox>
            </InnerBox>
        </BannerBox>
        <MainBox>
            <Roles roles={detail?.roles} switchRoles={switchRoles}/>
            <ProgressOuter>
                <FstLine>
                    <LevelBox>
                        {t('level')}{detail?.level?.current_lv}
                    </LevelBox>
                    <SCRBox>{formatNumber(detail?.scr?.amount)} SCR</SCRBox>
                </FstLine>
                <ProgressBox width={detail?.level?.upgrade_percent}>
                    <div className="inner" />
                </ProgressBox>
                <TipsBox>
                    {t('nextLevel')}:{formatNumber(detail?.level?.scr_to_next_lv)} SCR
                </TipsBox>
            </ProgressOuter>
            <MidLine>
                <div className="fst">
                    <div className="tit">XXX</div>
                    <div className="more">More</div>
                </div>
                <ul>
                    {
                        [...Array(2)].map((inner,InnerIdx) =>(<li key={`sbtInner_${InnerIdx}`}>
                        </li>))
                    }
                </ul>
            </MidLine>
            <LastLine>
                {
                    [...Array(3)].map((inner,InnerIdx) =>(<li key={`sbtInner_${InnerIdx}`}>
                        <Logo></Logo>
                        <div className="tit">Discord</div>
                    </li>))
                }
            </LastLine>
        </MainBox>
    </BoxOuter>
}
