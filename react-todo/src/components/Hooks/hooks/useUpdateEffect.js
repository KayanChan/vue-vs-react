import React from 'react'
import useFirstMounted from "./useFirstMounted"

export default (effect, deps) => {
    const isFirstMounted = useFirstMounted()

    React.useEffect(() => {
        if (!isFirstMounted) {
            return effect()
        }
    }, deps)
}