import React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/hero/Hero";
import Category from "../components/category/Category";
import Card from "../components/products/Card";

const Home = () => {
  return (

    <Layout> 
      <Hero/> 
      <Category/>
      <Card/>
    </Layout>
    
  )
};

export default Home;
