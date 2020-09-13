import React from "react";
import { PlainHeader } from "components/common/header";
import { PlainTemplate } from "components/base/template";
import AboutContainer from "containers/about/AboutContainer";

const About = () => {
  return (
    <PlainTemplate header={<PlainHeader />}>
      <AboutContainer />
    </PlainTemplate>
  );
};

export default About;
