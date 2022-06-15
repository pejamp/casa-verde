import { GlobalStyle } from "./styles/global"
import { Card } from "./patterns/Card"
import { Header } from "./patterns/Header"
import { Subscription } from "./patterns/Subscription"
import { Grid, Section, Wrapper } from "./styles/home"
import { Title } from "./components/Title"
import { Subtitle } from "./components/Subtitle"
import { Product } from "./patterns/Product"


function App() {

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
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </Grid>
        </Section>
      </Wrapper>
      <GlobalStyle /> 
    </>
  )
}

export default App
