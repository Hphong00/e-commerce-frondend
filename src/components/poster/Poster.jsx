import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 220px;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Image = styled.img`
  height: 180px;
  width: 400px;
  margin-left: 100px;
  z-index: 2;
  margin-bottom: 20px;
  z-index: 2;
  position: absolute;
`;
const HoV = styled.div`
  &:hover img {
    transform: scale(1.05);
    opacity: 0.9;
  }
`;
const Image1 = styled.img`
  top: 0px;
  height: 180px;
  width: 400px;
  margin-left: 525px;
  z-index: 2;
  margin-bottom: 20px;
  z-index: 2;
  position: absolute;
`;
const Image2 = styled.img`
  height: 180px;
  width: 400px;
  margin-left: 950px;
  z-index: 2;
  margin-bottom: 20px;
  z-index: 2;
  position: absolute;
`;
const Port = () => {
  return (
    <Container>
      <HoV>
        <Link to="/products/laptop">
          <Image src="//cdn.tgdd.vn/2022/05/banner/Desktop380x200-380x200-13.png" />
        </Link>
      </HoV>
      <HoV>
        <Link to="/products/laptop">
          <Image1 src="https://cdn.tgdd.vn/2022/05/banner/Desktop380x200(2)-380x200-1.png" />
        </Link>
      </HoV>
      <HoV>
        <Link to="/products/laptop">
          <Image2 src="https://cdn.tgdd.vn/2022/05/banner/Desktop380x200-1-380x200-11.png" />
        </Link>
      </HoV>
    </Container>
  );
};

export default Port;
