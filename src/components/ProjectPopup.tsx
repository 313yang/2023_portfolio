import { Link } from "react-router-dom";
import styled from "styled-components";
import { AStyle } from "../styles/AStyle";

const PopupContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 100;
  font-family: "AppleSDGothicNeo", "Noto Sans KR", sans-serif;
  background-color: rgb(0 0 0 / 50%);
  color: #000;
  > div {
    position: absolute;
    width: 60%;
    height: 30vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ddd;
    box-shadow: 2px 2px 10px rgb(0 0 0 / 50%);
    cursor: auto;
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-image: url("https://newjeans.kr/imgs/window/pc/window-header-bg.png");
  > p {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    margin-left: 22px;
    font-size: 20px;
  }
  > button {
    width: 25px;
    height: 24px;
    background: no-repeat url("https://newjeans.kr/imgs/window/pc/btn-folder-close.png");
    background-size: 24px;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3% 4%;
  word-break: break-word;

  > img {
    width: 38vw;
    height: 24vw;
    object-fit: cover;
  }
  > div {
    width: 25%;
    display: flex;
    flex-direction: column;
    > h1 {
      font-weight: 800;
      font-size: 24px;
      margin-bottom: 1vw;
    }
    > p {
      color: rgb(0 0 0 / 50%);
    }
    > ul {
      display: flex;
      flex-wrap: wrap;
      gap: 10px 5px;
      margin-top: 20px;
      > li {
        background-color: #000;
        color: #fff;
        padding: 7px 12px;
        border-radius: 99px;
      }
    }
    > div {
      /* width: 100%; */
      text-align: right;
      display: flex;
      flex-direction: column;
      margin: auto 0 0 auto;
      > a {
        :first-child {
          margin-bottom: 10px;
        }
      }
    }
  }
`;
export default function ProjectPopup({
  project,
  onClose,
}: {
  project: IProject;
  onClose: () => void;
}) {
  return (
    <PopupContainer onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <Header>
          <p>{project.name}</p>
          <button onClick={onClose} />
        </Header>
        <Content>
          <img src={project.projectImg} alt={project.name} />
          <div>
            <h1>{project.name}</h1> <p>{project.sub}</p>
            <ul>
              {project.stack.map((stack) => (
                <li key={stack}>{stack}</li>
              ))}
            </ul>
            <div>
              <AStyle href={project.gitUrl}>
                Github <img src={"https://static.thenounproject.com/png/1976606-200.png"} />
              </AStyle>
              <AStyle href={project.url}>
                Website <img src={"https://static.thenounproject.com/png/1976606-200.png"} />
              </AStyle>
            </div>
          </div>
        </Content>
      </div>
    </PopupContainer>
  );
}
