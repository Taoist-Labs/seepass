import styled from "styled-components";
import {Spinner} from "react-bootstrap";

const Mask = styled.div`
    display: flex;
  align-content: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9;
  flex-direction: column;
  background: rgba(0,0,0,0.6);
`

const BoxInner = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  .text{
    line-height: 40px;
    margin-left: 20px;
    color: #fff;
  }
  .text-primary{
    color: #a16eff!important;
  }
`
export default function Loading(){
    return <Mask>
        <BoxInner>
            <Spinner animation="border" variant="primary"  />
            <div className="text">loading...</div>
        </BoxInner>
    </Mask>
}
