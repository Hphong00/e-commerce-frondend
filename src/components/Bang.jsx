import React from "react";
import { mobile } from "../responsive";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  PhoneIphone,
  Computer,
  Apple,
  Headset,
  DesktopMac,
  Autorenew,
  SimCardRounded,
} from "@material-ui/icons";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 6px;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: end;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  height: 40px;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.92);
  color: white;
  position: relative;
  &:hover ${Info} {
    opacity: 0.1;
  }
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuItem = styled.div`
  font-size: 15px;
  cursor: pointer;
  margin-left: 30px;
  ${mobile({ fontSize: "15px", marginLeft: "10px" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Bang = () => {
  return (
    <Container>
      <Wrapper>
        <Center>
          <MenuItem>
            <ContactItem>
              <PhoneIphone fontSize="small" style={{ marginRight: "0px" }} />
              <Link
                to="/products/phone"
                style={{ color: "white", textDecoration: "auto" }}
              >
                ĐIỆN THOẠI
              </Link>
            </ContactItem>
          </MenuItem>
          <MenuItem>
            <ContactItem >
              <Computer fontSize="small" style={{ marginRight: "5px" }} />
              <Link
                to="/products/laptop"
                style={{ color: "white", textDecoration: "auto" }}
              >
                LAPTOP
              </Link>
            </ContactItem>
          </MenuItem>
          <MenuItem>
            <ContactItem>
              <Apple fontSize="small" style={{ marginRight: "2px" }} />
              <Link
                to="/products/apple"
                style={{ color: "white", textDecoration: "auto" }}
              >
                APPLE
              </Link>
            </ContactItem>
          </MenuItem>
          <MenuItem>
            <ContactItem>
              <DesktopMac fontSize="small" style={{ marginRight: "5px" }} />
              <Link
                to="/products/pc"
                style={{ color: "white", textDecoration: "auto" }}
              >
                PC
              </Link>
            </ContactItem>
          </MenuItem>
          <MenuItem>
            <ContactItem>
              <Headset fontSize="small" style={{ marginRight: "3px" }} />
              <Link
                to="/products/phukien"
                style={{ color: "white", textDecoration: "auto" }}
              >
                PHỤ KIỆM
              </Link>
            </ContactItem>
          </MenuItem>
          <MenuItem>
            <ContactItem>
              <Autorenew fontSize="small" style={{ marginRight: "2px" }} />
              <Link
                to="/products/maycu"
                style={{ color: "white", textDecoration: "auto" }}
              >
                MÁY CŨ
              </Link>
            </ContactItem>
          </MenuItem>
          <MenuItem>
            <ContactItem>
              <SimCardRounded fontSize="small" style={{ marginRight: "2px" }} />
              <Link
                to="/products/simthe"
                style={{ color: "white", textDecoration: "auto" }}
              >
                SIM THẺ
              </Link>
            </ContactItem>
          </MenuItem>
        </Center>
      </Wrapper>
    </Container>
  );
};
export default Bang;
