import React from "react";
import Head from "next/head";
import defaultMap from "../../assets/examples/map-ref.png";


const MapRef = () => {
    return (
        <div>
            <Head>
                <title>Map Ref</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="page">
                <div className="page__content">
                    <h1>Map Ref Example</h1>

                    <p>You can control map by <code>mapRef</code>.</p>
                    <p>You can also use our components that we build.</p>

                    <h2 id="usage">Usage:</h2>
                    <p>
                        AzureMap component should be wrap by <code>AzureMapProvider</code>.
                    </p>
                    <p className="tip">
                        Remember to add another <code>AzureMapProvider</code> if you want to multiple map instances
                    </p>

                    <ul>
                        <li><a href={'https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/atlas.map?view=azure-maps-typescript-latest'}
                            target="_blank"> <code>Map Class</code> </a>
                            <span> - The control for a visual and interactive web map. </span></li>
                    </ul>

                    <img style={{
                        width: '100%'
                    }} src={defaultMap} />

                    <h2 id="code">Code:</h2>
                    <a href={'https://github.com/WiredSolutions/react-azure-maps-playground/tree/master/src/examples/MapRef'} > Source Code </a>
                    <p>Simple example that show how to use mapRef.</p>
                    <p>Add AzureMapProvider in you react-tree</p>
                    <pre>
                        <code className="language-jsx">
                            {`
import { AzureMapsProvider } from 'react-azure-maps';
import React from 'react';
import MapController from './MapController';

const MapWrapper = () => {
  return (
    <AzureMapsProvider>
      <>
        <div>Map Wrapper</div>
        <SomeOtherComponents />
        <MapController />
      </>
    </AzureMapsProvider>
  );
};
);
                            `}

                        </code>
                    </pre>
                    <p>Now you can get <code>mapRef</code> in your MapController Component </p>
                    <pre>
                        <code className="language-jsx">
                            {`
import React, { useContext, useEffect, useState } from 'react';
import { AzureMapsContext, IAzureMapsContextProps } from 'react-azure-maps';
import { Button } from '@material-ui/core';
import Description from '../../Layout/Description';
import { data, layer, source } from 'azure-maps-control';
import MapComponent from './MapComponent';

const dataSourceRef = new source.DataSource();
const layerRef = new layer.SymbolLayer(dataSourceRef);

const MapController = () => {
  // Here you use mapRef from context
  const { mapRef, isMapReady } = useContext<IAzureMapsContextProps>(AzureMapsContext);
  const [showTileBoundaries, setShowTileBoundaries] = useState(true);
  
  const changeMapCenter = () => {
    if (mapRef) {
      // Simple Camera options modification
      mapRef.setCamera({ center: getRandomPosition() });
    }
  };
  
  useEffect(() => {
    if (mapRef) {
      // Simple Style modification
      mapRef.setStyle({ showTileBoundaries: !showTileBoundaries });
    }
  }, [showTileBoundaries]);
  
  const toggleTitleBoundaries = () => {
    setShowTileBoundaries((prev) => !prev);
  };


  useEffect(() => {
    if (isMapReady && mapRef) {
      // Need to add source and layer to map on init and ready
      mapRef.sources.add(dataSourceRef);
      mapRef.layers.add(layerRef);
    }
  }, [isMapReady]);

  // Util function to add pin
  const addRandomMarker = () => {
    const randomLongitude = Math.floor(Math.random() * (180 - -180) + -180);
    const randomLatitude = Math.floor(Math.random() * (-90 - 90) + 90);
    const newPoint = new data.Position(randomLongitude, randomLatitude);

    dataSourceRef.add(new data.Feature(new data.Point(newPoint)));
  };

  return (
    <>
      <div>Map Controller</div>
      <Description>
        With map ref you can do all that Azure Map can do <br />
      </Description>
      <div style={styles.buttonContainer}>
        <Button size="small" variant="contained" color="primary" onClick={toggleTitleBoundaries}>
          Toggle Title Boundaries
        </Button>
        <Button size="small" variant="contained" color="primary" onClick={changeMapCenter}>
          Change Map Center
        </Button>
        <Button size="small" variant="contained" color="primary" onClick={addRandomMarker}>
          Add Pin
        </Button>
      </div>
      <MapComponent />
    </>
  );
};

// Util Function to generate random position
const getRandomPosition = () => {
  const randomLongitude = Math.floor(Math.random() * (180 - -180) + -180);
  const randomLatitude = Math.floor(Math.random() * (-90 - 90) + 90);
  return [randomLatitude, randomLongitude];
};

// Some styles
const styles = {
  buttonContainer: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridGap: '10px',
    gridAutoColumns: 'max-content',
    padding: '10px 0',
    alignItems: 'center',
  },
  button: {
    height: 35,
    width: 80,
    backgroundColor: '#68aba3',
  },
};

export default MapController;

                `}
                        </code>
                    </pre>
                    <p>Map Component</p>
                <pre>
                    <code className="language-jsx">
{
    `import React from 'react';
    import {AzureMap, IAzureMapOptions} from 'react-azure-maps';
    import {AuthenticationType} from 'azure-maps-control';
    import {key} from '../../key';

    const option: IAzureMapOptions = {
    authOptions: {
    authType: AuthenticationType.subscriptionKey,
    subscriptionKey: key,
        },
    };

    const MapComponent: React.FC = () => {
    return (
    <div style={{height: '300px'}}>
    <AzureMap options={option} />
    </div>
        );
    };

    export default MapComponent;`}
</code>
                </pre>
                </div>
            </main>
        </div>
    );
};

export default MapRef;
