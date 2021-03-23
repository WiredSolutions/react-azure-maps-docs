import React from "react";
import Head from "next/head";
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
    () => import('./components/mapDynamicComponent'),
    {loading: () => <p>Loading React azure maps ...</p>, ssr: false}
)


const LiveExample = () => {
    return (
        <div>
            <Head>
                <title>Live Map example</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="page">
                <div className="page__content">
                    <h1>Next.JS Map Example</h1>
                    <p>React-azure-maps with NEXT.JS</p>

                    <DynamicComponentWithNoSSR/>

                    <h2 id="usage">Usage:</h2>
                    <p>
                        Use dynamic import with <code>ssr: false</code> option when importing component that contains
                        map.
                    </p>
                    <p className="tip">
                        Map component working on as client side - so you need to import is without SSR.
                    </p>

                    <h2 id="code">Code:</h2>
                    <a href={'https://github.com/WiredSolutions/react-azure-maps-docs/tree/master/pages/live-example-map/index.js'} > Source Code </a>
                    <pre>
                         <code className="language-jsx">
                             {`const DynamicComponentWithNoSSR = dynamic(
    () => import('./components/mapDynamicComponent'),
    {loading: () => <p>Loading React azure maps ...</p>, ssr: false}
)`}
                         </code>
                    </pre>
                    <pre>
                        <code className="language-jsx">
                            {`import { useEffect, useReducer, useRef } from "react";

const option = {
  authOptions: {
    authType: "subscriptionKey",
    subscriptionKey: "" // Your subscription key
  }
};

export default function MapComponent() {
  const reactMapRef = useRef(null);
  const forceUpdate = useReducer(() => ({}), {})[1];

  useEffect(() => {
    import("react-azure-maps").then(module => {
      reactMapRef.current = module;
      forceUpdate();
    });
  }, []);

  return (
    <div>
      {!!reactMapRef.current && (
        <div>
          <p>Module is ready</p>
          <div style={{ height: "300px" }}>
            <reactMapRef.current.AzureMapsProvider>
              <reactMapRef.current.AzureMap options={option} />
            </reactMapRef.current.AzureMapsProvider>
          </div>
        </div>
      )}
    </div>
  );
}`}
                        </code>
                    </pre>
                </div>
            </main>
        </div>
    );
};

export default LiveExample;
