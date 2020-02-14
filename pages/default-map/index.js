import React from "react";
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Default Map</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="page">
        <div className="page__content">
          <h1>Default Map Example</h1>
          <h3>
            Simple example of react-azure-maps using React Functional Component.
          </h3>
          <p>That sample will render map with all their maps basic features.</p>
          <p>
            <div className="tip">
              Map must have styled container with specified height.
            </div>
            AzureMap component should be wrap by AzureMapProvider. Map also must
            have container that specifies the height of the map.
          </p>
          <h2 id="code">Code:</h2>
          <pre>
            <code className="language-jsx">
              {`import React from 'react'
import {AzureMap, AzureMapsProvider, IAzureMapOptions} from 'react-azure-maps'
import {AuthenticationType} from 'azure-maps-control'

const option: IAzureMapOptions = {
    authOptions: {
        authType: AuthenticationType.subscriptionKey,
        subscriptionKey: // Your subscription key
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
export default DefaultMap
                `}
            </code>
          </pre>
        </div>
      </main>
    </div>
  );
};

export default Home;
