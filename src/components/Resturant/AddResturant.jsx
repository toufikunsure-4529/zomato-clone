import React, { useEffect } from "react";

import DocumentsList from "./DocumentsList";
import PartnerQna from "./PartnerQna";
import ResturantHeroSection from "./ResturantHeroSection";
import HowItWork from "./HowItWork";

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
    </div>
  );
}

export default AddResturant;
