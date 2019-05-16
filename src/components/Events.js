import React from 'react'
import { Container, Row, Button } from 'reactstrap'
import EventRender from './EventRender'
import { Loading } from './Loading'

const Events = (props) => {
  return(
    <Container >
      <Row>
        {props.events.map(e =>
          <EventRender key={e.id} event={e}/>
        )}
        {props.eventsLoading ? <Loading text='Wait a moment while we load more events.' /> : null}
        {!props.events.length ? '' :
          <Button color='warning' block onClick={props.addMoreEvents} >More Events...</Button>
        }
      </Row>
    </Container>
  )
}


export default Events