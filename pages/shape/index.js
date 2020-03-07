import React from "react";
import Head from "next/head";
import shapeImg from "../../assets/examples/shape.png";


const Shape = () => {
    return (
        <div>
            <Head>
                <title>Shape</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="page">
                <div className="page__content">
                    <h1>Shape</h1>
                    <p>Simple shape example </p>
                    <h2 id="usage">Usage:</h2>

                    <img style={{
                        width: '100%'
                    }} src={shapeImg} />

                    <h2 id="code">Code:</h2>
                    <a href={'https://github.com/WiredSolutions/react-azure-maps-playground/blob/master/src/examples/Shape/Shape.tsx'} target="_blank"> Source Code </a>
                    <pre>
                        <code className="language-jsx">

                        </code>
                    </pre>
                </div>
            </main>
        </div>
    );
};

export default Shape;
