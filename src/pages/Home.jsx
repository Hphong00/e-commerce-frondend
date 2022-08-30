import React from "react";
import Categories from "../components/category/Categories";
import Categories_all from "../components/category/Categories_all";
import Navbar from "../components/Navbar";
import Bang from "../components/Bang";
import Slider from "../components/Silder";
import Products from "../components/product/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Poster from "../components/poster/Poster";
import Poster1 from "../components/poster/Poster1";
import Poster2 from "../components/poster/Poster2";
import Poster3 from "../components/poster/Poster3";
import Products_Apple from "../components/product/Products_Apple";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Bang />
      <Slider />
      <Categories_all />
      <Poster1 />
      <Products />
      <Poster2 />
      <Categories />
      <Poster />
      <Products_Apple />
      <Poster3 />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
