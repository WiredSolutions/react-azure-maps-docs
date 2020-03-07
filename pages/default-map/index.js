import React from "react";
import Head from "next/head";
import defaultMap from "../../assets/examples/default-map.jpg";


const Default = () => {
    return (
        <div>
            <Head>
                <title>Default Map</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="page">
                <div className="page__content">
                    <h1>Default Map Example</h1>

                    <p>That sample will render map with all their maps basic features.</p>

                    <h2 id="usage">Usage:</h2>
                    <p>
                        AzureMap component should be wrap by <code>AzureMapProvider</code>.
                    </p>
                    <p className="tip">
                        Map must have styled container with specified height.
                    </p>

                    <ul>
                        <li><a href={'https://wiredsolutions.github.io/react-azure-maps/globals.html#iazuremap'}
                            target="_blank"> <code>AzureMap</code> </a>
                            <span> - Component that contain map canvas </span></li>
                    </ul>
                    <ul>
                        <li>  <a href={'https://wiredsolutions.github.io/react-azure-maps/globals.html#iazuremapoptions'}
                            target="_blank"> <code>AzureMapOptions</code> </a>
                            <span> - Props that contain map initial options.</span></li>
                        <li><a href={'https://docs.microsoft.com/pl-pl/javascript/api/azure-maps-control/atlas.serviceoptions?view=azure-maps-typescript-latest'}
                            target="_blank"> <code>ServiceOptions</code> </a>
                            - Global properties used in all atlas service requests.</li>
                        <li><a href={'https://docs.microsoft.com/pl-pl/javascript/api/azure-maps-control/atlas.styleoptions?view=azure-maps-typescript-latest'}
                            target="_blank"> <code>StyleOptions</code> </a>
                            - The options for the map's style.</li>
                        <li><a href={'https://docs.microsoft.com/pl-pl/javascript/api/azure-maps-control/atlas.userinteractionoptions?view=azure-maps-typescript-latest'}
                            target="_blank"> <code>UserInteractionOptions</code> </a>
                            - The options for enabling/disabling user interaction with the map.</li>
                        <li><a href={'https://docs.microsoft.com/pl-pl/javascript/api/azure-maps-control/atlas.cameraoptions?view=azure-maps-typescript-latest'}
                            target="_blank"> <code>CameraOptions</code> </a>
                            - The options for setting the map control's camera.</li>
                        <li> <a href={'https://docs.microsoft.com/pl-pl/javascript/api/azure-maps-control/atlas.cameraboundsoptions?view=azure-maps-typescript-latest'}
                            target="_blank"> <code>CameraBoundsOptions</code> </a>
                            - The options for setting the bounds of the map control's camera.</li>
                    </ul>



                    <img style={{
                        width: '100%'
                    }} src={defaultMap} />

                    <h2 id="code">Code:</h2>
                    <a href={'https://github.com/WiredSolutions/react-azure-maps-playground/blob/master/src/examples/DefaultMap.tsx'} > Source Code </a>
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

export default Default;
