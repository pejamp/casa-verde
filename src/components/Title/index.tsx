import { Wrapper } from "./styled";

export function Title(props: { children: string }) {
  return (
    <Wrapper>{props.children}</Wrapper>
  );
}