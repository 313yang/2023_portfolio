import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #222;
  position: sticky;
  z-index: 2;
  top: 0;
  margin-top: 100vh;
  > p {
    font-size: 6vw;
    color: #000;
  }
  > button {
    position: absolute;
    z-index: 30;
  }
`;

export default function Project() {
  const [isClick, setIsClick] = useState(false);

  return (
    <Container>
      <p>Project</p>
      <button>{isClick ? "CLick" : "NONT"}</button>
    </Container>
  );
}
