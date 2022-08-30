import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 140px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: -10px;
`;
const Image = styled.img`
  height: 120px;
  width: 1250px;
  z-index: 2;
  margin-bottom: 20px;
  z-index: 2;
`;
const Poster2 = () => {
  return (
    <Container>
      <Link to="/products/phone">
        <Image src="https://cdn.tgdd.vn/2022/05/banner/TGDD-Hotsale-Desk-1200x120.png" />
      </Link>
    </Container>
  );
};

export default Poster2;
