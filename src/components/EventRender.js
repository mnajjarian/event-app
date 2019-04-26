import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'
import eventImg from '../img/event.jpg'
import Calendars from './Calendars';

const EventRender = ({ event, bookmark }) => {
  
  const imgUrl = (e) => {
    if(e.length < 1) {
      return eventImg
    }
    return e.map( e => e.url)[0]
  }
  const eventName = event.name.en ? event.name.en : event.name.fi
  //const eventUrl = event.info_url.en ? event.info_url.en : event.info_url.fi
  const eventUrl = !event.info_url ? '' : event.info_url.en ? event.info_url.en : event.info_url.fi
  const description = !event.short_description ? '' : event.short_description.en ? event.short_description.en : event.short_description.fi
  const eventDate = time => new Intl.DateTimeFormat('en-us', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(time))
  const clockTime = time => time.split('T')
  //console.log(event.location.position.coordinates)
  //const isFree = (e) => e.map(e => e.is_free)[0]
  //const eventName = (e) => e.map(e => e.en ? e.en : e.fi)
  //console.log(description.substring(0, 20))

  return(
    <Col md={4}  >
    <Card className='card-wrapper' >
      <Link to={`/events/${event.id}`} href={eventUrl} >
        <CardImg className='img-thumbnail' src={imgUrl(event.images)} />
      </Link>
      <span className='time' >{eventDate(event.start_time)} {clockTime(event.start_time)[1].substring(0, 5)}</span>
      <CardBody >
        <CardTitle >{!eventName ? 'event' : eventName.length < 30 ? eventName : `${eventName.substring(0, 25)}...`}</CardTitle>
        <CardText >{!description ? 'description...' : description.length < 80 ? description : `${description.substring(0, 80)}...`}</CardText>
        {/*{isFree(event.offers) ? <h3><Badge pill color='danger' >FREE</Badge></h3> : ''}*/}
      </CardBody>
      <Calendars event={event} />
      </Card>
    </Col>


  )
}

export default EventRender