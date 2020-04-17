import React, { Component } from 'react'

class SelfData2 extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Yoga',
            age: 10,
            count: 0
        }

        this.countPlus = this.countPlus.bind(this);
    }

    countPlus() {
        this.setState((state) => {
            return {
                count: state.count+1
            }
        })
    }

    render() {
        const { name, age, count } = this.state
        return (
            <div>
                <h4>class组件自身数据</h4>
                <div>
                    { name }: { age }
                    <button onClick={this.countPlus}>+1</button>
                    <span>count: { count }</span>
                </div>
            </div>
        )
    }
}


export default SelfData2