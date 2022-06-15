import { Subtitle } from "../../components/Subtitle";
import { Title } from "../../components/Title";
import { Box, Content, Icon, Item, List } from "./styled";

export function Card() {
  return (
    <Box>
      <img src="/assets/images/image-card.png" alt="folha de planta" />
      <Content>
        <Subtitle>Como conseguir</Subtitle>
        <Title size="small">minha planta</Title>
        <List>
          <Item>
            <Icon icon="mouse" />
            Escolha suas plantas
          </Item>
          <Item>
            <Icon icon="cart" />
            Faça seu pedido
          </Item>
          <Item>
            <Icon icon="truck" />
            Aguarde na sua casa
          </Item>
        </List>
      </Content>
    </Box>
  );
}