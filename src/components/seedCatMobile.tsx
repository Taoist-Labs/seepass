import styled from "styled-components";
import {useEffect} from "react";

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
    .imgBox{
      width: 100px;
      height: 100px;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 15px;
      }
    }
  .decBtm{
      position: absolute;
    bottom:1px;
    z-index: 9;
    font-size: 15px;
    line-height: 15px;
    text-align: center;
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
    bottom: 0;
  }
`

const  LftTop = styled.div`
  position: absolute;
  z-index: 9;
  left: 10px;
  top:10px;
  img{
    width: 30px;
    height: 30px;
    border-radius: 60px;
    border:3px solid #000;
  }
  div{
    position: absolute;
    width: 30px;
    height: 30px;
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

    left: 15px;
    top: 0;
  }

`

export default function SeedCatMobile({seed}:any){

    return <Box>
        {
            !!seed && <div className="imgBox">
                <img src={seed[0]?.image_uri} alt=""/>
            </div>
        }

        <LftTop>
            {
                !!seed &&seed[1] && seed[1]?.image_uri &&<div className="fst">
                    <img src={seed[1]?.image_uri} alt=""/>
                </div>
            }

            {
                !!seed &&seed[2]?.image_uri &&<div className="snd">
                    <img src={seed[2]?.image_uri} alt=""/>
                </div>
            }


        </LftTop>
        <div className="decBtm">
            <div className="nft">NFT</div>
            <div className="seed">SEED</div>
        </div>
        <div className="num">{seed?.length}</div>
    </Box>
}
