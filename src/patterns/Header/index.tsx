import styled from "styled-components";
import { Logo } from "../../components/Logo";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-top: 10px;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  color: #202020;
  font-weight: 700;

  &::after {
    content: "/";
    margin: 0 13px;
    color: #202020;
  }

  &:last-child {
    &::after {
      display: none;
    }
  }
`;

export function Header() {
  return (
    <Wrapper>
      <Logo />
      <List>
        <Item><a href="#">Como fazer</a></Item>
        <Item><a href="#">Ofertas</a></Item>
        <Item><a href="#">Depoimentos</a></Item>
        <Item><a href="#">Vídeos</a></Item>
        <Item><a href="#">Meu carrinho</a></Item>
      </List>
    </Wrapper>
  );
}