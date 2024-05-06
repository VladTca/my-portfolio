import styled from "styled-components";
import { theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 5px;
  text-align: center;
  position: relative;
  margin-bottom: 90px;

  &::before {
    content: " ";
    display: inline-block;
    width: 55px;
    height: 1px;
    background-color: black;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -30px;
  }
`;
