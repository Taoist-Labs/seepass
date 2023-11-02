import styled from "styled-components";
import {Row,Col,Container} from "react-bootstrap";

const Box = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  h1{
    font-size: 7.5em;
    margin: 15px 0;
    font-weight: bold;
  }
  iframe{
    width: 800px;
    height: 600px;
  }
  @media (max-width: 991px) {
    iframe{
      width: 100%;
      height: 40vh;
    }
  }
`

const FlexBox = styled(Row)`
  display: flex;
  align-items: center;
`

const ColBox = styled(Col)`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  .inner{
    text-align: center;
  }
  @media (max-width: 991px) {
    box-shadow: none;
  }
`

export default function Tips() {
  return (
    <Box>
        <Container>
            <FlexBox>
                <ColBox sm={12} md={6}>
                    <iframe src="./ant/animation.html" ></iframe>
                </ColBox>
                <ColBox sm={12} md={6}>
                    <div className="inner">
                        <h1>Tips</h1>
                        <span>Information is updating.</span>
                    </div>

                </ColBox>
            </FlexBox>
        </Container>

    </Box>
  );
}
