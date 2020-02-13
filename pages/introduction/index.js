import React, { useEffect } from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "../../styles/normalize.scss";
import "../../styles/style.scss";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

const Introduction = () => {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <div>
      <Head>
        <title>Introduction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Sidebar />

      <main className="page">
        <div className="page__content">
          <h1>Introduction</h1>
          <p>
            React Azure Maps is a react wrapper for Azure Maps. The whole library is written in typescript and uses React 16.8+
          </p>
          <h2 id="playgroud">Playground</h2>
          On playgroud you can play with samples.
          Run it locally a check how we implement them. A lot of features are from
          <a href={'https://azuremapscodesamples.azurewebsites.net/'}> Azure Maps Code Sample</a>

          <h2 id="inspiration">Inspirations</h2>
          <p>
            While creating this package we were inspired:
            <div>
              <a href={'https://azuremapscodesamples.azurewebsites.net/'}> Azure Maps Code Sample</a>
            </div>
            <div>
              <a href={'https://github.com/Acaisoft/angular-azure-maps'}> Angular Azure Map </a>
            </div>
            <div>
              <a href={'https://rickyruiz.github.io/vue-azure-maps/'}> Vue Azure Maps </a>
            </div>
          </p>
          <h2 id="docs">Documentation</h2>
          <p>
            <div>
              <a href={'https://docs.microsoft.com/en-us/azure/azure-maps/'}> Azure Maps Documentation</a>
            </div>
            <div>
              <a href={'https://www.npmjs.com/package/azure-maps-control'}> Azure Maps Control</a>
            </div>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Introduction;
