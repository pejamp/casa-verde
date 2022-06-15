import { Wrapper } from "./styled";

export function Title(props: { size?: "smaller" | "small", children: string }) {
  return (
    <Wrapper size={props.size}>{props.children}</Wrapper>
  );
}