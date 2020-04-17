import React, { Component } from 'react'
import { ThemeContext } from './ThemeContext'
import Menu from './Menu'


class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: 'dark',
            currentMenu: '',
            menus: [
                'menu1',
                'menu2',
                'menu3'
            ]
        }

        this.menuChange = this.menuChange.bind(this)
    }

    menuChange(menu) {
        this.setState({
            currentMenu: menu
        })
    }

    render() {
        return (
            <ThemeContext.Provider value={{theme: this.state.theme}}>
                <div>第一层 Layout</div>
                当前menu: { this.state.currentMenu }
                <Menu menus={this.state.menus} menusClickCb={this.menuChange}/>
            </ThemeContext.Provider>
        )
    }
}

export default Layout