import React, { Component } from 'react'
import { ThemeContext } from './ThemeContext'

class ListA extends Component {
    static contextType = ThemeContext
    constructor() {
        super()
        this.state = {}
    }
    render() {
        console.log(this.context)
        const { theme } = this.context
        return (
            <div>
                <div>第三层 ListA</div>
                <div>来自Layout的共享的数据：{theme}</div>
            </div>
        )
    }
}

export default ListA