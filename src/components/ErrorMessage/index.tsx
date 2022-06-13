import { Wrapper } from "./styled";

export function ErrorMessage(props: { text: string }) {
  return (
    <Wrapper>{props.text}</Wrapper>
  );
}