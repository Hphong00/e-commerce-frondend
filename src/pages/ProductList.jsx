import styled from "styled-components";
import Navbar from "../components/Navbar";
import Bang from "../components/Bang";
import Products from "../components/product/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  border-radius: 6px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Bang />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Tìm Kiếm</FilterText>
          <FilterText>Màu:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <FilterText>Bộ nhớ:</FilterText>
          <Select name="memory" onChange={handleFilters}>
            <Option disabled>Memory</Option>
            <Option>64</Option>
            <Option>128</Option>
            <Option>256</Option>
            <Option>512</Option>
            <Option>1T</Option>
          </Select>
          <FilterText>Ram:</FilterText>
          <Select name="ram" onChange={handleFilters}>
            <Option disabled>Ram</Option>
            <Option>4</Option>
            <Option>8</Option>
            <Option>16</Option>
            <Option>32</Option>
            <Option>64</Option>
          </Select>
          <FilterText>Kích thước:</FilterText>
          <Select name="kichthuoc" onChange={handleFilters}>
            <Option disabled>kichthuoc</Option>
            <Option>5.8</Option>
            <Option>6.1</Option>
            <Option>6.8</Option>
            <Option>14</Option>
            <Option>15.6</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sắp xếp sản phẩm:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Sản Phẩm Mới Nhất</Option>
            <Option value="asc">Giá (từ thấp đến cao)</Option>
            <Option value="desc">Giá (từ cao xuống thấp)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
