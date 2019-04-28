import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import Filter from './Filter'
import EventRender from './EventRender'
import { Loading } from './Loading'

const Events = (props) => {
  if(props.eventsLoading) {
    return(
      <Loading />
    )
  } else if(props.eventsErrMess) {
    return(
      <h4>{props.eventsErrMess}</h4>
    )
  } else
    return(
      <Container>
        <Row>
          <Col>

          </Col>
        </Row>
        <Row>
          {props.events.map(e =>
            <EventRender key={e.id} event={e} />
          )}
          {props.moreEventsLoading ? <Loading text='Wait a moment while we load your app.' /> : null}
          <Button color='warning' block onClick={props.addMoreEvents} >More Events...</Button>
        </Row>
      </Container>
    )
}


export default Events