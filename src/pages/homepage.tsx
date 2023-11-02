import styled from "styled-components";
import HomePC from "./homePC";
import HomeMobile from "./home-mobile";

const Box = styled.div`
  .pc{
    display: block;
  }
  .mobile{
    display: none;
  }
  @media (max-width: 991px) {
    .pc{
      display: none;
    }
    .mobile{
      display: block;
    }
  }
`
export default function Homepage(){
    return <Box>
        <div className="pc">
            <HomePC />
        </div>
        <div className="mobile">
            <HomeMobile />
        </div>
    </Box>
}
