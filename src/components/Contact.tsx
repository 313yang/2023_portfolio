import styled from "styled-components";
import { AStyle } from "../styles/AStyle";
import bg from "/bg1.mp4";
import rightArrow from "/arrowIcon.png";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #000;
  position: sticky;
  z-index: 4;
  top: 0;

  > video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  > div {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    h2 {
      padding: 4%;
      font-size: 3vw;
      font-family: "Press Start 2P";
    }
    > div {
      width: 100%;
      height: 84vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  @media screen and (max-width: 500px) {
    > div {
      h2 {
        font-size: 5vw;
        padding: 10% 8% 0;
      }
      > div {
        height: 91vh;
      }
    }
  }
`;

const Button = styled(AStyle)<{ cursorUrl: string }>`
  font-size: 3vw;
  border: 5px solid #fff;
  border-style: inset;
  padding: 2vw 3vw;
  margin-bottom: 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30vw;
  > img {
    width: 4vw;
    margin-left: 2vw;
  }
  cursor: ${({ cursorUrl }) => `url(${cursorUrl}) auto`};
  :hover {
    border-bottom: 5px solid #fff;
  }
  @media screen and (max-width: 500px) {
    font-size: 5vw;
    padding: 5vw 3vw;
    width: 60vw;
    margin-bottom: 4vw;
    > img {
      width: 5vw;
      margin-left: 3vw;
    }
  }
`;
export default function Contact() {
  return (
    <Container>
      <video muted autoPlay loop>
        <source src={bg} type="video/mp4" />
      </video>
      <div>
        <h2>Contact</h2>
        <div>
          <Button
            href="https://github.com/313yang"
            cursorUrl="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          >
            Github
            <img src={rightArrow} />
          </Button>
          {/* <Button href="" cursorUrl="https://cdn-icons-png.flaticon.com/512/25/25231.png">
            Resume
            <img src={rightArrow} />
          </Button> */}
          <Button
            href="https://coconut-answer-2e3.notion.site/Ambitious-Frontend-Developer-YangByeori-6ca11f9ef56544acb65844f93293c8ec"
            cursorUrl="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          >
            Notion
            <img src={rightArrow} />
          </Button>
          <Button
            href="https://velog.io/@313yang"
            cursorUrl="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          >
            Velog
            <img src={rightArrow} />
          </Button>
        </div>
      </div>
    </Container>
  );
}
