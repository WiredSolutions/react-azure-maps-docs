import React, { useEffect } from "react";
import Router from "next/router";

import "../styles/normalize.scss";
import "../styles/style.scss";

const Home = () => {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == "/") {
      Router.push("/installation");
    }
  });
  return <div></div>;
};

export default Home;
