import React from "react";
import { useGetAllProductsQuery } from "../Redux/Quries/products";

const AllProducts = () => {
  const res = useGetAllProductsQuery()

  console.log("respns",res);
  
  return <div>AllProducts</div>;
};

export default AllProducts;
