import {Row,Col} from "react-bootstrap";
import styled, { css } from "styled-components";
// import TwitterImg from "../assets/images/twitterNor.svg";
// import DiscordImg from "../assets/images/discordNor.svg";
import axios from 'axios';
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import { PersonFill } from "react-bootstrap-icons"
import Loading from "./loading";
import {Twitter, Wechat ,Google,Discord} from "react-bootstrap-icons";
import MirrorImg from "./mirror.png";
import {Form} from "react-bootstrap"
import { useTranslation } from 'react-i18next';
import EmailIcon from "../assets/images/email.png"

const getLevelColor = (level: string) => {
    switch (level) {
        case "0":
        case "1":
            return "#FF0000";
        case "2":
        case "3":
            return "#01B492";
        case "4":
        case "5":
            return "#FFFFFF";
        case "6":
        case "7":
            return "#FF0091";
        case "8":
        case "9":
            return "#00B1FF";
        default:
            return ""
    }
}
const getLevelBorderColor = (level: string) => {
    switch (level) {
        case "4":
        case "5":
            return "#000";
        default:
            return ""
    }
};

const Box = styled.div`
   min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: stretch;
`
const RowBox = styled(Row)`
  height: 100vh;
  width: 100%;
  
`
const LftBox = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0,0,0,0.1);
  position: relative;
  @media (max-width: 991px) {
    box-shadow: none;
  }
  
  
`

const Avatar = styled.div`
    border-radius: 20px;
  overflow: hidden;
  width: 12vw;
  height:12vw;
  margin: 0 auto 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f3f8;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .iconBox{
    font-size:200px;
    color: rgba(0,0,0,0.12);
  }
  @media (max-width: 991px) {
    width: 200px;
    height:200px;
    margin-top: 60px;
  }
`

const NameBox = styled.div`
    font-size: 24px;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
  background: #f5f5f5;
  padding: 10px;
  border-radius: 10px;
  .domain{
    font-size: 14px;
  }
  .name{
    font-family: 'Jost-Bold';
  }
`

const TagLine = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 17vw;
  margin:20px -20px 10px 0;
  .tag{
    border-radius: 4px;
    border: 1px solid #e5e5e5;
    padding:3px 10px;
    margin-right: 20px;
    margin-bottom: 20px;
    white-space: nowrap;
    font-size: 12px;
  }
  @media (max-width: 991px) {
    width: 100%;
  }
`

const LevelBox = styled.div`
    display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`
interface Props{
    width: string;
    color: string;
    border: string;
}

const BorderStyle = css`
    border: 1px solid #000;
    .percent {
        color: #000;
    }
`
const ProgressBox = styled.div<Props>`
    width: 100%;
  height: 12px;
  background: #eee;
  border-radius: 10px;
  margin: 10px 0;
  overflow: hidden;
  .inner{
    width:${props=>props.width};
    background: ${props=>props.color || "#a16eff"};
    height: 12px;
    position: relative;
  }
  .percent{
    position: absolute;
    width: 100%;
    right: 5px;
    text-align: right;
    top: -2px;
    font-size: 10px;
    color: #eee;
  }
  ${props => props.border && BorderStyle}
`

const TipsBox = styled.div`
    font-size: 14px;
  opacity: 0.6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const TopLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const Num = styled.div<{ color: string; border: string }>`
  font-family: "Jost-Bold";
  color: ${(props) => props.border || props.color || "#a16eff"};
`;

const SocialBox =styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px -20px 0 ;
  dl{
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: 14px;
    border-bottom: 1px solid #eee;
  }
  dt{
    font-weight: normal;
    display: flex;
    align-content: flex-start;
  }
  dd{
    padding-top: 10px;
    margin-left: 20px;
    word-break: break-all;
  }
  .iconLft{
    color: #007aff;
    font-size: 20px;
    margin-right: 10px;
  }
  .spanTit{
    margin-top: 5px;
  }
  img{
    width:20px;
    cursor: pointer;
  }

`
const SocialLink = styled.a`
    
`;

const Rht = styled.div`
    margin: 0 50px;
  height: 100vh;
  overflow-y: auto;
  
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  @media (max-width: 991px) {
    margin: 0;
  }
  
`


const TitRhtBox = styled.div`
    width: 100%;
  text-align: center;
  padding-top: 40px;
  margin-bottom: 20px;
  box-sizing: border-box;
  .tit{
    font-family: 'Jost-Bold';
    font-size: 24px;
    margin-bottom: 10px;
    
  }
  .tips{
    width: 60%;
    text-align: center;
    margin: 0 auto;
    font-size: 10px;
  }
`

const ListBox = styled(Row)`
    margin: 30px 0 0;
  padding: 0;
`

const CardBox = styled(Col)`
  margin-bottom: 20px;
    .bgBox{
      font-size: 14px;
      border-radius: 10px;
      overflow: hidden;
    }

  .photo{

    display: flex !important;
    overflow: hidden;
    .aspect {
      padding-bottom: 100%;
      height: 0;
      flex-grow: 1 !important;
    }
    .content {
      width: 100%;
      margin-left: -100% !important;
      max-width: 100% !important;
      flex-grow: 1 !important;
      position: relative;
    }
    .innerImg{
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        max-width: 100%;
        max-height: 100%;
        //object-fit: cover;
      }
    }
  }
`
const LanBox = styled.div`
    position: absolute;
  right: 20px;
  top:30px;
  select{
    border: 0;
  }
`

