import styled from "styled-components";
import {useEffect} from "react";

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;

  .decBtm{
    position: absolute;
    bottom: 10px;
    z-index: 9;
    font-size: 30px;
    line-height: 35px;
    text-align: right;
    margin-right: 30px;
    .nft{
      color: #b5b6c4;
    }
    .seed{
      color: #fff;
    }
  }
  .num{
    position: absolute;
    z-index: 9;
    font-size: 60px;
    color: #fff;
    right: 40px;
    bottom: 10px;
  }
`
const InnerBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: -40px;
  .imgBox{
    width: 120px;
    height: 120px;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius:120px;
      border:5px solid #fff;
      
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
    margin-left: -60px;
  }
`
export default function SbtCat({item}:any){
    useEffect(()=>{
        console.log(item)
    },[item])
    return <Box>
        <InnerBox>
            {
                item?.tokens[0] &&<div className="imgBox fst">
                    <img src={item?.tokens[0]?.image_uri} alt=""/>
                </div>
            }
            {
                item?.tokens[1] &&  <div className="imgBox snd">
                    <img src={item?.tokens[1]?.image_uri} alt=""/>
                </div>
            }
        </InnerBox>

        <div className="decBtm">
            <div className="nft">{item?.category}</div>
            <div className="seed">SBT</div>
        </div>
        <div className="num">{item?.tokens?.length}</div>
    </Box>
}
