import { useEffect, useState } from "react";

const option = {
    authOptions: {
        authType: 'subscriptionKey',
    },
}

export default function MapComponent() {
    const [module, setModule] = useState(null)
    const [key, setKey] = useState()

    useEffect(() => {
        import('react-azure-maps').then((module) => {
            setModule(module)
        });
    }, [])

    return (
        <div>
            {!key && <div>
                <form onSubmit={v => {
                    setKey(v.target[0].value)
                }
                }>
                    <label htmlFor="key">Subscription Key</label>
                    <input id="key" name="key" type="text" autoComplete="azure-maps-key" required/>
                    <button type="submit">Add key</button>
                </form>
            </div>}
            {!!module && key && (
                <div>
                    <p>Module is ready</p>
                    <div style={{height: '300px'}}>
                        <module.AzureMapsProvider>
                            <module.AzureMap options={{option, ...{...option.authType, ...{subscriptionKey: key}}}}>
                            </module.AzureMap>
                        </module.AzureMapsProvider>
                    </div>
                </div>
            )}
        </div>
    )
}

