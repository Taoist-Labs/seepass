import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import RhtArr from "../assets/newImages/arrow2W.png";
import LftArr from "../assets/newImages/arrowW.png";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Grid, Pagination,Navigation } from 'swiper/modules';

const DlBox = styled.dl`
    margin-bottom: 50px;

  .swiper-pagination-bullet{
    background: #fff;
    border-radius: 100%;
    &-active{
      background: #fff;
    }
  }

  .lft{
    left:20px;
    top:160px;
    background:url(${LftArr}) no-repeat;
    &:after{
      content:"";
    }
  }
  .rht{
    right:20px;
    top:160px;
    background: url(${RhtArr}) no-repeat;
    &:after{
      content:"";
    }
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
    padding: 50px 20px 10px;
    border-radius: 30px;
    position: relative;
  }
  .ul{
    width: 880px;
    padding-bottom: 50px;
  }
  .li{
    background: #fff;
    border-radius: 20px;
    padding: 20px;
    margin-right: 10px;
    box-sizing: border-box;
    height: 250px;
    .imgBox{
      width: 128px;
      height: 128px;
      background: #d9d9d9;
      border-radius: 16px;
      font-size: 15px;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
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
interface Iprops{
    current:number;
    item:any
}


export default function SBT(props:Iprops){
    const {current,item} = props;

    return <>
        <DlBox>
                <dt>SBT <span>{item.category}</span></dt>
                <dd >
                    <div className={`swiper-button-prev lft swiper-button-prev${current}`}></div>
                    <div className={`swiper-button-next rht swiper-button-next${current}`}></div>
                      <Swiper
                          className="ul"
                        slidesPerView={5}
                        spaceBetween={10}
                        pagination={{
                        clickable: true,
                    }}

                        navigation={
                        {
                            nextEl: `.swiper-button-next${current}`,
                            prevEl: `.swiper-button-prev${current}`,
                        }
                    }
                        modules={[Grid, Pagination,Navigation]}
                        >
                        {
                            item.tokens?.map((it:any,ind:number) =>(<SwiperSlide className="li" key={`sbtInner_${ind}`}>
                                <div className="imgBox">
                                    <img src={it.image_uri} alt=""/>
                                </div>
                                <div className="title">SeeDAO新手村第1期新手营游戏设计团队</div>
                                <div className="num">ID: 31</div>
                            </SwiperSlide>))
                        }

                    </Swiper>
                </dd>
            </DlBox>
        </>
}
