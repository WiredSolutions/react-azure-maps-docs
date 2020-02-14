import React from "react";
import Head from "next/head";
import defaultMap from "../../assets/examples/default-map.jpg";


const Home = () => {
    return (
        <div>
            <Head>
                <title>Default Map</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="page">
                <div className="page__content">
                    <h1>Default Map Example</h1>
                    <h3>
                        Simple example of react-azure-maps using React Functional Component.
                    </h3>
                    <p>That sample will render map with all their maps basic features.</p>
                    <p className="tip">
                        Map must have styled container with specified height.
                    </p>
                    <p>
                        AzureMap component should be wrap by AzureMapProvider. Map also must
                        have container that specifies the height of the map.
                    </p>
                    <p>

                    </p>
                    <p>
                        <a href={'https://wiredsolutions.github.io/react-azure-maps/globals.html#iazuremap'}
                           target="_blank"> AzureMap </a>
                        <span> Component that contain map canvas </span>
                        <br></br>
                        <br></br>
                        <a href={'https://wiredsolutions.github.io/react-azure-maps/globals.html#iazuremapoptions'}
                           target="_blank"> AzureMapOptions </a>
                        <span> Props that contain map initial options. Our type merge all of available options type: </span>
                        <div>
                            <a href={'https://docs.microsoft.com/pl-pl/javascript/api/azure-maps-control/atlas.serviceoptions?view=azure-maps-typescript-latest'}
                               target="_blank"> ServiceOptions </a>
                            Global properties used in all atlas service requests.
                        </div>
                        <div>
                            <a href={'https://docs.microsoft.com/pl-pl/javascript/api/azure-maps-control/atlas.styleoptions?view=azure-maps-typescript-latest'}
                               target="_blank"> StyleOptions </a>
                            The options for the map's style.
                        </div>
                        <div>
                            <a href={'https://docs.microsoft.com/pl-pl/javascript/api/azure-maps-control/atlas.userinteractionoptions?view=azure-maps-typescript-latest'}
                               target="_blank"> UserInteractionOptions </a>
                            The options for enabling/disabling user interaction with the map.
                        </div>
                        <div>
                            <a href={'https://docs.microsoft.com/pl-pl/javascript/api/azure-maps-control/atlas.cameraoptions?view=azure-maps-typescript-latest'}
                               target="_blank"> CameraOptions </a>
                            The options for setting the map control's camera.
                        </div>
                        <div>
                            <a href={'https://docs.microsoft.com/pl-pl/javascript/api/azure-maps-control/atlas.cameraboundsoptions?view=azure-maps-typescript-latest'}
                               target="_blank"> CameraBoundsOptions </a>
                            The options for setting the bounds of the map control's camera.
                        </div>
                    </p>
                    <div>
                        <h2 id="example">Example:</h2>
                        <img style={{
                            width: '100%'
                        }} src={defaultMap} />
                    </div>
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
