import React, { useEffect } from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "../../styles/normalize.scss";
import "../../styles/style.scss";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

const Installation = () => {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <div>
      <Head>
        <title>Installation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Sidebar />

      <main className="page">
        <div className="page__content">
          <h1>Installation</h1>
          <div>
            <h3> Map Setup </h3>
            <p>
              To inject react-azure-maps to your React App you must just add package by your package manager
            and get Azure Map subscription key
            </p>
            <div className="description">
              Get an Azure Maps key at  <a href="https://azure.com/maps" target="_blank" rel="noopener noreferrer">https://azure.com/maps</a>
            </div>
          </div>
          <h2 id="npm">NPM</h2>

          <pre>
            <code className="language-bash">{`npm install react-azure-maps`}</code>
          </pre>

          <h2 id="yarn">Yarn</h2>
          <pre>
            <code className="language-bash">{`yarn add react-azure-maps`}</code>
          </pre>

          <h2 id="usage">Basic Usage</h2>
          <p>
            Create IAzureMapOptions object with you key and initial map properties then pass it as options props in Azure Map.
            AzureMap component should be wrap by AzureMapProvider. Map also must have contiarner that specifies the height of the map.
          </p>
          <p>

          </p>
          <pre>
            <code className="language-javascript">
              {`const option: IAzureMapOptions = {
    authOptions: {
        authType: AuthenticationType.subscriptionKey,
        subscriptionKey: key
    },
}

const DefaultMap: React.FC = () => (
    <div style={{height: '300px'}}>
        <AzureMapsProvider>
            <AzureMap options={option}>
            </AzureMap>
        </AzureMapsProvider>
    </div>
)
`}
            </code>
          </pre>
        </div>
      </main>
    </div>
  );
};

export default Installation;
