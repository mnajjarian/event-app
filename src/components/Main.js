import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchEvents, fetchMoreEvents } from '../redux/actionCreators'
import Header from './Header'
import Footer from './Footer'
import Events from './Events'
import Event from './Event';

const mapStateToProps = (state) => {
  return {
    events: state.events
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    fetchMoreEvents: (meta) => dispatch(fetchMoreEvents(meta))
  }
}
class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: true,
      isHide: false
    }
  }
  hideBar = () => {
    const { isHide } = this.state.isHide
    window.scrollY > this.prev ?
    !isHide && this.setState({ isHide: false }) :
    !isHide && this.setState({ isHide: true })

    this.prev = window.scrollY
  }

  addMoreEvents = () =>  this.props.events.meta.next ?
   this.props.fetchMoreEvents(this.props.events.meta.next) : null

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
        <div>
          <Header show={true} />
          <Switch>
            <Route exact path='/' component={() => <Events
              addMoreEvents={this.addMoreEvents}
              events={this.props.events.events}
              eventsLoading={this.props.events.isLoading}
              moreEventsLoading={this.props.events.isMoreLoading}
              eventsErrMess={this.props.events.errMess}
              bookmark={this.props.events.bookmark}
            />} />
            <Route exact path='/events/:id' component={({match}) => <Event event={this.props.events.events.filter(e => e.id === match.params.id)[0]} />} />
          </Switch>
          <Footer show={this.state.isHide} toggleModal={this.toggleModal} />
        </div>
      )
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)