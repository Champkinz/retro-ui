import styled, { css } from "styled-components";

export const RetroBox = styled.div`
  -webkit-box-shadow: 10px 10px 0px 1px rgba(0, 0, 0, 0.85);
  -moz-box-shadow: 10px 10px 0px 1px rgba(0, 0, 0, 0.85);
  box-shadow: 10px 10px 0px 1px rgba(0, 0, 0, 0.85);
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #718096;
`;
export const RetroButton = styled.div`
  -webkit-box-shadow: 10px 10px 0px 1px rgba(0, 0, 0, 0.85);
  -moz-box-shadow: 10px 10px 0px 1px rgba(0, 0, 0, 0.85);
  box-shadow: 10px 10px 0px 1px rgba(0, 0, 0, 0.85);
  padding-top: 2px;
  padding-bottom: 2px;
  background-color: white;
  ${props =>
    props.width &&
    css`
      width: ${props.width}px;
    `}
  text-align:center;
  :hover {
    background-color: #e2e8f0;
    cursor: pointer;
  }
`;
