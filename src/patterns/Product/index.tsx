import { Text } from "../../components/Text";
import { Title } from "../../components/Title";
import { currencyFormat } from "../../utils/currencyFormat";
import { Container, Content, Icon, Image, Link } from "./styled";

interface ProductProps {
  name: string;
  image: string;
  price: number;
  order?: number;
}

export function Product(props: ProductProps) {
  const formattedPrice = currencyFormat(props.price);

  return (
    <Container>
      <Image src={props.image} />
      <Content>
        <Title size="smaller">{props.name}</Title>
        <Text>{formattedPrice}</Text>
        <Link href="#">
          Comprar
          <Icon />
        </Link>
      </Content>
    </Container>
  );
}