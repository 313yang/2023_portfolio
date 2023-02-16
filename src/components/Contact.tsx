import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #000;
  position: sticky;
  z-index: 10;
  margin-top: 100vh;
  top: 200vh;
`;

export default function Contact() {
  return <Container></Container>;
}
