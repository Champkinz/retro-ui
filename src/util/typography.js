import styled, { css } from "styled-components";

export const P = styled.p`
  font-size: 20px;
  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `}
  ${props =>
    props.white &&
    css`
      color: #ffffff;
    `}
  ${props =>
    props.size &&
    css`
      font-size: ${props.size}px;
    `}
`;
