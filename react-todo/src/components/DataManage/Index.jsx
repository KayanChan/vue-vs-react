import React, { Component } from 'react'
import SelfData1 from './SelfData1'
import SelfData2 from './SelfData2'
import ParentsData1 from './ParentsData1'
import ParentsData2 from './ParentsData2'
class DataManage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Mark'
        }
    }

    render() {
        return (
            <div>
                <SelfData1 />
                <SelfData2 />
                <ParentsData1 name={this.state.name} isParents isChild='false'/>
                <ParentsData2 name={this.state.name} isParents={true} isChild='false'/>
            </div>
        )
    }
}
export default DataManage