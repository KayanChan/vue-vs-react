import React from 'react'
import { ThemeContext } from './ThemeContext'

function ListB() {
    return (
        <div>
            <div>第三层 ListB</div>
            <ThemeContext.Consumer>
                {
                    (value) => {
                        return <div>来自Layout的共享的数据：{value.theme}</div>
                    }
                }
            </ThemeContext.Consumer>
        </div>
    )
}

export default ListB