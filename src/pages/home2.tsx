import styled from "styled-components";
import BgImg from "../assets/newImages/banner.png";

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
  img{
    width: 100%;
    height: 100%;
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

const TagBox = styled.div`
    background: #fff;
  border-radius: 30px;
  padding: 50px 30px;
`

const TagCenter = styled.ul`
    display: flex;
  flex-wrap: wrap;
  width: 840px;
  
  li{
    border-radius: 45px;
    border:2px solid #000;
    width: 200px;
    margin:5px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

`

const SeedBox = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  margin: 80px 0;
  li{
    width: 280px;
    height: 280px;
    background: #000;
    border-radius: 20px;
    margin: 0 40px;
  }
`

const ProgressOuter = styled.div`
  display: flex;
  flex-direction: column;
  
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
    height: 18px;
    background: #000;
    width: ${props => props.width +"%"};
    border-radius: 16px;
  }
`
const TipsBox = styled.div`
    color: #b5b6c4;
  margin-top: 10px;
  margin-bottom: 100px;
`

const SbtOuter =styled.div`
    dl{
      margin-bottom: 50px;
    }
  dt{
    font-size: 35px;
    text-align: center;
    span{
      color: #B5B6C4;
    }
  }
  dd{
    margin-top: 30px;
    background: #000;
    padding: 20px;
    border-radius: 30px;
  }
  ul{
    display: flex;
    align-items: center;
  }
  li{
    background: #fff;
    border-radius: 20px;
    padding: 20px;
    margin-right: 10px;
    box-sizing: border-box;
    .imgBox{
      width: 128px;
      height: 128px;
      background: #d9d9d9;   
      border-radius: 16px;
      font-size: 15px;
    }
    .title{
      width: 128px;
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
const LastLine = styled.ul`
    display: flex;
  align-items: center;
  justify-content: center;
  .tit{
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
  margin: 5px 30px;

`


export default function Home2(){
    return <BoxOuter>
        <Banner>
            <CenterBox>
                <AvatarBox>
                    <img src="https://bafybeihwciazjns5wjehd3464ipqzxn2kzutazj2ovk3bol4oxjvpcl5za.ipfs.dweb.link/17_3.png" alt=""/>
                </AvatarBox>
                <TitleBox>baiyu.seedao</TitleBox>
                <NameBox>baiyu</NameBox>
                <DescBox>
                    Dev Mode is a new space in Figma that makes dev work easier. Inspect mocks, diff design changes, copy code snippets, and work with the tools you use every day.
                </DescBox>
            </CenterBox>
        </Banner>
        <MainBox>
            <TagBox>
                <TagCenter>
                    {
                        [...Array(8)].map((item,index)=>(<li key={index}>SeeDAO Member</li>

                        ))
                    }

                </TagCenter>

            </TagBox>
            <SeedBox>
                {
                    [...Array(3)].map((item,index)=>(<li key={`seed_${index}`}>

                    </li>))
                }
            </SeedBox>
            <ProgressOuter>
                <FstLine>
                    <LevelBox>
                        Level 5
                    </LevelBox>
                    <SCRBox>1,120,72xx SCR</SCRBox>
                </FstLine>
                <ProgressBox width="80">
                    <div className="inner" />
                </ProgressBox>
                <TipsBox>
                    NEXT LEVEL:172xxx SCR
                </TipsBox>
            </ProgressOuter>

            <SbtOuter>
                {
                    [...Array(2)].map((item,index)=>(<dl key={`sbt_${index}`}>
                        <dt>SBT <span>市政厅/节点</span></dt>
                        <dd>
                            <ul>
                                {
                                    [...Array(5)].map((inner,InnerIdx) =>(<li key={`sbtInner_${InnerIdx}`}>
                                        <div className="imgBox"></div>
                                        <div className="title">SeeDAO新手村第1期新手营游戏设计团队</div>
                                        <div className="num">ID: 31</div>
                                    </li>))
                                }

                            </ul>
                        </dd>
                    </dl>))
                }
            </SbtOuter>
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
