import styled from "styled-components";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Project from "./components/Project";
import heart from "/heart.png";

const MainStyle = styled.main`
  cursor: url(${heart}) 60 60, auto;
`;

function App() {
  return (
    <MainStyle>
      <Main />
      <Project />
      <Contact />
    </MainStyle>
  );
}

export default App;
