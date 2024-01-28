import styled from "styled-components";
import Footer from "./layout/Footer";
import { Header } from "./layout/Header";
import Product from "./layout/Product";
import SideMenu from "./layout/SideMenu";
import Basket from "./layout/Basket";

function App() {
  return (
    <div className="App">
      <Header />
      <StyledMainWrapper>
        <SideMenu />
        <Product />
        <Basket />
      </StyledMainWrapper>
      <Footer />
    </div>
  );
}

export default App;

const StyledMainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 38.36px;
  gap: 16px;
  @media (max-width: 1235px) and (min-width: 1024px) {
    gap: 0px;
  }
  @media (max-width: 1235px) {
    margin-top: 16px;
  }
  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;
