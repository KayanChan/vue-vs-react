import React from 'react'

class NamedSlot extends React.Component {
  render() {
    const { header, main, footer, children } = this.props
    return (<div>
      <header>
        { header || (<div>Header content</div>) }
      </header>
      <main>
        { main || (<div>Main content</div>) }
      </main>
      { children }
      <footer>
        { footer || (<div>Footer content</div>) }
      </footer>

    </div>)
  }
}

export default NamedSlot