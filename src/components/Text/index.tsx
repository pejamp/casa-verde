import styled from "styled-components";

const Wrapper = styled.p`
  text-align: left;
  line-height: 26px;
  max-width: 480px;
`;

interface TextProps {
  children: string;
}

export function Text({ children }: TextProps) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}