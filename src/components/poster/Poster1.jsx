import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 220px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Image = styled.img`
  height: 180px;
  width: 1250px;
  z-index: 2;
  margin-bottom: 20px;
  z-index: 2;
`;
const Port1 = () => {
  return (
    <Container>
      <Link to="/products/laptop">
        <Image src="https://images.fpt.shop/unsafe/fit-in/1200x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/5/11/637878814304278148_Frame 46872.png" />
      </Link>
    </Container>
  );
};

export default Port1;
