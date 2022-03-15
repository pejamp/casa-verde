import styled from "styled-components";
import { Newsletter } from "../../components/Newsletter";
import { Subtitle } from "../../components/Subtitle";
import { Text } from "../../components/Text";
import { Title } from "../../components/Title";

const Wrapper = styled.div`
  max-width: 585px;
  display: flex;
  flex-direction: column;
`;

export function Subscription() {
  return (
    <Wrapper>
      <Subtitle>Sua casa com as</Subtitle>
      <Title>melhores plantas</Title>
      <Text>
        Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
      </Text>
      <Newsletter />
    </Wrapper>
  );
}