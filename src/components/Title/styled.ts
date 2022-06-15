import styled, { css } from "styled-components";

interface TitleProps {
  size?: string;
}

export const Wrapper = styled.h1<TitleProps>`
  font-family: "Elsie Swash Caps", sans-serif;
  font-size: 5.125rem;
  font-weight: 900;
  text-align: left;
  color: #202020;
  margin-bottom: 1.5rem;

  ${props => props.size === 'small' && css`
    font-size: 2.625rem;
    margin-bottom: 2rem;
  `}
  ${props => props.size === 'smaller' && css`
    font-size: 2rem;
    margin-bottom: 0.5rem;
  `}
`;