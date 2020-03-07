import React from "react";
import Head from "next/head";
import layersImg from "../../assets/examples/Layers.png";


const Layers = () => {
    return (
        <div>
            <Head>
                <title>Layers</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="page">
                <div className="page__content">
                    <h1>Layers</h1>
                    <p>This sample shows how to add <code>layers</code> and <code>global map events</code></p>
                    <h2 id="usage">Usage:</h2>

                    <img style={{
                        width: '100%'
                    }} src={layersImg} />

                    <h2 id="code">Code:</h2>
                    <a href={'https://github.com/WiredSolutions/react-azure-maps-playground/blob/master/src/examples/AzureLayer.tsx'} target="_blank"> Source Code </a>
                    <pre>
                        <code className="language-jsx">

                        </code>
                    </pre>
                </div>
            </main>
        </div>
    );
};

export default Layers;
