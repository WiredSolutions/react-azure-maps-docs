import React from "react";
import Head from "next/head";
import markersImg from "../../assets/examples/markers.png";


const Markers = () => {
    return (
        <div>
            <Head>
                <title>Markers</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="page">
                <div className="page__content">
                    <h1>Markers</h1>
                    <p></p>
                    <h2 id="usage">Usage:</h2>

                    <img style={{
                        width: '100%'
                    }} src={markersImg} />

                    <h2 id="code">Code:</h2>
                    <a href={'https://github.com/WiredSolutions/react-azure-maps-playground/tree/master/src/examples/MarkersExample'} target="_blank"> Source Code </a>
                    <pre>
                        <code className="language-jsx">

                        </code>
                    </pre>
                </div>
            </main>
        </div>
    );
};

export default Markers;
