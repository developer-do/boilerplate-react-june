import React from "react";
import { getUsers } from "lib/api";

const AboutContainer = () => {
  getUsers().then((res) => {
    {
      console.log(res.data);
    }
  });
  return <div>AboutContainer</div>;
};

export default AboutContainer;
