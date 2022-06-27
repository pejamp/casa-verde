import { Wrapper } from "./styled";

export function Text(props: { children: any }) {
  return (
    <Wrapper>{props.children}</Wrapper>
  );
}