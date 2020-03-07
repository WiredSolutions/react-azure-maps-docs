import React from "react";
import Head from "next/head";
import RouteImg from "../../assets/examples/route.png";


const Route = () => {
    return (
        <div>
            <Head>
                <title>Route</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="page">
                <div className="page__content">
                    <h1>Route</h1>
                    <p>This sample shows how to apply a stroke gradient to a line on the map.</p>
                    <h2 id="usage">Usage:</h2>

                    <p className="tip">The data source must have the <code>lineMetrics</code> option set to <code>true</code>.</p>
                    <img style={{
                        width: '100%'
                    }} src={RouteImg} />

                    <h2 id="code">Code:</h2>
                    <a href={'https://github.com/WiredSolutions/react-azure-maps-playground/blob/master/src/examples/RouteExample.tsx'} target="_blank"> Source Code </a>
                    <pre>
                        <code className="language-jsx">

                        </code>
                    </pre>
                </div>
            </main>
        </div>
    );
};

export default Route;
