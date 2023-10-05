import {Row,Col} from "react-bootstrap";
import styled from "styled-components";
import TwitterImg from "../assets/images/twitterNor.svg";
import DiscordImg from "../assets/images/discordNor.svg";
import axios from 'axios';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const Box = styled.div`
   min-height: 100vh;

  display: flex;
  width: 100%;
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
  @media (max-width: 991px) {
    box-shadow: none;
  
  }
  
  
`

const Avatar = styled.div`
    border-radius: 20px;
  overflow: hidden;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  width: 300px;
  margin:20px -20px 60px 0;
  .tag{
    border-radius: 4px;
    border: 1px solid #e5e5e5;
    padding:3px 10px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
`

const LevelBox = styled.div`
    display: flex;
  align-items: center;
  flex-direction: column;
`
interface Props{
    width:string;
}

const ProgressBox = styled.div<Props>`
    width: 100%;
  height: 12px;
  background: #eee;
  border-radius: 10px;
  margin: 10px 0;
  overflow: hidden;
  .inner{
    width:${props=>props.width};
    background: #a16eff;
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

const Num  = styled.div`
  font-family: 'Jost-Bold';
  color: #a16eff;
`

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
  }
  dt{
    font-weight: normal;
  }
  dd{
    color: #a16eff;
    //text-decoration: underline;
  }
  img{
    width: 30px;
    cursor: pointer;
  }

`

const Rht = styled.div`
    margin: 0 50px;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`


const TitRhtBox = styled.div`
    width: 100%;
  text-align: center;
  padding-top: 40px;
  margin-bottom: 20px;
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
    margin-top: 30px;
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
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
`



export default function Home(){

    const [ detail,setDetail] = useState<any>();
    const {id} = useParams();
    console.log(id)

    useEffect(() => {
        getDetail()
    }, []);
    const getDetail = async() =>{
        axios.get(`https://test-seepass-api.seedao.tech/seepass/${id}`)
            .then(response => {
                const {data} = response;
                setDetail(data)
            })
            .catch(error => {
                console.error(error);
            });


        // setDetail({
        //     "sns": "alice.seedao",
        //     "nickname": "alice",
        //     "wallet": "0x1234123412341234",
        //     "avatar": "https://avatars.githubusercontent.com/u/7518647?v=4",
        //     "roles": [
        //         "SGN Holder",
        //         "S4节点"
        //     ],
        //     "scr": {
        //         "amount": "50000",
        //         "contract_addr": "0x12341234"
        //     },
        //     "level": {
        //         "current_lv": "2",
        //         "next_lv": "3",
        //         "scr_to_next_lv": "50000",
        //         "upgrade_percent": "37.5"
        //     },
        //     "seed": [
        //         {
        //             "token_id": "123",
        //             "token_amount": "1",
        //             "contract_addr": "0x12341234",
        //             "contract_type": "erc1155",
        //             "image_uri": "https://dweb.link/ipfs/bafybeihwciazjns5wjehd3464ipqzxn2kzutazj2ovk3bol4oxjvpcl5za/123_2.png",
        //         }
        //     ],
        //     "sbt": [
        //         {
        //             "name": "onbroading",
        //             "token_id": "1",
        //             "token_amount": "1",
        //             "contract_addr": "0x12341234",
        //             "contract_type": "erc1155",
        //             "image_uri": "https://place-holder.it/200"
        //         }
        //     ],
        //     "achievements": [],
        //     "social_network_accounts": [
        //         {
        //             "network": "twitter",
        //             "identity": "alicetwitter"
        //         },
        //         {
        //             "network": "discord",
        //             "identity": "alicedc"
        //         }
        //     ]
        // })
    }

    const returnIcon = (str:string) =>{
        let icon;
        if(str === "twitter"){
            icon = TwitterImg;
        }
        else if(str === "discord"){
            icon = DiscordImg;
        }
        return icon;
    }
    return <Box>
        <RowBox>
            <LftBox md={12} lg={3}>
                <div>
                    <div className="lftTop">
                        <Avatar>
                            <img src={detail?.avatar} alt=""/>
                        </Avatar>
                        <NameBox>
                            <div className="name">{detail?.sns}</div>
                            <div className="domain">{detail?.nickname}</div>
                        </NameBox>


                    </div>
                <div>
                    <TagLine>
                        {
                            detail?.roles?.map((item:string,index:number)=>( <div className="tag" key={`roles_${index}`}>{item}</div>))
                        }
                    </TagLine>
                    <LevelBox>
                        <TopLine>
                            <div>当前等级</div>
                            <Num>Level{detail?.level?.current_lv} {detail?.scr?.amount}SCR</Num>
                        </TopLine>
                        <ProgressBox width={`${detail?.level?.upgrade_percent}%`}>
                            <div className="inner">
                                <div className="percent" >{`${detail?.level?.upgrade_percent}%`}</div>
                            </div>
                        </ProgressBox>
                        <TipsBox>
                            <div>距离下一等级还差</div>
                            <div>{detail?.level?.scr_to_next_lv}SCR</div>
                        </TipsBox>
                    </LevelBox>
                    <SocialBox>
                        {
                            detail?.social_network_accounts?.map((item:any,index:number)=>( <dl key={`roles_${index}`}>
                            <dt>
                                <img src={returnIcon(item.network)} alt=""/>
                                <span>{item.network}</span>
                            </dt>
                            <dd>
                                {item.identity}
                            </dd>
                            </dl>))
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
                                <div className="tips">Seed NFT serves as a citizenship proof within the SeeDAO network polis and is a prerequisite to obtain governance rights.
                                    Every Seed NFT is an unique seed, capturing your personal imprint on our shared SeeDAO journey.</div>
                            </TitRhtBox>
                            <ListBox>
                                {
                                    detail?.seed?.map((item:any,index:number)=>(
                                        <CardBox md={3} key={`seed_${index}`}>
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
                        !!detail?.sbt?.length && <>
                            <TitRhtBox>
                                <div className="tit">SBT</div>
                                <div className="tips">According to SIP-55 , the criteria and process for issuing SBT across SeeDAO have been clarified. SBT is divided into four categories: Identity, Education, Event, and Project, which are used for identity verification for City Hall, Incubator, offline bases, Guild, and all project proposals.</div>
                            </TitRhtBox>
                            <ListBox>
                                {
                                    detail?.sbt?.map((item:any,index:number)=>(
                                        <CardBox md={3} key={`sbt_${index}`}>
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


                </Rht>

            </Col>
        </RowBox>
    </Box>
}
