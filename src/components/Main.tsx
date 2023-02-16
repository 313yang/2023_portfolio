import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
const HeartCSS = css`
  font-size: 10rem;
  text-shadow: 2px 5px 10px rgba(255, 255, 255, 0.5), -4px -4px 8px rgba(214, 214, 214, 0.8);
  color: #000;
  cursor: initial;
  user-select: none;
  position: fixed;
  mix-blend-mode: overlay;
`;
const Contaier = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 8%;
  .heart {
    @keyframes puddle {
      0% {
        transform: translate(0, 0);
        opacity: 1;
      }

      30% {
        transform: translate(5%, -5%);
      }

      100% {
        transform: translate(-5%, -15%);
        opacity: 0;
      }
    }
    ${HeartCSS}

    animation-name: puddle;
    animation-duration: 3s;
    animation-fill-mode: forwards;
  }
`;

const TextStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 6.3vw;
  /* font-size: 40px; */
  line-height: 1.2;
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
const Cursor = styled.div`
  ${HeartCSS}
  z-index: 1;
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
    const div = document.createElement("div");
    div.innerText = "♥";
    div.className = "heart";
    div.style.fontSize = `${Math.random() * 10 + 4}rem`;
    div.style.top = `${e.clientY - 60}px`;
    div.style.left = `${e.clientX - 60}px`;
    sectionRef?.current?.appendChild(div);
    setTimeout(() => sectionRef?.current?.removeChild(div), 1500);
  };
  return (
    <>
      <Contaier ref={sectionRef}>
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
      </Contaier>
    </>
  );
}

export default Main;
