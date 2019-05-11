import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchEvents, loginToAccount, userRegister, userLogout, uploadImage, loginWithFacebook } from '../redux/actionCreators'
import Header from './Header'
import Footer from './Footer'
import Events from './Events'
import Event from './Event'
import Notification from './Notification'

const mapStateToProps = (state) => {
  return {
    events: state.events,
    users: state.users,
    messages: state.messages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    loginToAccount: (user) => dispatch(loginToAccount(user)),
    userRegister: (user) => dispatch(userRegister(user)),
    userLogout: () => dispatch(userLogout()),
    uploadImage: (imgFile) => dispatch(uploadImage(imgFile)),
    loginWithFacebook: (data) => dispatch(loginWithFacebook(data))
  }
}
class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: true,
      isLogin: false
    }
  }

  addMoreEvents = () => this.props.fetchEvents()

  componentDidMount() {
    this.props.fetchEvents()
  }

    toggleModal = () => {
      this.setState({
        modalIsOpen: !this.state.modalIsOpen
      })
    }
    render() {
      return(
        <div className='wrapper' >
          <Header
            show={true}
            loginToAccount={this.props.loginToAccount}
            userRegister={this.props.userRegister}
            users={this.props.users}
            userLogout={this.props.userLogout}
            uploadImage={this.props.uploadImage}
            loginWithFacebook={this.props.loginWithFacebook}
          />
          <Notification errMess={this.props.messages.errMess} />
          <Switch>
            <Route exact path='/' component={() => <Events
              addMoreEvents={this.addMoreEvents}
              events={this.props.events.events}
              eventsLoading={this.props.events.isLoading}
              eventsErrMess={this.props.messages.errMess}
            />} />
            <Route exact path='/events/:id' component={({ match }) => <Event event={this.props.events.events.filter(e => e.id === match.params.id)[0]} />} />
          </Switch>
          <Footer toggleModal={this.toggleModal} />
        </div>
      )
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)