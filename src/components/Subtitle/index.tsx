import { Wrapper } from "./styled";

export function Subtitle(props: { children: string }) {
  return (
    <Wrapper>{props.children}</Wrapper>
  );
}