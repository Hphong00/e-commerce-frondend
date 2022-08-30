import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 250px;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0px 100px 0px 100px;
  font-size: 14px;
`;
const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
  margin-top: -20px;
`;

const Desc = styled.div`
  font-size: 22px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Thông báo sản phẩm</Title>
      <Desc>
        Nhập thông tin để có thể cập nhật kịp thời các sản phẩm bạn yêu thích.
      </Desc>
      <InputContainer>
        <Input placeholder="Mời bạn nhập email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
