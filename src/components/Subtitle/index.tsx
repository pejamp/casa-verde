import styled from "styled-components";

const Wrapper = styled.h2`
  font-size: 1.375rem;
  text-align: left;
  margin-bottom: .75rem;
`;

interface SubtitleProps {
  children: string;
}

export function Subtitle({ children }: SubtitleProps) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}