import React, { useEffect } from "react";
import "../../App.css";
import Clients from "./Clients";
import DocumentsList from "./DocumentsList";
import HowItWork from "./HowItWork";
import PartnerQna from "./PartnerQna";
import ProductsCursolCard from "./ProductsCursolCard";
import ResturantHeroSection from "./ResturantHeroSection";
import SearchResturat from "./SearchResturat";
function AddResturant() {
  useEffect(() => {
    document.title = "Add a resturant - Zomato";
  }, []);
  return (
    <div>
      <ResturantHeroSection />
      <DocumentsList />
      <PartnerQna />
      <HowItWork />
      <SearchResturat />
      <ProductsCursolCard />
      <Clients />
    </div>
  );
}

export default AddResturant;
