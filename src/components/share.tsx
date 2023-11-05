import styled from "styled-components";
import {X,Plus,PersonFill} from "react-bootstrap-icons";
import StarL from "../assets/newImages/starL.png";
import StarR from "../assets/newImages/starR.png";
import SeedCatMobile from "./seedCatMobile";
import SbtCatMobile from "./sbtCatMobile";
import { Spinner,Button } from 'react-bootstrap';
import * as htmlToImage from "html-to-image";
import {FormEvent, useEffect, useState} from "react";
import axios from 'axios';

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

const BorderBox = styled.div`
    background: #fff;
  padding: 40px;
  position: relative;
  border-radius: 30px;
  @media (max-width: 991px) {
    padding: 10px;
  }
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
    font-size:80px;
    color: rgba(0,0,0,0.12);
    position: relative;
    z-index: 5;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
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
  border: 1px solid #fff;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  color:#fff
`

const BtmInnBox = styled.div`
    padding: 20px 0;
  text-align: center;
  cursor: pointer;
`


const BoxStep2 = styled.div`
    padding: 20px;
`
const UploadBox = styled.label`
  background: #f5f5f5;
  width: 550px;
  min-height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  cursor: pointer;
  font-size: 34px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
  .loading{
    font-size: 16px;
    display: flex;
    align-items: center;
    span{
      margin-left: 20px;
    }
  }
`;


const ImgBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .del {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    //display: flex;
    align-items: center;
    justify-content: center;
    background: #a16eff;
    opacity: 0.5;
    color: #fff;
    cursor: pointer;
    .iconTop {
      font-size: 40px;
    }
  }
  &:hover {
    .del {
      display: flex;
    }
  }
`;

const TipBox = styled.div`
    margin-top: 40px;
  text-align: center;
`

export default function ShareBox({detail,CloseShare}:any){

    const uploadURL='https://seepass-share.xiaosongfu.workers.dev'
    // const[current,setCurrent]=useState(1);
    const [loading,setLoading] = useState(false);

    const [imgCode, setImgCode] = useState("");

    const [imgBlob, setImgBlob] = useState<Blob>();

    const download = () =>{
        if(!document.getElementById("downloadBox"))return;

        const node = document.getElementById("downloadBox");
        htmlToImage
            .toBlob(node!, { cacheBust: true })
            .then( (data:any) => {
                data && setImgBlob(data);
            })
            .catch( (error:any) =>{
                console.error("oops, something went wrong!", error);
            });
    }

    useEffect(() => {
        if (!imgBlob) return;

        setLoading(true)
        uploadImage(imgBlob)
            .then((res) => res.json())
            .then((res) => {
                setLoading(false)
                setImgCode(res.name);
            });
    }, [imgBlob]);


    useEffect(() => {
        if(!imgCode)return;

        const shareLink = `${uploadURL}/share?sns=${detail?.sns}&image=${imgCode}`;
        window.open(
            `https://twitter.com/intent/tweet?url=${(shareLink)}`,
            "_blank",
        );
        //
        // setTimeout(()=>{
        //
        // },1000)

    }, [imgCode]);


    const uploadImage = (fileData:any) => {
       return  fetch(uploadURL, {
            method: "POST",
            body: fileData,
        })
        // if (files[0]) {
        //     const formData = new FormData();
        //     formData.append('file', files[0]);
        //     fetch(uploadURL, {
        //         method: 'POST',
        //         body: formData,
        //     })
        //         .then((response) => response.json())
        //         .then(async (data) => {
        //             console.log('上传成功:', data.name);
        //             // await getImage(data.name)
        //
        //
        //         })
        //         .catch((error) => {
        //
        //             console.error('upload error:', error);
        //         });
        //
        // }

    };


    return <MaskBox>


        <BorderBox>
            <CloseBox onClick={()=>CloseShare()}>
                <X />
            </CloseBox>

                    <Box id="downloadBox">
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
                    <BtmInnBox >
                        <Button onClick={()=>download()}>分享到twitter</Button>
                    </BtmInnBox>


        </BorderBox>
    </MaskBox>
}
