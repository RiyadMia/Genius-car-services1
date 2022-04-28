import React from "react";
import { Helmet } from "react-helmet-async";
import PageTaitle from "../../Shared/PageTaitle/PageTaitle";
import Bannar from "../Bannar/Bannar";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <PageTaitle title="Home"></PageTaitle>

      <Bannar></Bannar>
      <Services></Services>
      <Experts></Experts>
    </div>
  );
};

export default Home;
