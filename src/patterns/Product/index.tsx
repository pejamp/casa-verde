import { Text } from "../../components/Text";
import { Title } from "../../components/Title";
import { Container, Content, Icon, Image, Link } from "./styled";


export function Product() {
  return (
    <Container>
      <Image src={"/assets/images/produto-01.png"} />
      <Content>
        <Title size="smaller">Ajuga reptans</Title>
        <Text>R$ 20,00</Text>
        <Link>
          Comprar
          <Icon />
        </Link>
      </Content>
    </Container>
  );
}