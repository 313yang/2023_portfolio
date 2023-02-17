import styled from "styled-components";

export const AStyle = styled.a.attrs({ target: "_blank", rel: "noopener noreferrer" })`
  border-bottom: 2px solid rgb(0 0 0 / 00%);
  font-size: 18px;
  font-family: "Press Start 2P";
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  > img {
    width: 22px;
    margin-left: 10px;
  }
  :hover {
    border-bottom: 2px solid #000;
  }
`;
