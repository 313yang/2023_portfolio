import { useEffect, useState } from "react";
import styled from "styled-components";
import soundyImg from "/CD-ROM.png";
import diaryImg from "/diary.png";
import plantImg from "/plant.png";
import popcornImg from "/popcorn.png";
import bookImg from "/book.png";
import { float, matrix, rotate } from "../styles/Keyframes";
import icon1 from "/icon1.png";
import icon2 from "/icon2.png";
import icon3 from "/icon3.png";
import icon4 from "/icon4.png";
import icon5 from "/icon5.png";
import projectUrl1 from "/projecturl1.png";
import projectUrl2 from "/projecturl2.png";
import ProjectPopup from "./ProjectPopup";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #000;
  position: sticky;
  z-index: 2;
  top: 0;
  margin-top: 100vh;
  padding: 4%;
  h2 {
    font-size: 3vw;
    font-family: "Press Start 2P";
  }
  > button {
    position: absolute;
    z-index: 30;
  }
`;
const ProjectWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  position: relative;
  height: 70%;
`;
const ImgButton = styled.button.attrs({ type: "button" })<{ cursorUrl: string }>`
  position: absolute;
  > img {
    width: 22vw;
    object-fit: contain;
  }
  animation: ${float} 5s ease infinite;
  cursor: ${({ cursorUrl }) => `url(${cursorUrl}) , auto`};
  :first-child {
    animation: ${rotate} 3s linear infinite;
    top: 4vw;
    left: 0;
  }
  :nth-child(2) {
    animation-delay: 0.2s;
    top: 0;
    left: 21vw;
  }
  :nth-child(3) {
    > img {
      width: 25vw;
    }
    top: 10vw;
    left: 38vw;
    animation: ${matrix} 3s ease-in-out infinite;
  }
  :nth-child(4) {
    > img {
      width: 16vw;
    }
    animation-delay: 0.1s;
    top: -2vw;
    right: 19vw;
    z-index: 1;
  }
  :last-child {
    > img {
      width: 19vw;
    }
    animation-duration: 4s;
    top: 3vw;
    right: 0;
  }
`;
const WorkWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin: 0 0 0 auto;
  a {
    font-size: 10vw;
    margin-right: 12vw;
  }
`;
const projectArr = [
  {
    name: "Soundy",
    sub: "스포티파이 플레이리스트 기반 음악 스트리밍 사이트",
    url: "https://soundy-playlist.vercel.app/",
    gitUrl: "https://github.com/313yang/playlist",
    img: soundyImg,
    projectImg: projectUrl1,
    cursor: icon1,
    stack: ["Nextjs", "Typescript", "React-query", "Zustand", "axios", "styled-components"],
  },
  {
    name: "무지개같은 하루였어",
    sub: "매일매일 쓰는 일기장 웹사이트.",
    url: "https://www.rainbow-daily.ga/",
    gitUrl: "https://github.com/313yang/daliy-web",
    img: diaryImg,
    projectImg: projectUrl2,
    cursor: icon2,
    stack: ["Vite", "React", "Typescript", "Firebase", "styled-components", "axios", "AWS amplify"],
  },
  {
    name: "Find My Plant",
    sub: "나에게 어울리는 반려식물 찾기 테스트.",
    url: "https://findmyplant.netlify.app",
    gitUrl: "https://github.com/313yang/find-my-plant",
    img: plantImg,
    projectImg:
      "https://yangbyeori-portfolio.netlify.app/img/Find%20My%20Plant%20-%20%EB%B0%98%EB%A0%A4%EC%8B%9D%EB%AC%BC%20%EC%B0%BE%EA%B8%B0%20%ED%85%8C%EC%8A%A4%ED%8A%B8.PNG",
    cursor: icon3,
    stack: ["Javasctipt", "CSS", "HTML"],
  },
  {
    name: "Netflex",
    sub: "넷플릭스 모티브 영화 웹사이트.",
    url: "https://netflex-movie.netlify.app",
    gitUrl: "https://github.com/313yang/netflex",
    img: popcornImg,
    projectImg: "https://yangbyeori-portfolio.netlify.app/img/NETFLEX.PNG",
    cursor: icon4,
    stack: ["React", "axios", "styled-components"],
  },
  {
    name: "genies library",
    sub: "밀리의 서재 스타일의 서적 사이트.",
    url: "https://313yang.github.io/genies-library/",
    gitUrl: "https://github.com/313yang/genies-library",
    img: bookImg,
    projectImg: "https://yangbyeori-portfolio.netlify.app/img/genie's%20labrary.PNG",
    cursor: icon5,
    stack: ["React", "axios", "styled-components"],
  },
];

export default function Project() {
  const [showProject, setshowProject] = useState<IProject | null>(null);

  return (
    <>
      <Container>
        <h2>Project</h2>
        <ProjectWrap>
          {projectArr.map((project) => (
            <ImgButton onClick={() => setshowProject(project)} cursorUrl={project.cursor}>
              <img src={project.img} alt={project.sub} loading={"lazy"} title={project.name} />
            </ImgButton>
          ))}
        </ProjectWrap>
        <WorkWrap>
          <a target="_black" rel="noopener noreferrer" href={"https://samlab.co.kr"}>
            🏃‍♀️
          </a>
          <a target="_black" rel="noopener noreferrer" href={"https://classup.io"}>
            👨‍🏫
          </a>
          <h2>Work</h2>
        </WorkWrap>
      </Container>
      {showProject !== null && (
        <ProjectPopup onClose={() => setshowProject(null)} project={showProject} />
      )}
    </>
  );
}
