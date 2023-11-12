import styled from "styled-components";
import BgImg from "../assets/newImages/banner.png";
import Roles from "../components/roles";
import SBT from "../components/sbt";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Discord, Google, PersonFill, Twitter, Wechat, ShareFill} from "react-bootstrap-icons";
import MirrorImg from "./mirror.png";
import Loading from "./loading";
import Seed from "../components/seed";
import Cat from "../components/cat";
import {Form} from "react-bootstrap";
import Publicjs from "../utils/public";
// import ShareBox from "../components/share";

const BoxOuter = styled.div`
    display: flex;
  flex-direction:column;
  
`

const Banner = styled.div`
    background: url(${BgImg}) no-repeat center top;
  background-size: 100% auto;
  padding-top: 15vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

const CenterBox = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
const AvatarBox = styled.div`
    margin: 0 auto;
  width: 200px;
  height: 200px;
  border-radius: 15px;
  overflow: hidden;
  box-sizing: border-box;

  .iconBox{
    font-size:200px;
    color: rgba(0,0,0,0.12);
  }
  background: #fff;
  img{
    width: 100%;
    height: 100%;
    border-radius: 15px;
    border: 3px solid #fff;
  }
`

const TitleBox = styled.div`
    font-size: 48px;
  font-weight: 700;
  line-height: 67px;
  margin-top: 5px;
  text-align: center;
`
const NameBox = styled.div`
    font-size: 24px;
  text-align: center;
  font-weight: 500;
`

const DescBox = styled.div`
    width: 400px;
  text-align: center;
  color: #6c6c6c;
  margin-top: 10px;
`

const MainBox = styled.div`
    margin: 37px auto 0;
  width: 1150px;
  display: flex;
  flex-direction: column;
`




const ProgressOuter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`

const FstLine = styled.div`
    display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

const LevelBox = styled.div`
    background: #ff3231;
  color: #fff;
  padding: 5px 40px;
  border-radius: 7px;
  text-transform: uppercase;
  font-size: 22px;
`

const SCRBox = styled.div`
    font-size: 25px;
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
    height: 16px;
    background: #000;
    width: ${props => props.width +"%"};
    border-radius: 100px;
  }
`
const TipsBox = styled.div`
    color: #b5b6c4;
  margin-top: 10px;
  margin-bottom: 100px;
`

const SbtOuter =styled.div`

`
const LastLine = styled.ul`
    display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
  .tit{
    text-transform: capitalize;
    text-align: center;
    font-size: 18px;
    color: rgba(0,0,0,0.6);
    margin: 10px 0 80px;
  }
`

const Logo = styled.div`
    display: flex;
  align-content: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background: #D9D9D9;
  margin: 0 30px;
  font-size: 40px;
  line-height: 100px;
  overflow: hidden;
  .iconLft{
    margin-top: -5px;
  }
`

const LanBox = styled.div`
    position: absolute;
  right: 20px;
  top:10px;
  display: flex;
  align-items: center;
`

const RhtTop = styled.div`
    color: #fff;
  font-size: 12px;
  white-space: nowrap;
  margin-left: 10px;
  cursor: pointer;
