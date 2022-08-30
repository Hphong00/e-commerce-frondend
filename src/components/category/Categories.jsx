import styled from "styled-components";
import { categories } from "../../database/data";
import { mobile } from "../../responsive";
import CategoryItem from "../category/CategoryItem";

const Container = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: space-between;
  margin: 0px 100px;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;