import { Logo } from "../../components/Logo";
import { Item, List, Wrapper } from "./styled";

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