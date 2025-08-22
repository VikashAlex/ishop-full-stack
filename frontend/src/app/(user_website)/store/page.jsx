import React from "react";
import TopBanner from "../components/store/TopBanner";
import PopularProduct from "../components/store/PopularProduct";
import Products from "../components/store/Products";

function StorePage() {
  return (
    <>
      <TopBanner />
      <PopularProduct />
      <Products />
    </>
  );
}

export default StorePage;
