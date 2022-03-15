import { Header } from "./patterns/Header"
import { GlobalStyle } from "./styles/global"
import { Wrapper } from "./styles/home"


function App() {

  return (
    <>
      <Wrapper>
        <Header />
      </Wrapper>
      <GlobalStyle /> 
    </>
  )
}

export default App
