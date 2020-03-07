import React from "react";
import Head from "next/head";
import BubbleLayerImg from "../../assets/examples/bubble-layer.png";


const BubbleLayer = () => {
    return (
        <div>
            <Head>
                <title>Bubble Layer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="page">
                <div className="page__content">
                    <h1>Bubble Layer</h1>
                    <p>This sample shows how to enable point based clustering on a data source and render them differently from individual points on the map.</p>
                    <h2 id="usage">Usage:</h2>

                    <img style={{
                        width: '100%'
                    }} src={BubbleLayerImg} />

                    <h2 id="code">Code:</h2>
                    <a href={'https://github.com/WiredSolutions/react-azure-maps-playground/blob/master/src/examples/BubbleLayer.tsx'} target="_blank"> Source Code </a>
                    <pre>
                        <code className="language-jsx">

                        </code>
                    </pre>
                </div>
            </main>
        </div>
    );
};

export default BubbleLayer;
