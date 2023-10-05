import {Row,Col} from "react-bootstrap";
import styled from "styled-components";
import TwitterImg from "../assets/images/twitterNor.svg";
import DiscordImg from "../assets/images/discordNor.svg";
import axios from 'axios';
import {useEffect} from "react";

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
  margin:20px -20px 60px 0;
  .tag{
    border-radius: 4px;
    border: 1px solid #e5e5e5;
    padding:3px 10px;
    margin-right: 20px;
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
  img{
    width: 30px;
    cursor: pointer;
  }
  a{
    color: #a16eff;
    text-decoration: underline;
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

    useEffect(() => {
        getDetail()
    }, []);
    const getDetail = async() =>{
        axios.get('https://test-seepass-api.seedao.tech/seepass/0x82944b68bB92fA11764041AA61204b5fdC85F429')
            .then(response => {

                console.log(response)
            })
            .catch(error => {
                console.error(error);
            });
    }
    return <Box>
        <RowBox>
            <LftBox md={12} lg={3}>
                <div>
                    <Avatar>
                        <img src="https://avatars.githubusercontent.com/u/7518647?v=4" alt=""/>
                    </Avatar>

                    <NameBox>
                        <span className="name">Frozen</span>
                        <span className="domain">. seedao</span>
                    </NameBox>
                    <TagLine>
                        <div className="tag">S4节点</div>
                        <div  className="tag">SGN Holder</div>
                    </TagLine>
                    <LevelBox>
                        <TopLine>
                            <div>当前等级</div>
                            <Num>LeveL2 5000SCR</Num>
                        </TopLine>
                        <ProgressBox width="20%">
                            <div className="inner">
                                <div className="percent" >45.4%</div>
                            </div>
                        </ProgressBox>
                        <TipsBox>
                            <div>距离下一等级还差</div>
                            <div>10000SCR</div>
                        </TipsBox>
                    </LevelBox>
                        <SocialBox>
                            <dl>
                                <dt>
                                    <img src={TwitterImg} alt=""/>
                                    <span>twitter</span>
                                </dt>
                                <dd>
                                    <a href="#">@twitter</a></dd>
                            </dl>
                            <dl>
                                <dt>
                                    <img src={DiscordImg} alt=""/>
                                    <span>discord</span>
                                </dt>

                                <dd>
                                    <a href="#">discord</a></dd>
                            </dl>


                        </SocialBox>
                </div>
            </LftBox>
            <Col md={12} lg={9}>
                <Rht>
                    <TitRhtBox>
                        <div className="tit">SEED</div>
                        <div className="tips">Seed NFT serves as a citizenship proof within the SeeDAO network polis and is a prerequisite to obtain governance rights.
                            Every Seed NFT is an unique seed, capturing your personal imprint on our shared SeeDAO journey.</div>
                    </TitRhtBox>
                    <ListBox>
                        {
                            [...Array(10)].map((item,index)=>(
                                <CardBox md={3}>
                                    <div className="bgBox">
                                        <div className="photo">
                                            <div className="aspect" />
                                            <div className="content">
                                                <div className="innerImg">
                                                    <img src="https://i.seadn.io/gcs/files/58f675ca7ec0fc9d2e6f8d627d2ba7ad.png?w=512&auto=format" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardBox>
                            ))
                        }
                    </ListBox>
                    <TitRhtBox>
                        <div className="tit">SBT</div>
                        <div className="tips">According to SIP-55 , the criteria and process for issuing SBT across SeeDAO have been clarified. SBT is divided into four categories: Identity, Education, Event, and Project, which are used for identity verification for City Hall, Incubator, offline bases, Guild, and all project proposals.</div>
                    </TitRhtBox>
                    <ListBox>
                        {
                            [...Array(10)].map((item,index)=>(
                                <CardBox md={3}>
                                    <div className="bgBox">
                                        <div className="photo">
                                            <div className="aspect" />
                                            <div className="content">
                                                <div className="innerImg">
                                                    <img src="https://i.seadn.io/gcs/files/58f675ca7ec0fc9d2e6f8d627d2ba7ad.png?w=512&auto=format" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardBox>
                            ))
                        }
                    </ListBox>
                </Rht>

            </Col>
        </RowBox>
    </Box>
}
