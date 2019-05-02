import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import EventRender from './EventRender'
import { Loading } from './Loading'

const Events = (props) => {
  if(!props.events.length && props.eventsLoading) {
    return(
      <Loading text='Wait a moment...' />
    )
  } else if(props.eventsErrMess) {
    return(
      null
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
          {props.eventsLoading ? <Loading text='Wait a moment while we load more events.' /> : null}
          {!props.events ? '' :
            <Button color='warning' block onClick={props.addMoreEvents} >More Events...</Button>
          }
        </Row>
      </Container>
    )
}


export default Events