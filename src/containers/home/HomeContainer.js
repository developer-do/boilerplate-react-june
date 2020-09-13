import React from "react";
import { getHome } from "lib/api";

const HomeContainer = () => {
  getHome().then((res) => {
    {
      console.log(res.data);
    }
  });
  return <div>HomeContainer</div>;
};

export default HomeContainer;
