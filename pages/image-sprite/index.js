import React from "react";
import Head from "next/head";
import arrowImg from "../../assets/examples/arrow-lines.png";


const ImageSprite = () => {
    return (
        <div>
            <Head>
                <title>Arrow lines & Image Sprite</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="page">
                <div className="page__content">
                    <h1>Arrow lines & Image Sprite</h1>
                    <p>This sample shows how to add arrow icons along a line on the map</p>
                    <h2 id="usage">Usage:</h2>
                    <p>When using a symbol layer, set the <code>placement</code> option to <code>line</code>. This will render the symbols along the line and rotate the icons <code>0 degrees = right</code>.</p>

                    <img style={{
                        width: '100%'
                    }} src={arrowImg} />

                    <h2 id="code">Code:</h2>
                    <a href={'https://github.com/WiredSolutions/react-azure-maps-playground/blob/master/src/examples/ArrowLinesExample.tsx'} target="_blank"> Source Code </a>
                    <pre>
                        <code className="language-jsx">

                        </code>
                    </pre>
                </div>
            </main>
        </div>
    );
};

export default ImageSprite;
