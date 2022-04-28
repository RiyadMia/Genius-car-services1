import React from "react";
import { Helmet } from "react-helmet-async";

const PageTaitle = ({ title }) => {
  return (
    <Helmet>
      <title> {title}-Genius car service</title>
    </Helmet>
  );
};

export default PageTaitle;
