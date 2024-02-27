import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import RhtArr from "../assets/newImages/arrow2.png";
import LftArr from "../assets/newImages/arrow.png";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Grid, Pagination,Navigation } from 'swiper/modules';

import SeedCat from "./seedCat";
import SbtCat from "./sbtCat";

const SeedBox = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  position: relative;
  .li{
    width: 280px;
    height: 280px;
    background: #000;
    border-radius: 20px;
  }
  .ul{
    width: 960px;
    padding-bottom: 50px;
    
  }
  .swiper-pagination-bullet{
    background: #000;
    border-radius: 100%;
    &-active{
      background: #000;
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
`

interface Iprops{
    sbt?:any
    seed?:any
}
export default function Cat(props:Iprops){
    const {sbt,seed} = props;
    return <>
        <SeedBox>
            <div className={`swiper-button-prev lft swiper-button-prev_nft`}></div>
            <div className={`swiper-button-next rht swiper-button-next_nft`}></div>
            <Swiper
                className="ul"
                slidesPerView={3}
                spaceBetween={50}
                pagination={{
                    clickable: true,
                }}

                navigation={
                    {
                        nextEl: `.swiper-button-next_nft`,
                        prevEl: `.swiper-button-prev_nft`,
                    }
                }
                modules={[Grid, Pagination,Navigation]}
            >
                {
                    !!seed?.length &&<SwiperSlide className="li"><SeedCat seed={seed} /></SwiperSlide>
                }

                {
                    sbt?.map((item:any,index:string)=>(<SwiperSlide className="li" key={index}><SbtCat item={item}/></SwiperSlide>))
                }

            </Swiper>
        </SeedBox>
    </>
}
