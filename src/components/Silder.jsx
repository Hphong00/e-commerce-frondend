import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { sliderItems } from "../database/data";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #c6c8c9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: wwhi};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 60%;
  margin-top: 85px;
  margin-left: 50px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  margin-bottom: 135px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 6px;
`;

const Slider = () => {
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;
  const slideLength = 3;
  const [slideIndex, setSlideIndex] = useState(0);
  const nextSlide = () => {
    setSlideIndex(slideIndex === slideLength - 1 ? 0 : slideIndex + 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }
  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [slideIndex]);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>
                <Link
                  to="products/apple"
                  style={{ color: "black", textDecoration: "auto" }}
                >
                  MUA NGAY
                </Link>
              </Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
