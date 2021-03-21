import React from "react";
import Head from "next/head";
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
    () => import('./components/mapDynamicComponent'),
    { loading: () => <p>Loading React azure maps ...</p>, ssr: false }
)



const LiveExample = () => {
    return (
        <div>
            <Head>
                <title>Live Map example</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="page">
                <div className="page__content">
                    <h1>Next.JS  Map Example</h1>
                    <p>React-azure-maps with NEXT.JS</p>

                    {process.browser &&  <DynamicComponentWithNoSSR />}

                    <h2 id="usage">Usage:</h2>
                    <p>
                       Use dynamic import with  <code>ssr: false</code> option when importing component that contains map.
                    </p>
                    <p className="tip">
                        Map component working on as client side - so you need to import is without SSR.
                    </p>

                    <h2 id="code">Code:</h2>
                    <a href={'https://github.com/WiredSolutions/react-azure-maps-playground/blob/master/src/examples/DefaultMap.tsx'} > Source Code </a>
                    <pre>
                        <code className="language-jsx">
                            {`import { useEffect, useState } from "react";

const option = {
    authOptions: {
        authType: 'subscriptionKey',
        subscriptionKey: ''// Your subscription key
    }
}

export default function MapComponent() {
    const [module, setModule] = useState(null)

    useEffect(() => {
        import('react-azure-maps').then((module) => {
            setModule(module)
        });
    }, [])

    return (
        <div>
            {!!module && (
                <div>

                <p>Module is ready</p>
                    <div style={{height: '300px'}}>
                        <module.AzureMapsProvider>
                            <module.AzureMap options={option}>
                            </module.AzureMap>
                        </module.AzureMapsProvider>
                    </div>

                </div>
            )}
        </div>
        )
}

`}
                        </code>
                    </pre>
                </div>
            </main>
        </div>
    );
};

export default LiveExample;
