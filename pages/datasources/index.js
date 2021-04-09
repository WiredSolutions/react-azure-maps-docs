import React from "react";
import Head from "next/head";

const GeoJSONDatasource = () => (
  <>
  <h2 id="geojson"> GeoJSON datasource </h2>
  <div>
    <p>
      <code>AzureMapsDataSourceProvider</code> represents a geoJSON datasource and is usually used to display custom geojson data on the map.
      To provide geoJSON data, <code>dataFromUrl</code> property on <code>AzureMapsDataSourceProvider</code> or <code>AzureMapFeature</code> child component
      can be used. 
    </p>
    <h4> Using dataFromUrl to provide geoJSON data </h4>
    <p>
      Below example shows how geoJSON data can be provided via dataFromUrl property. It should point to the valid geoJSON object. 
    </p>
  </div>
  <pre>
    <code className="language-jsx">
      {`const ChronoplethMap = () => (
  <AzureMapsProvider>
    <div style={{ height: '300px' }}>
    <AzureMap options={option}>
    <AzureMapDataSourceProvider
      id={'chronoplethMap DataSourceProvider'}
      dataFromUrl="https://raw.githubusercontent.com/Azure-Samples/AzureMapsCodeSamples/master/AzureMapsCodeSamples/Common/data/geojson/US_States_Population_Density.json"
    >
      <AzureMapLayerProvider
        id={'chronoplethMap LayerProvider'}
        options={{
          base: 100,
          fillColor: steppedExp,
          fillOpacity: 0.7,
          height: ['interpolate', ['linear'], ['get', 'density'], 0, 100, 1200, 960000],
        }}
        type="PolygonExtrusionLayer"
      />
    </AzureMapDataSourceProvider>
    </AzureMap>
    </div>
  </AzureMapsProvider>
);`}
    </code>
  </pre>
  <p>You may find the above example full source code in playground repo at <a href={'https://github.com/WiredSolutions/react-azure-maps-playground/blob/master/src/examples/ChoroplethMap.tsx'} target="_blank"> ChoropletMap.tsx </a></p>

  </>
)

const VectorDatasource = () => (
  <>
  <h2 id="vector"> Vector datasource </h2>
  <div>
    <p>
      <code>AzureMapVectorTileSourceProvider</code> represents a vector datasource and is usually used to display map data provided in <a href="https://docs.mapbox.com/vector-tiles/specification/">MVT format</a> 
      and served by major map data providers such as Azure Maps, Mapbox, OpenMapTiles, etc. Use <code>tiles</code> option to provide an mvt source url for <code>AzureMapVectorTileSourceProvider</code>.
    </p>
    <h4> Using AzureMapVectorTileSourceProvider </h4>
    <p>
      Below example shows how AzureMapVectorTileSourceProvider can be used to render traffic provided by Azure Maps with custom styles.
    </p>
  </div>
  <pre>
    <code className="language-jsx">
      {`const MapWithTraffic = () => (
  <AzureMapsProvider>
    <div style={styles.map}>
      <AzureMap options={option}>
        <AzureMapVectorTileSourceProvider 
          id={"Traffic Flow DataSource"} 
          options={{
            maxZoom: 22,
            tiles: ['https://{azMapsDomain}/traffic/flow/tile/pbf?api-version=1.0&style=relative&zoom={z}&x={x}&y={y}'], 
          }}>
          
          <AzureMapLayerProvider
            id={'Flow Layer'}
            type={'LineLayer'}
            options={{
              sourceLayer: 'Traffic flow',
              strokeColor: [
                'interpolate',
                ['linear'],
                ['get', 'traffic_level'],
                0, 'red',
                0.33, 'orange',
                0.66, 'green'
              ],
              strokeWidth: [
                'interpolate',
                ['linear'],
                ['get', 'traffic_level'],
                0, 6,
                1, 1
              ]
            }}
          />
        </AzureMapVectorTileSourceProvider>
      </AzureMap>
    </div>
  </AzureMapsProvider>
);`}
    </code>
  </pre>
  <p>You may find the above example full source code in playground repo at <a href={'https://github.com/WiredSolutions/react-azure-maps-playground/blob/master/src/examples/AzureLayer.tsx'} target="_blank"> AzureLayer.tsx </a></p>

  </>
)

const Datasources = () => {
  return (
    <div>
      <Head>
        <title>Datasources</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="page">
        <div className="page__content">
          <h1>Datasources</h1>
          <div>
            <h3>Concepts</h3>
            <p>
              The visual data displayed on the map is configured by two entities:
              <span style={{fontWeight: 'bold'}}> Datasources </span> and <span style={{fontWeight: 'bold'}}>Layers</span>.
            </p>
            <p>
              A datasource describes a type and the location of data being rendered on map as well as additional properties such as zoom level ranges where datasource is applied. 
              Azure maps support datasources of two flavours: <span style={{fontWeight: 'bold'}}>GeoJSON</span> and <span style={{fontWeight: 'bold'}}>Vector</span>.
            </p>
            <p>
            A layer conceptually binds the portion of the data from the datasource to the visual style, thus resulting in a certain shape being displayed on the map.
            </p>
            <p>
            Additional information about datasources can be found in azure maps documentation at <a href="https://docs.microsoft.com/en-us/azure/azure-maps/create-data-source-web-sdk">Create a data source</a>
            </p>
          </div>

          <GeoJSONDatasource/>
          <VectorDatasource/>
          
        </div>
      </main>
    </div>
  );
};

export default Datasources;
