import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'
import { imgUrl, eventUrl, shortDescription, eventDate } from '../shared/urls'
import Calendars from './Calendars'

const EventRender = ({ event }) => {
  const eventName = event.name.en ? event.name.en : event.name.fi
  const description = shortDescription(event)

  const clockTime = time => time.split('T')


  return(
    <Col md={4}  >
      <Card className='card-wrapper' >
        <Link to={`/events/${event.id}`} href={eventUrl(event)} >
          <CardImg className='img-thumbnail' src={imgUrl(event.images)} />
        </Link>
        <span className='time' >{eventDate(event.start_time)} {clockTime(event.start_time)[1].substring(0, 5)}</span>
        <CardBody >
          <CardTitle >{!eventName ? 'event' : eventName.length < 30 ? eventName : `${eventName.substring(0, 25)}...`}</CardTitle>
          <CardText >{!description ? 'description...' : description.length < 80 ? description : `${description.substring(0, 80)}...`}</CardText>
        </CardBody>
        <Calendars event={event} />
      </Card>
    </Col>
  )
}

export default EventRender