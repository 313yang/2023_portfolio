import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Project from "./components/Project";

const HeartCSS = css`
  font-size: 10rem;
  text-shadow: 2px 5px 10px rgba(255, 255, 255, 0.5), -4px -4px 8px rgba(214, 214, 214, 0.8);
  color: #000;
  cursor: initial;
  user-select: none;
  position: fixed;
  mix-blend-mode: lighten;
  z-index: 100;
`;

const Cursor = styled.div`
  ${HeartCSS}
`;

function App() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event: MouseEvent) => {
    setCursor({ y: event.clientY, x: event.clientX });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [cursor]);

  return (
    <main>
      <Cursor style={{ top: cursor.y - 70, left: cursor.x - 70 }}>♥</Cursor>
      <Main />
      <Project />
      <Contact />
    </main>
  );
}

export default App;
