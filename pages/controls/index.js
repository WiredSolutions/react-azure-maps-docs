import React from "react";
import Head from "next/head";
import ControlsImg from "../../assets/examples/style-control.png";


const Controls = () => {
    return (
        <div>
            <Head>
                <title>Style Controls</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="page">
                <div className="page__content">
                    <h1>Style Controls</h1>
                    <p>This sample shows how to add the map style picker control to the map.</p>
                    <h2 id="usage">Usage:</h2>

                    <img style={{
                        width: '100%'
                    }} src={ControlsImg} />

                    <h2 id="code">Code:</h2>
                    <a href={'https://github.com/WiredSolutions/react-azure-maps-playground/blob/master/src/examples/ControlExample.tsx'} target="_blank"> Source Code </a>
                    <pre>
                        <code className="language-jsx">

                        </code>
                    </pre>
                </div>
            </main>
        </div>
    );
};

export default Controls;
