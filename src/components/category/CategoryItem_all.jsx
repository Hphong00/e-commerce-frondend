import styled from "styled-components";
import { Link } from "react-router-dom";

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 160px;
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Container = styled.div`
  flex: 1;
  height: 160px;
  position: relative;
  background-color: white;
  text-decoration: blink;
  &:hover ${Info} {
    opacity: 1;
  }
  &:hover img {
    transform: scale(1.05);
    opacity: 1;
  }
`;
const Image = styled.img`
  padding-left: 16px;
  padding-top: 25px;
  height: 90px;
  width: 90px;
  z-index: 2;
  object-fit: cover;
  align-items: center;
  margin-left: 18px;
`;

const Button = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0.2);
  color: black;
  cursor: pointer;
  font-weight: 600;
  margin-right: 24px;
`;
const Tile = styled.div`
  color: black;P
  text-decoration: blink;
  text-align: center!important;
  padding-top: 8px;
`;

const CategoryItem_all = ({ item }) => {
  return (
    <Container>
      <Link
        to={`/products/${item.cat}`}
        style={{ color: "black", textDecoration: "auto" }}
      >
        <Image src={item.img} />
        <Tile>{item.title}</Tile>
        <Info>
          <Button></Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem_all;
