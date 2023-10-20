import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import LftArr from "../assets/newImages/arrow.png";
import RhtArr from "../assets/newImages/arrow2.png";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Grid, Pagination,Navigation } from 'swiper/modules';

const TagBox = styled.div`
    background: #fff;
  border-radius: 30px;
  padding: 40px 30px 0;
  box-sizing: border-box;
  position: relative;
  .swiper-button-prev1{
    left:20px;
    top:100px;
    background: url(${LftArr}) no-repeat;
    &:after{
      content:"";
    }
  }
  .swiper-button-next1{
    right:20px;
    top:100px;
    background: url(${RhtArr}) no-repeat;
    &:after{
      content:"";
    }
  }
  
  .swiper-pagination-bullet{
    background: #fff;
    border-radius: 100%;
    border: 1px solid #000;
    opacity: 1;
    &-active{
      background: #000;
    }
  }
`

const TagCenter = styled(Swiper)`
  width: 850px;
  height: 160px;
  padding:0 0 60px;
  .li{
    border-radius: 45px;
    border:2px solid #000;
    width: 200px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px !important;
    
  }

`
interface roleProps{
    roles:string[]
    switchRoles: (arg:string)=>string;
}

export default function Roles(props:roleProps){
    const {roles,switchRoles} = props
    return <>

        <TagBox>
            <div className="swiper-button-prev swiper-button-prev1"></div>
            <div className="swiper-button-next swiper-button-next1"></div>
            <TagCenter
                slidesPerView={4}
                grid={{
                    rows: 2,
                }}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}

                navigation={
                    {
                        nextEl: '.swiper-button-next1',
                        prevEl: '.swiper-button-prev1',
                    }
                }
                modules={[Grid, Pagination,Navigation]}
            >

                {
                    roles?.map((item:string,index:number)=>(<SwiperSlide className="li" key={`roles_${index}`}>{switchRoles(item)}</SwiperSlide>

                    ))
                }
            </TagCenter>
        </TagBox>


    </>
}
