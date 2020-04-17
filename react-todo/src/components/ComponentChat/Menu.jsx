import React, { Component } from 'react'
import ListA from './ListA'
import ListB from './ListB'

class Menu extends Component {
  constructor(props) {
    super(props)
    console.log(this)
    this.state = {
      style: {
        margin: '0 auto',
        border: '1px solid #999'
      }
    }
  }
  menuClick(menu) {
    const { menusClickCb } = this.props
    menusClickCb(menu)
  }
  render() {
    const { menus } = this.props
    return <div>
      <div>第二层 Menu ( 点击以下menu )</div>
      <div>
        来自Layout的menus数据   {
          menus.map((menu, key) => {
            return (
            <div key={key} onClick={() => this.menuClick(menu)}>{menu}</div>
            )
          })
        }
      </div>
      <table style={this.state.style}>
        <tbody>
          <tr>
            <td>
              <ListA />
            </td>
            <td>
              <ListB />
            </td>
          </tr>
        </tbody>
      </table>
    </div>;
  }
}

export default Menu