import styled from "styled-components";
import {useEffect, useState} from "react";

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  box-shadow: 0 5px 10px rgba(0,0,0,0.1);
  border-radius: 15px;

  .decBtm{
    position: absolute;
    bottom: 10px;
    z-index: 9;
    font-size: 15px;
    line-height: 15px;
    text-align: right;
    margin-right: 10px;
    .nft{
      color: #b5b6c4;
    }
    .seed{
      color: #000;
    }
  }
  .num{
    position: absolute;
    z-index: 9;
    font-size: 30px;
    color: #000;
    right: 10px;
    bottom: 10px;
  }
`
const InnerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -20px;
  .imgBox{
    width: 40%;
    height: 40%;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius:120px;
      border:3px solid #000;
      
    }
  }
  .fst{
    position: relative;
    z-index: 10;
  }
  .snd{

    -webkit-filter: grayscale(100%) contrast(200%);
    -moz-filter: grayscale(100%) contrast(200%);
    -ms-filter: grayscale(100%) contrast(200%);
    -o-filter: grayscale(100%) contrast(200%);
    filter: grayscale(100%) contrast(200%);
    filter: gray contrast(200%);
    margin-left: -30px;
  }
`
export default function SbtCatMobile({sbt}:any){

    const [item,setItem] = useState<any>();

    useEffect(() => {
        if(!sbt) return;
        console.log(sbt)
        setItem(sbt)
    }, [sbt]);



    return <Box>
        <InnerBox>
            {
                !!item && item[0] &&<div className="imgBox fst">
                    <img src={item[0]?.image_uri} alt=""/>
                </div>
            }
            {
                !!item && item[1] &&  <div className="imgBox snd">
                    <img src={item[1]?.image_uri} alt=""/>
                </div>
            }
        </InnerBox>

        <div className="decBtm">
            <div className="nft">ALL</div>
            <div className="seed">SBT</div>
        </div>
        <div className="num">{item?.length}</div>
    </Box>
}
