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
  height: 160px;
  width: 1250px;
  z-index: 2;
`;
const Port1 = () => {
  return (
    <Container>
      <Link to="/products/watch">
        <Image src="https://images.fpt.shop/unsafe/fit-in/1200x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/5/1/637869619347939396_F_H5_1200x200@2x.png" />
      </Link>
    </Container>
  );
};

export default Port1;
