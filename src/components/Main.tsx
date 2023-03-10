import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { puddle } from "../styles/Keyframes";
import heart from "/heart.png";
import bg from "/bg1.mp4";
import rightArrow from "/arrowIcon.png";
import { AStyle } from "../styles/AStyle";

const Contaier = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: -1;
  background-color: transparent;
  top: 0;
  > video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  .heart {
    position: fixed;
    animation: ${puddle} 3s linear;
    animation-fill-mode: forwards;
  }
  > a {
    position: absolute;
    z-index: 2;
    bottom: 10%;
    right: 8%;
    font-size: 2vw;
    :hover {
      border-bottom: 2px solid #fff;
    }
    > img {
      object-fit: contain;
      width: 2vw;
    }
  }
`;

const TextStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 6.3vw;
  line-height: 1.2;
  position: absolute;
  padding: 0 8%;

  width: 100%;

  > p {
    display: inline-flex;
    align-items: center;
    margin-right: 2vw;
    font-weight: 800;
    height: 8vw;
    letter-spacing: 0.8;
    user-select: none;
    transition: color 0.2s ease-in-out;
  }
`;

const Text = styled.p<{ color: string; font: string }>`
  color: ${({ color }) => color};
  font-family: ${({ font }) => font};
`;
const textArr = ["Frontend", "Deveoloper"];
const subArr = ["Ambitious", "artistic", "LOVE PEACE", "Growing", "Passionate"];

let trigger = false;
function Main() {
  const fontFamily = [
    "Montserrat",
    "'DM Serif Display'; font-size: 6.7vw; ",
    "'Press Start 2P'; font-size: 4.6vw;  word-spacing: -2vw; text-transform: uppercase; ",
    "Montserrat",
    "Montserrat",
  ];
  const colors = ["#7000FE", "#BDFF00", "#00FFD1", "#fff", "#fff"];
  const [color, setColor] = useState([...colors]);
  const [font, setFont] = useState([...fontFamily]);

  const sectionRef = useRef<HTMLElement | null>(null);

  const setStates = () => {
    setColor(colors.sort(() => Math.random() - 0.5));
    setFont(fontFamily.sort(() => Math.random() - 0.5));
  };

  useEffect(() => {
    sectionRef?.current?.addEventListener("mousemove", handleCreateHeart);
    return () => sectionRef?.current?.removeEventListener("mousemove", handleCreateHeart);
  }, [sectionRef]);

  useEffect(() => {
    const timerId1 = setInterval(setStates, 900);
    return () => clearInterval(timerId1);
  }, [font]);

  const handleCreateHeart = (e: MouseEvent) => {
    if (trigger) return;
    trigger = true;
    const img = document.createElement("img");
    const size = Math.random() * 15 + 4;
    img.className = "heart";
    img.src = heart;
    img.style.width = `${size}rem`;
    img.style.height = `${size}rem`;
    img.style.top = `${e.clientY - 60}px`;
    img.style.left = `${e.clientX - 60}px`;
    sectionRef?.current?.appendChild(img);
    setTimeout(() => sectionRef?.current?.removeChild(img), 1500);
    setTimeout(() => (trigger = false), 90);
  };
  return (
    <Contaier ref={sectionRef} onClick={setStates}>
      <video muted autoPlay loop>
        <source src={bg} type="video/mp4" />
      </video>
      <TextStyle>
        <p>HELLO, </p>

        {subArr.map((list, index) => (
          <Text key={list} font={font[index]} color={color[index]}>
            {list}{" "}
          </Text>
        ))}
        {textArr.map((list, index) => (
          <Text key={list} font={font[index]} color={color[index]}>
            {list}
          </Text>
        ))}
        <p>YANG BYEORI</p>
      </TextStyle>
      <AStyle href={"https://github.com/313yang/2023_portfolio"}>
        Github <img src={rightArrow} />
      </AStyle>
    </Contaier>
  );
}

export default Main;
