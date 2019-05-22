import React from 'react'
import '../css/Header.css'

class Header extends React.Component {
  render() {
    return <div className="Header">
              <h1>{this.props.title}</h1>
          </div>
  }
}

Header.defaultProps = {
  title: 'TodoList',
}

export default Header
