import React, { PropTypes } from 'react'

class Login extends React.Component {
  render () {
    return(
      <section>
      <input id="userName" type='text' placeholder="User Name" />
      <input id="password" type='text' placeholder="Password" />
      <button id="submitLogin"> Login </button>
      </section>
    )
  }
}

export default Login;
