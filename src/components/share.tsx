import styled from "styled-components";
import {PersonFill} from "react-bootstrap-icons";
import StarL from "../assets/newImages/starL.png";
import StarR from "../assets/newImages/starR.png";
import SeedCatMobile from "./seedCatMobile";
import SbtCatMobile from "./sbtCatMobile";
import {X} from "react-bootstrap-icons";
import html2canvas from "html2canvas";
import {use} from "i18next";
import {useEffect} from "react";

const MaskBox = styled.div`
    position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.4);
  left: 0;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Box = styled.div`
    width: 550px;
  background: #FBF5EF;
  position: relative;
  @media (max-width: 991px) {
    width: 90%;
  }
`
const TopBox = styled.div`
    height: 199px;
  background: #000;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  align-content: center;
  justify-content: center;
  color: #fff;
`

const InnerBox = styled.div`
    display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 40px;
`

const AvatarBox = styled.div`
    margin: 0 auto;
  width: 80px;
  height: 80px;
  border-radius: 15px;
  background: #fff;
  position: relative;
  .lft{
    background: url(${StarL});
    width: 114px;
    height: 41px;
    position: absolute;
    left: -70px;
    top: 50px;
  }
  .rht{
    background: url(${StarR});
    width: 114px;
    height: 41px;
    position: absolute;
    right: -70px;
    top: 10px;
  }
  .iconBox{
    font-size:100px;
    color: rgba(0,0,0,0.12);
    position: relative;
    z-index: 5;
  }
  img{
    width: 100%;
    height: 100%;
    border-radius: 15px;
    border: 2px solid #fff;
    position: relative;
    z-index: 5;
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
  margin:10px auto 20px;
  color: #535353;
  @media (max-width: 991px) {
    width: 140px;
  }
`

const MidLine = styled.div`
  position: absolute;
  width: 500px;
  left: 25px;
  top:130px;
  ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  li{
    width: 100px;
    height: 100px;
    border-radius: 20px;
    background: #fff;
  }
  @media (max-width: 991px) {
    width: 90%;
    top: 165px;
    left: 5%;
    li{
      width: 80px;
      height: 80px;
      border-radius: 20px;
      background: #fff;
      
    }
  }
`

const CloseBox = styled.div`
    position: absolute;
  z-index: 9;
  font-size: 20px;
  top:10px;
  right:-35px;
  cursor: pointer;
  border: 1px solid #000;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`

export default function ShareBox({detail,CloseShare}:any){

    const download = () =>{
        if(!document.getElementById("downloadBox"))return;
        html2canvas(document.getElementById("downloadBox")!, {
            allowTaint: false,
            useCORS: true,
        }).then( (canvas:HTMLCanvasElement)=> {
            // toImage
            const dataImg = new Image()
            dataImg.src = canvas.toDataURL('image/png')
            const alink = document.createElement("a");
            alink.href = dataImg.src;
            const time = (new Date()).valueOf();
            alink.download = `TECHX_Mnemonic_${time}.jpg`;
            alink.click();
        });
    }

    useEffect(() => {

        download()

    }, []);


    return <MaskBox>
        <Box id="downloadBox">
            <CloseBox onClick={()=>CloseShare()}>
                <X />
            </CloseBox>

            <TopBox>
                <InnerBox>
                    <AvatarBox>
                        <div className="lft" />
                        <div className="rht" />
                        {
                            !!detail?.avatar &&<img src={detail?.avatar} alt=""/>
                        }
                        {
                            !detail?.avatar &&<PersonFill  className="iconBox"/>
                        }
                    </AvatarBox>
                    <TitleBox>{detail?.sns}</TitleBox>
                    <NameBox>{detail?.nickname}</NameBox>

                </InnerBox>
            </TopBox>
            <MidLine>
                <ul>
                    <li>
                        <SeedCatMobile  seed={detail?.seed} />
                    </li>
                    <li>
                        <SbtCatMobile sbt={detail?.sbt} />
                    </li>
                </ul>
            </MidLine>
            <DescBox>
                {detail?.bio}
            </DescBox>
        </Box>
    </MaskBox>
}
