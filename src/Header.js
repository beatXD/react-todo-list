import React from 'react'
import './Header.css'

class Header extends React.Component {
  render() {
    return <h1>{this.props.title}</h1>
  }
}

Header.defaultProps = {
  title: 'TodoList',
}

export default Header
