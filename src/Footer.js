import React from 'react'
import './Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
         <p>{this.props.name}</p>
      </div>
    )
  }
}

export default Footer
