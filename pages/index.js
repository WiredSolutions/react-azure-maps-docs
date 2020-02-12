import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import "../styles/normalize.scss";
import "../styles/style.scss";
import Sidebar from "../components/sidebar";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navbar />
    <Sidebar />
  </div>
);

export default Home;
