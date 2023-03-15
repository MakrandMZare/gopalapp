import styled from "styled-components";
import { shops } from "../data";
import ShopCards from "./ShopCards";
import { mobile } from "../responsive";
import { mobile1 } from "../responsive";


const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })};
  ${mobile1({ padding: "0px", flexDirection: "column" })};
`;

function Shope() {
  return (
    <Container>
      {shops.map((item) => (
        <ShopCards item={item} />
      ))}
    </Container>
  );
}

export default Shope;
