import React from 'react'

export default () => {
    const isFirst = React.useRef(true)

    if (isFirst.current) {
        isFirst.current = false

        return true
    }

    return isFirst.current
}