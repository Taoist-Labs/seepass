import styled from "styled-components";


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
  img{
    width: 100%;
    height: 100%;
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
const TagBox = styled.div`
    background: #fff;
  border-radius: 30px;
  padding:30px;
  margin: 0 30px;
  position: relative;
  z-index: 1;
`

const TagCenter = styled.ul`
    display: flex;
  flex-wrap: wrap;
  width: 100%;
  li{
    border-radius: 45px;
    border:1px solid #000;
    width: 45%;
    margin:5px;
    height: 30px;
    display: flex;
    align-items: center;
    font-size: 12px;
    justify-content: center;
  }

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
    return <BoxOuter>
        <BannerBox>
            <InnerBox>
                <AvatarBox>
                    <img src="https://bafybeihwciazjns5wjehd3464ipqzxn2kzutazj2ovk3bol4oxjvpcl5za.ipfs.dweb.link/17_3.png" alt=""/>
                </AvatarBox>
                <TitleBox>baiyu.seedao</TitleBox>
                <NameBox>baiyu</NameBox>
                <DescBox>
                    Dev Mode is a new space in Figma that makes dev work easier. Inspect mocks, diff design changes, copy code snippets, and work with the tools you use every day.
                </DescBox>
            </InnerBox>
        </BannerBox>
        <MainBox>
            <TagBox>
                <TagCenter>
                    {
                        [...Array(8)].map((item,index)=>(<li key={index}>SeeDAO Member</li>

                        ))
                    }

                </TagCenter>

            </TagBox>
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
