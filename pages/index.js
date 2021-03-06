import React from "react";
import Head from "next/head";

const Introduction = () => {
  return (
    <div>
      <Head>
        <title>Introduction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="page">
        <div className="page__content">
          <h1>Introduction</h1>
          <p>
            <a href={'https://github.com/WiredSolutions/react-azure-maps '} target="_blank" >
              React Azure Maps </a>is a react wrapper for Azure Maps. The whole library is written in typescript and uses React 16.8+
          </p>
          <h2 id="playgroud">Playground</h2>
          <p>
            On playgroud you can play with samples. Run it locally a check how
            we implement them. A lot of features are from&nbsp;
            <a href={"https://azuremapscodesamples.azurewebsites.net/"} target="_blank">
              Azure Maps Code Sample
            </a>
          </p>

          <h2 id="inspiration">Inspirations</h2>
          <p>
            While creating this package we were inspired:
          </p>
          <ul>
            <li>   <a href={"https://azuremapscodesamples.azurewebsites.net/"} target="_blank">
              Azure Maps Code Sample
              </a></li>
            <li>  <a href={"https://github.com/Acaisoft/angular-azure-maps"} target="_blank">
              Angular Azure Map
              </a></li>
            <li>  <a href={"https://rickyruiz.github.io/vue-azure-maps/"} target="_blank">
              Vue Azure Maps
              </a></li>
          </ul>

          <h2 id="docs">Documentation</h2>

          <ul>
            <li>   <a href={"https://wiredsolutions.github.io/react-azure-maps/"} target="_blank">
              React Azure Map Types Documentation
              </a></li>
            <li>  <a href={"https://docs.microsoft.com/en-us/azure/azure-maps/"} target="_blank">
              Azure Maps Documentation
              </a></li>
            <li>  <a href={"https://www.npmjs.com/package/azure-maps-control"} target="_blank">
              Azure Maps Control
              </a></li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Introduction;
