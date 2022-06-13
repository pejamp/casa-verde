import { Wrapper } from "./styled";

export function Text(props: { children: string }) {
  return (
    <Wrapper>{props.children}</Wrapper>
  );
}