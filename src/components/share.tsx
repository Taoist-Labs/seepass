import styled from "styled-components";
import {X,Plus,PersonFill} from "react-bootstrap-icons";
import StarL from "../assets/newImages/starL.png";
import StarR from "../assets/newImages/starR.png";
import SeedCatMobile from "./seedCatMobile";
import SbtCatMobile from "./sbtCatMobile";
import { Spinner,Button } from 'react-bootstrap';
import html2canvas from "html2canvas";
import {use} from "i18next";
import {FormEvent, useEffect, useState} from "react";
import  DemoImg from "../assets/demo.jpg";
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
    const[current,setCurrent]=useState(1);
    const [imgUrl,setImgUrl] = useState('');
    const [loading,setLoading] = useState(false);


    useEffect(() => {
        setCurrent(0)
    }, []);

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

            setCurrent(1)
        });
    }


    const updateLogo = (e: FormEvent) => {
        const { files } = e.target as any;
        const url = window.URL.createObjectURL(files[0]);
        setLoading(true)

        console.log(files)


        if (files[0]) {
            const formData = new FormData();
            formData.append('file', files[0]);


            fetch(uploadURL, {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    // 处理上传成功的响应
                    console.log('上传成功:', data);
                })
                .catch((error) => {
                    // 处理上传失败的情况
                    console.error('上传失败:', error);
                });

            // axios.post(uploadURL, formData)
            //     .then((response) => {
            //         console.log('上传成功:', response.data);
            //     })
            //     .catch((error) => {
            //         console.error('上传失败:', error);
            //     });
        }
        // getBase64(url);
    };



    // const getBase64 = (imgUrl: string) => {
    //     window.URL = window.URL || window.webkitURL;
    //     const xhr = new XMLHttpRequest();
    //     xhr.open('get', imgUrl, true);
    //     xhr.responseType = 'blob';
    //     xhr.onload = function () {
    //         if (this.status === 200) {
    //             const blob = this.response;
    //             const oFileReader = new FileReader();
    //             oFileReader.onloadend = function (e) {
    //                 const { result } = e.target as any;
    //                 setImgUrl(result);
    //                 setLoading(false)
    //             };
    //             oFileReader.readAsDataURL(blob);
    //         }
    //     };
    //     xhr.send();
    // };

    const removeUrl = () => {
        setImgUrl('');
    };

    return <MaskBox>


        <BorderBox>
            <CloseBox onClick={()=>CloseShare()}>
                <X />
            </CloseBox>
            {
                current === 0 &&<>
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
                        <Button onClick={()=>download()}>生成twitter分享图片并下载</Button>
                    </BtmInnBox>
                </>
            }

            {
                current ===1 && <BoxStep2>
                    <UploadBox htmlFor="fileUpload" onChange={(e) => updateLogo(e)}>
                        {
                            !loading &&
                            <>
                                {!imgUrl && (
                                    <div>
                                        <input id="fileUpload" type="file" hidden accept=".jpg, .jpeg, .png" />
                                        <Plus />
                                    </div>
                                )}
                                {!!imgUrl && (
                                    <ImgBox onClick={() => removeUrl()}>
                                        <div className="del">
                                            <X className="iconTop" />
                                        </div>
                                        <img src={imgUrl} alt="" />
                                    </ImgBox>
                                )}
                            </>
                        }
                        {
                            loading &&       <div className="loading">
                                <div>
                                    <Spinner animation="border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                </div>
                                <span>loading</span>
                            </div>
                        }


                    </UploadBox>



                    <TipBox>
                        <Button>提交到twitter</Button>
                    </TipBox>

                </BoxStep2>
            }


        </BorderBox>
    </MaskBox>
}
