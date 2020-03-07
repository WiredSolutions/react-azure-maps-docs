import React from "react";
import Head from "next/head";
import AsyncImg from "../../assets/examples/async-change.png";


const Async = () => {
    return (
        <div>
            <Head>
                <title>Async pin position</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="page">
                <div className="page__content">
                    <h1>Async pin position</h1>
                    <p></p>
                    <h2 id="usage">Usage:</h2>

                    <img style={{
                        width: '100%'
                    }} src={AsyncImg} />

                    <h2 id="code">Code:</h2>
                    <a href={'https://github.com/WiredSolutions/react-azure-maps-playground/tree/master/src/examples/Live'} target="_blank"> Source Code </a>
                    <pre>
                        <code className="language-jsx">

                        </code>
                    </pre>
                </div>
            </main>
        </div>
    );
};

export default Async;
