import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #000;
  position: sticky;
  z-index: 4;
  /* margin-top: 100vh; */
  top: 00vh;
`;

export default function Contact() {
  return (
    <Container>
      <p>Contact</p>
    </Container>
  );
}
