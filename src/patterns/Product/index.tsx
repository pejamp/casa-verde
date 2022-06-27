import { Text } from "../../components/Text";
import { Title } from "../../components/Title";
import { Container, Content, Icon, Image, Link } from "./styled";

interface ProductProps {
  name: string;
  image: string;
  price: number;
  order?: number;
}

export function Product(props: ProductProps) {
  return (
    <Container>
      <Image src={props.image} />
      <Content>
        <Title size="smaller">{props.name}</Title>
        <Text>R$ {props.price}</Text>
        <Link href="#">
          Comprar
          <Icon />
        </Link>
      </Content>
    </Container>
  );
}