import { Header } from "./patterns/Header"
import { Subscription } from "./patterns/Subscription"
import { GlobalStyle } from "./styles/global"
import { Wrapper } from "./styles/home"


function App() {

  return (
    <>
      <Wrapper>
        <Header />
        <Subscription />
      </Wrapper>
      <GlobalStyle /> 
    </>
  )
}

export default App
