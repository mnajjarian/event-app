import React, { useState } from 'react'
import { Container, Row, Col, Card, CardBody, CardImg, Nav, TabContent } from 'reactstrap'
import eventImg from '../img/event.jpg'
import EventTabs from './EventTabs'
import EventContent from './EventContent'



const Event = ({ event }) => {
  const[activaTab, setActiveTab] = useState('fi')
  if(!event) return <div></div>

  const toggle = (tab) => activaTab !== tab ? setActiveTab(tab) : null

  const imgUrl = (e) => {
    if(e.length < 1) {
      return eventImg
    }
    return e.map( e => e.url)[0]
  }
  //const eventName = event.name.en ? event.name.en : event.name.fi
  const eventUrl = !event.info_url ? '/' : event.info_url.en ? event.info_url.en : event.info_url.fi
  //const eventUrl = !event.info_url ? '' : event.info_url.en ? event.info_url.en : event.info_url.fi
  //const description = !event.description ? '' : event.description.en ? event.description.en : event.description.fi

  //console.log(Object.keys(event.description))

  return (
    <Container >
      <Row className='justify-content-center' >
        <Col md={8} >
          <Card >
            <CardImg className='content-img' src={imgUrl(event.images)} />
            <CardBody>
              <Nav tabs justified >
                <EventTabs  event={event} toggle={toggle} activaTab={activaTab} />
              </Nav>
              <TabContent activeTab={activaTab}  >
                <EventContent event={event} />
              </TabContent>
            </CardBody>
            <a role='button' className='btn btn-outline-warning' target='_blank' rel='noopener noreferrer' href={eventUrl}  disabled={event.info_url === null} >Get The Ticket</a>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Event