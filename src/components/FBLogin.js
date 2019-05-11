import React from 'react'

class FBLogin extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId      : '2282755125278173',
        cookie     : true,
        xfbml      : true,
        version    : 'v2.10'
      })
      window.FB.getLoginStatus((response) => {
        this.statusChangeCallback(response)
      })
    }
    (function (d, s, id) {
      let js,
        fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s); js.id = id
      js.src = '//connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'facebook-jssdk'))
  }


  testAPI() {
    console.log('Fetching info from Facebook API ')
    window.FB.api('/me', (response) => {
      console.log(`Successful login for: ${response.name}`)
    })
  }

  statusChangeCallback(response) {
    console.log('statusChangeCallback')
    console.log(response)
    if (response.status === 'connected') {
      this.testAPI()
    } else if (response.status === 'not_authorized') {
      this.loginFB()
    } else {
      this.loginFB()
    }
  }

  loginFB = () => {
    this.props.toggleLogin()
    window.FB.login((response) => {
      if(response.status === 'connected') {
        this.props.loginWithFacebook(response.authResponse.accessToken)
      }
    })
  }

  render() {
    return(
      <div >
        <a role='button' href='#/'  onClick={this.loginFB} className="btn btn-social btn-facebook">
          <span className="fa fa-facebook fa-fw"></span>Facebook
        </a>
      </div>
    )
  }
}

export default FBLogin