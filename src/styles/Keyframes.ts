import { keyframes } from "styled-components";

export const puddle = keyframes`

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
  
`;
export const float = keyframes`
  0% {
        transform: translate(0, 0px);
      }
      50% {
        transform: translate(0, 20px);
      }
      100% {
        transform: translate(0, 0px);
      }
`;
export const rotate = keyframes`
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
     `;
export const matrix = keyframes`
       0% {
        transform: matrix(1, 0, 0, 1, 0, 0);
      }
     
      50% {
        transform:matrix(1.1, 0.2, -0.2, 0.9, 0, 0);
      }
      100% {
        transform: matrix(1, 0, 0, 1, 0, 0);
      }
     `;
