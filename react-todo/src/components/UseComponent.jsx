import React, { Component } from 'react'
import HelloWorld from './HelloWorld'
class UseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div>
                class组件
                <h4>直接import组件引用</h4>
                <HelloWorld />
            </div>
        )
    }
}
export default UseComponent