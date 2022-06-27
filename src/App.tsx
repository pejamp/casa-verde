import { GlobalStyle } from "./styles/global"
import { Card } from "./patterns/Card"
import { Header } from "./patterns/Header"
import { Subscription } from "./patterns/Subscription"
import { Grid, Section, Wrapper } from "./styles/home"
import { Title } from "./components/Title"
import { Subtitle } from "./components/Subtitle"
import { Product } from "./patterns/Product"
import { ProductContext } from "./contexts/productsContext"
import { useContext } from "react"

interface ProductProps {
  name: string;
  image: string;
  price: number;
  order: number;
}

function App() {
  const [products] = useContext(ProductContext);

  return (
    <>
      <Wrapper>
        <Header />
        <Subscription />
        <Card />
        <Section>
          <Subtitle>Conheça nossas</Subtitle>
          <Title>ofertas</Title>
          <Grid>
            {products.map((product: ProductProps) => (
              <Product 
                key={product.order} 
                name={product.name} 
                image={product.image} 
                price={product.price} 
              />
            ))}     
          </Grid>
        </Section>
      </Wrapper>
      <GlobalStyle /> 
    </>
  )
}

export default App
