import React from "react";
import Head from "next/head";
import CustomControlImg from "../../assets/examples/custom-control.png";


const CustomControl = () => {
    return (
        <div>
            <Head>
                <title>Custom Control</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="page">
                <div className="page__content">
                    <h1>Custom Control</h1>
                    <p>This sample shows how to create a simple custom control that centers and zooms the map to fit any data that is loaded on the map.</p>
                    <h2 id="usage">Usage:</h2>

                    <p>Works with data in a <code>HtmlMarkers</code>, <code>DataSource</code> and <code>ImageLayers</code></p>
                    <p className="tip" >Custom Control does not support <code>TileLayers</code> and <code>VectorTileSources</code>.</p>
                    <img style={{
                        width: '100%'
                    }} src={CustomControlImg} />

                    <h2 id="code">Code:</h2>
                    <a href={'https://github.com/WiredSolutions/react-azure-maps-playground/tree/master/src/examples/CustomControl'} target="_blank"> Source Code </a>
                    <pre>
                        <code className="language-jsx">

                        </code>
                    </pre>
                </div>
            </main>
        </div>
    );
};

export default CustomControl;
