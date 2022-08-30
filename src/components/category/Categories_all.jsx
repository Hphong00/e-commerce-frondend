import styled from "styled-components";
import { categories_all } from "../../database/data";
import { mobile } from "../../responsive";
import CategoryItemAll from "./CategoryItem_all";

const Container = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: space-between;
  margin: 0px 100px;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;
const Categories_all = () => {
  return (
    <Container>
      {categories_all.map((item) => (
        <CategoryItemAll item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories_all;