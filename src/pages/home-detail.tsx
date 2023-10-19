import styled from "styled-components";

const BoxOuter = styled.div`
    display: flex;
  flex-direction:column;
`

const FstLine = styled.div`
    display: flex;
  align-items: center;
`

const SeedBox = styled.div`
  background: #fff;
  border-radius: 30px;
  padding:20px 10px;
  margin: 0 30px;
  position: relative;
  z-index: 1;
  ul{
    display: flex;
    align-items: center;
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
    &:first-child{
      margin-left: 20px;
    }
    .imgBox{
      width: 60px;
      height: 60px;
      background: #d9d9d9;   
      border-radius: 3px;
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

export default function HomeMobile(){
    return <BoxOuter>
        <FstLine>

        </FstLine>

        <SeedBox>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </SeedBox>
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
    </BoxOuter>
}
