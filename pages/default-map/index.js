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
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Navbar/>
        <Sidebar/>
        <main className="page">
            <div className="page__content">
                <h1>Default Map Example</h1>
                <h3>
                    Simple example of react-azure-maps using React Functional Component.
                </h3>
                <p>
                    That sample will render map with all their maps basic features.
                </p>
                <br></br>
                <p>
                    <div className="description">
                        Map must have styled container with specified height.
                    </div>
                    AzureMap component should be wrap by AzureMapProvider. Map also must have container that specifies the height of the map.
                </p>
                <h2 id="code">Code:</h2>
                <pre>
            <code className="language-javascript">
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

export default Home;
