import { useContext, useEffect, useState } from "react"
import { GlobalStyle } from "./styles/global"
import { Card } from "./patterns/Card"
import { Header } from "./patterns/Header"
import { Subscription } from "./patterns/Subscription"
import { Flex, Grid, Section, Wrapper } from "./styles/home"
import { Title } from "./components/Title"
import { Subtitle } from "./components/Subtitle"
import { Product } from "./patterns/Product"
import { ProductContext } from "./contexts/productsContext"

import data from '../db.json';
import { Select } from "./components/Select"
import { FilterInput } from "./components/FilterInput"

type Products = typeof data;

interface ProductProps {
  id: any;
  name: string;
  image: string;
  price: number;
  order: number;
}

function App() {
  const [products] = useContext(ProductContext);
  const [sortType, setSortType] = useState(null as any);
  const [sortedProducts, setSortedProducts] = useState([] as any);
  const [filterValue, setFilterValue] = useState(0);
  const [loading, setLoading] = useState(true);

  function sortArray(type: any) {
    let sorted;

    switch (type) {
      case 'price-ascending':
        sorted = [...products].sort((a, b) => a.price - b.price);
        break;
      case 'price-descending':
        sorted = [...products].sort((a, b) => b.price - a.price);
        break;
      case 'name-ascending':
        sorted = [...products].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-descending':
        sorted = [...products].sort((a, b) => b.name.localeCompare(a.name));
        break;
      default: 
        sorted = JSON.parse(JSON.stringify(products));
    }

    setSortedProducts(sorted);
    setLoading(false);
  }

  function filterArray(rangeValue: any) {
    setFilterValue(rangeValue.target.value);
    let filtered = [...products].filter((item) => item.price <= rangeValue.target.value);
    setSortedProducts(filtered);
  }

  useEffect(() => {
    sortArray(sortType);
  }, [sortType]);

  useEffect(() => {
    setSortedProducts(products);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [products])

  return (
    <>
      <Wrapper>
        <Header />
        <Subscription />
        <Card />
        <Section>
          <Subtitle>Conheça nossas</Subtitle>
          <Title>plantas</Title>
          <Flex>
            <Select onChange={(e) => setSortType(e.target.value)} />
            <FilterInput value={filterValue} onChange={filterArray} />
          </Flex>
          <Grid>
            {loading ? (
              <span>Loading Products...</span>
            ) : (
              sortedProducts?.map((product: ProductProps) => (
                <Product 
                  key={product.id} 
                  name={product.name} 
                  image={product.image} 
                  price={product.price} 
                />
              ))
            )}     
          </Grid>
        </Section>
      </Wrapper>
      <GlobalStyle /> 
    </>
  )
}

export default App
