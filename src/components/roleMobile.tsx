import styled from "styled-components";
import {Swiper,SwiperSlide} from "swiper/react";
import {Grid, Pagination} from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


const TagBox = styled.div`
    background: #fff;
  border-radius: 30px;
  padding:30px 30px 0;
  margin: 0 30px;
  position: relative;
  z-index: 1;

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
  width: 270px;
  height: 150px;
  padding-bottom: 30px;
  .li{
    border-radius: 45px;
    border:1px solid #000;
    width: 120px;
    height: 30px;
    display: flex;
    align-items: center;
    font-size: 12px;
    justify-content: center;
    padding: 0 20px;
  }

`
const TagLessBox = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 20px;
  justify-content: space-between;
  li{
    border-radius: 45px;
    border:1px solid #000;
    width: 48%;
    height: 30px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 12px;
    justify-content: center;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
    padding: 0 20px;
  }
  

`

interface roleProps{
    roles:string[]
    switchRoles: (arg:string)=>string;
}
export default function RoleMobile(props:roleProps){
    const {roles,switchRoles} = props
    return <>
        {
            roles?.length <= 6 &&<TagBox>
                <TagLessBox>
                    {
                        roles?.map((item:string,index:number)=>(<li key={`roles_${index}`}>{switchRoles(item)}</li>

                        ))
                    }
                </TagLessBox>

            </TagBox>
        }
        {
         roles?.length > 6  &&<TagBox>
        <TagCenter
            slidesPerView={2}
            grid={{
                rows: 3,
            }}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}

            modules={[Grid, Pagination]}
        >

            {
                roles?.map((item:string,index:number)=>(<SwiperSlide className="li" key={`roles_${index}`}>{switchRoles(item)}</SwiperSlide>

                ))
            }
        </TagCenter>

    </TagBox>
        }
    </>
}
