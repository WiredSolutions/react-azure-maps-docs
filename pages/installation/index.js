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
          <h2 id="npm">NPM</h2>

          <pre>
            <code className="language-bash">{`npm install react-azure-maps`}</code>
          </pre>

          <h2 id="yarn">Yarn</h2>
          <pre>
            <code className="language-bash">{`yarn add react-azure-maps`}</code>
          </pre>

          <h2 id="usage">Basic Usage</h2>
          <pre>
            <code className="language-javascript">
              {`const DefaultMap = () => {
  const position = new data.Position(-100.01, 45.01)
  const option: IAzureMapOptions = useMemo(() => {
    return {
      authOptions: {
        authType: AuthenticationType.subscriptionKey,
        subscriptionKey: key
      },
      center: [-100.01, 45.01],
      zoom: 12,
      view: 'Auto'
    }
  }, [])
  return (
    <div style={{
        height: '300px'
    }}>
      <AzureMapsProvider>
        <AzureMap options={option}>
          <AzureMapDataSourceProvider id={'default DataSourceProvider'}>
            <AzureMapLayerProvider
              options={{}}
              type={'SymbolLayer'}
            ></AzureMapLayerProvider>
            <AzureMapFeature
              type="Point"
              coordinate={position}
              properties={{
                title: 'Microsoft',
                icon: 'pin-round-blue'
              }}
            ></AzureMapFeature>
          </AzureMapDataSourceProvider>
          <AzureMapHtmlMarker
            markerContent={<div className="pulseIcon"></div>}
            options={{position: [-110, 45]}}
          />
        </AzureMap>
      </AzureMapsProvider>
    </div>
  )
}`}
            </code>
          </pre>
        </div>
      </main>
    </div>
  );
};

export default Installation;
