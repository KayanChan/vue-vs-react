import React, { Component } from 'react'

class ParentsData2 extends Component {
    constructor(props) {
        super(props)

        const { name, isParents, isChild } = this.props

        this.state = {
            parentsName: name,
            _isParents: isParents,
            _isChild: isChild
        }
    }

    render() {
        const {parentsName, _isParents, _isChild} = this.state
        return (<div>
            <h4>class组件：通过props接收父层数据</h4>
            { parentsName } {_isParents} {_isChild}
        </div>)
    }
}

export default ParentsData2