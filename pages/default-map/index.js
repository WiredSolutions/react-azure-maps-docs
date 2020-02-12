import React from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "../../styles/normalize.scss";
import "../../styles/style.scss";

const Home = () => (
  <div>
    <Head>
      <title>Default Map</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <Sidebar />
  </div>
);

export default Home;
