import styled from "styled-components";

const Wrapper = styled.h1`
  font-family: "Elsie Swash Caps", sans-serif;
  font-size: 5.125rem;
  font-weight: 900;
  text-align: left;
  color: #202020;
  margin-bottom: 1.5rem;
`;

interface TitleProps {
  children: string;
}

export function Title({ children }: TitleProps) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}