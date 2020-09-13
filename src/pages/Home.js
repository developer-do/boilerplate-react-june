import React from "react";
import { PlainHeader } from "components/common/header";
import { PlainTemplate } from "components/base/template";
import HomeContainer from "containers/home/HomeContainer";

const Home = () => {
  return (
    <PlainTemplate header={<PlainHeader />}>
      <HomeContainer />
    </PlainTemplate>
  );
};

export default Home;
