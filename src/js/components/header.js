import React from 'react'

class Header  extends React.Component {
  render () {
    return(
      <div className="header">
        <img src="http://lorempixel.com/50/50" />
        <h1>Title</h1>
        <input type='text' placeholder='Seach' />
      </div>
    )
  }
}

export default Header ;
