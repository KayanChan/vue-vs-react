import React from 'react'
import useUpdateEffect from "./useUpdateEffect"

export default (componentName, ...rest) => {
    React.useEffect(() => {
        console.log(`${componentName} mounted`, ...rest)
        return () => console.log(`${componentName} unmounted`)
    }, [])

    useUpdateEffect(() => {
        console.log(`${componentName} updated`, ...rest)
    })
}