`

export default function HomePC(){

    const { i18n,t } = useTranslation();
    const [ detail,setDetail] = useState<any>();
    const {id} = useParams();
    const navigate = useNavigate();
    const [show,setShow] = useState(false);
    const [lan, setLan] = useState('en');
    const [sbt, setSbt] = useState<any[]>([]);
    const [list,setList] =useState<any[]>([]);
    const [sbtList,setSbtList] =useState<any[]>([]);
    const [avatar,setAvatar] =useState('');
    const [showShare, setShowShare] = useState(false);

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
        if(!sbtList?.length)return;


        const sbtFor = sbtList.filter((item:any)=>item.name && item.image_uri);

        const groupedData = sbtFor.reduce((result:any, item:any) => {
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
    }, [sbtList]);

    const getAvatar = async () =>{
        let avarUrl= await Publicjs.getImage(detail?.avatar);
        setAvatar(avarUrl);
    }


    useEffect(() => {
        if(!detail)return;
        detail?.seed?.map( async (seedItem:any)=>{

            let url= await Publicjs.getImage(seedItem.image_uri);
            setList((list)=>[...list,{...seedItem,url}])
        });

        getAvatar()

        let sbtArr = detail.sbt;
        sbtArr?.map( async (seedItem:any)=>{
            let url= await Publicjs.getImage(seedItem.image_uri);
            setSbtList((list)=>[...list,{...seedItem,url}])
        });

    }, [detail]);



    useEffect(() => {
        // if(!id){
        //     navigate("/404");
        // }else if(id.indexOf(".seedao") === -1){
        //     getDetail(id +".seedao")
        //     // navigate("/404");
        // }else{
        //     getDetail(id)
        // }


        if(window.location.hostname.indexOf("seedao.id") === -1 ) {
            if(!id){
                navigate("/404");
            }else if(id.indexOf(".seedao") === -1){
                // navigate("/404");
                getDetail(id +".seedao")

            }else{
                console.log(id)
                getDetail(id)
            }
          } else {
              getDetail(window.location.hostname.split(".")[0] + ".seedao")
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
    const getDetail = async(id:any) =>{
        setShow(true);
        // axios.get(`${(window as any).config.BASEURL}/seepass/${id}`)
        axios.get(`${(window as any).config.BASEURL}/seepass/${id}`)
            .then(response => {
                const {data} = response;
                setDetail(data)
            })
            .catch(error => {
                console.error(error);
                navigate("/tips")
            }).finally(()=>{
            setShow(false);
        });
    }

    const returnSocial = (str: string, val: string) => {
        switch (str) {
            case "twitter":
                return <a href={val} target="_blank">
                        <Twitter color="#1a8acf" />
                    </a>;

            case "google":
                return<a href={`mailto:${val}`} target="_blank">
                        <Google color="#eb5a56" />
                    </a>;

            case "mirror":
                return <a href={val} target="_blank">
                    <img src={MirrorImg} alt="" />
                </a>;
            case "wechat":
                // return <Wechat color="#25b423" />;
            case "discord":
                // return <Discord color="#4757e8" />;
                return null
        }
    };

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


    const handleBox = () =>{
        setShowShare(true)
    }
    const CloseShare = () =>{
        setShowShare(false)
    }
    return <BoxOuter>
        {
            show && <Loading />
        }
        {/*{*/}
        {/*    showShare && <ShareBox detail={detail} CloseShare={CloseShare} />*/}
        {/*}*/}

        <LanBox>
            <Form.Select
                data-bs-theme="dark"
                size="sm" value={getLanguages().find((item) => item.value === lan)?.value || getLanguages()[0].value} onChange={(event: any) => changeLang(event.target.value)}>
                {
                    getLanguages().map((item,index)=><option value={item.value} key={index} >{item.label}</option>)
                }

            </Form.Select>
            {/*<RhtTop onClick={()=>handleBox()}>*/}
            {/*    <ShareFill />*/}
            {/*</RhtTop>*/}
        </LanBox>
        <Banner>
            <CenterBox>
                <AvatarBox>
                    {
                        !!avatar &&<img src={avatar} alt=""/>
                    }
                    {
                        !avatar &&<PersonFill  className="iconBox"/>
                    }
                </AvatarBox>


                <TitleBox>{detail?.sns}</TitleBox>
                <NameBox>{detail?.nickname}</NameBox>
                <DescBox>
                    {detail?.bio}
                </DescBox>
            </CenterBox>
        </Banner>
        <MainBox>
            <Roles roles={detail?.roles} switchRoles={switchRoles}/>
            <Cat sbt={sbt} seed={detail?.seed} />
            <ProgressOuter>
                <FstLine>
                    <LevelBox>
                        {t('level')} {detail?.level?.current_lv}
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

            <SbtOuter>
                <Seed  current="seed" item={list} />

            </SbtOuter>

            <SbtOuter>
                {
                    sbt?.map((item:any,index:number)=>( <SBT current={index} key={index} item={item} />))
                }

            </SbtOuter>
            <LastLine>


                {
                    detail?.social_accounts?.map((item:any,index:number)=>(
                        returnSocial(item.network, item.identity)?( <li key={`sbtInner_${index}`}>
                            <dt>
                                <Logo>
                                    <span className="iconLft">{returnSocial(item.network, item.identity)}</span>
                                </Logo>
                                {
                                    (item.network === "discord" || item.network === "wechat") && <div className="tit">{item.identity}</div>
                                }
                                {
                                    item.network !== "discord" && item.network !== "wechat" &&<div className="tit">{item.network}</div>
                                }

                            </dt>
                        </li>):""
                       ))
                }
            </LastLine>
        </MainBox>

    </BoxOuter>
}
