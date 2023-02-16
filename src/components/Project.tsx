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
`;

export default function Project() {
  return (
    <Container>
      <p>Project</p>
    </Container>
  );
}