const Bio = styled.div`
    margin-bottom: 60px;
  font-size: 12px;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 10px;
  width: 100%;
  @media (max-width: 991px) {
    width: 100%;
  }
`


export default function Home(){
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

    const returnSocial = (str: string, val: string) => {
      switch (str) {
        case "twitter":
          return [
            <Twitter />,
            <SocialLink href={val} target="_blank">
              {val}
            </SocialLink>,
          ];
        case "wechat":
          return [<Wechat />, val];
        case "google":
          return [
            <Google />,
            <SocialLink href={`mailto:${val}`} target="_blank">
              {val}
            </SocialLink>,
          ];
        case "discord":
          return [<Discord />, val];
        case "mirror":
          return [
            <img src={MirrorImg} alt="" />,
            <SocialLink href={val} target="_blank">
              {val}
            </SocialLink>,
          ];
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

    return <>
        {
            show && <Loading />
        }
        <Box>
        <RowBox>
            <LftBox md={12} lg={3}>
                <LanBox>
                    <Form.Select size="sm" value={getLanguages().find((item) => item.value === lan)?.value || getLanguages()[0].value} onChange={(event: any) => changeLang(event.target.value)}>
                        {
                            getLanguages().map((item,index)=><option value={item.value} key={index} >{item.label}</option>)
                        }

                    </Form.Select>
                </LanBox>

                <div>
                    <div className="lftTop">
                        <Avatar>

                            {
                                !!detail?.avatar &&<img src={detail?.avatar} alt=""/>
                            }
                            {
                                !detail?.avatar &&<PersonFill  className="iconBox"/>
                            }


                        </Avatar>
                        {
                            (!!detail?.sns || !!detail?.nickname) &&  <NameBox>
                                <div className="name">{detail?.sns}</div>
                                <div className="domain">{detail?.nickname}</div>
                            </NameBox>
                        }

                    </div>
                <div>
                    <TagLine>
                        {
                            detail?.roles?.map((item:string,index:number)=>( <div className="tag" key={`roles_${index}`}>{switchRoles(item)}</div>))
                        }
                    </TagLine>
                    {
                        !!detail?.bio &&<Bio>
                            {detail?.bio}
                        </Bio>
                    }

                    <LevelBox>
                        <TopLine>
                            <div>{t('current')}</div>
                            <Num color={getLevelColor(detail?.level?.current_lv)} border={getLevelBorderColor(detail?.level?.current_lv)}>
                                {t('level')}{detail?.level?.current_lv} {formatNumber(detail?.scr?.amount)}SCR
                            </Num>
                        </TopLine>
                        <ProgressBox
                            width={`${detail?.level?.upgrade_percent}%`}
                            border={getLevelBorderColor(detail?.level?.current_lv)}
                            color={getLevelColor(detail?.level?.current_lv)}>
                            <div className="inner">
                                <div className="percent" >{`${detail?.level?.upgrade_percent || 0}%`}</div>
                            </div>
                        </ProgressBox>
                        <TipsBox>
                            <div>{t('nextLevel')}</div>
                            <div>{formatNumber(detail?.level?.scr_to_next_lv)}SCR</div>
                        </TipsBox>
                    </LevelBox>
                    <SocialBox>
                        {
                            detail?.social_accounts?.map((item:any,index:number)=>( <dl key={`roles_${index}`}>
                            <dt>
                                {/*<img src={returnIcon(item.network)} alt=""/>*/}
                                <span className="iconLft">{returnSocial(item.network, item.identity)?.[0]}</span>
                                <span className="spanTit">{item.network}</span>
                            </dt>
                            <dd>
                                {returnSocial(item.network, item.identity)?.[1]}
                            </dd>
                            </dl>))
                        }
                        {
                          detail?.email && <dl>
                            <dt>
                                <span className="iconLft"><img src={EmailIcon} alt="" /></span>
                                <span className="spanTit">{t("email")}</span>
                            </dt>
                            <dd>
                              <SocialLink href={`mailto:${detail.email}`} target="_blank">
                                  {detail.email}
                              </SocialLink>
                            </dd>
                            </dl>
                        }
                    </SocialBox>
                </div>

                </div>
            </LftBox>
            <Col md={12} lg={9}>
                <Rht>
                    {
                        !!detail?.seed?.length && <>
                            <TitRhtBox>
                                <div className="tit">SEED</div>
                                <div className="tips">{t('seedTips')}</div>
                            </TitRhtBox>
                            <ListBox>
                                {
                                    detail?.seed?.map((item:any,index:number)=>(
                                        <CardBox md={2} key={`seed_${index}`}>
                                            <div className="bgBox">
                                                <div className="photo">
                                                    <div className="aspect" />
                                                    <div className="content">
                                                        <div className="innerImg">
                                                            <img src={item.image_uri} alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardBox>
                                    ))
                                }
                            </ListBox>
                        </>
                    }
                    {
                        sbt?.map((item:any,index:number)=>(<div key={`sbt_${index}`}>
                            <TitRhtBox>
                                <div className="tit">SBT - {item.category}</div>
                            </TitRhtBox>
                            <ListBox>
                                {
                                    item.tokens.map((it:any,ind:number)=>(
                                        <CardBox md={2} key={`sbt_${item.category}_${ind}`}>
                                            <div className="bgBox">
                                                <div className="photo">
                                                    <div className="aspect" />
                                                    <div className="content">
                                                        <div className="innerImg">
                                                            <img src={it.image_uri} alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardBox>
                                    ))
                                }
                            </ListBox>
                        </div>))
                    }


                </Rht>

            </Col>
        </RowBox>
    </Box>
    </>
}
