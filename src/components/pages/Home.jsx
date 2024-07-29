import React from "react";
import Main from "../Main";
import Topproducts from "../Topproducts";
import Categories from "../Categories";
import NewArrival from "../NewArrival";
import Services from "../Services";
import Offer from "../Offer";
import Brands from "../Brands";
import Top from "../Top";
import Header from "../Header";
import Footer from "../Footer";



function Home() {
  return (
    <div>
      <Top />
      <Header />
      <Main />
      <Categories />
      <Topproducts />
      <NewArrival />
      <Services />
      <Offer />
      <Brands />
      <Footer />
    </div>
  );
}

export default Home;
