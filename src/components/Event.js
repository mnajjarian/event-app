import React, { useState } from 'react'
import { Container, Row, Col, Card, CardBody, CardImg, Nav, TabContent } from 'reactstrap'
import { imgUrl, eventUrl } from '../shared/urls'
import EventTabs from './EventTabs'
import EventContent from './EventContent'


const Event = ({ event }) => {
  const[activaTab, setActiveTab] = useState('fi')
  if(!event) return <div></div>

  const toggle = (tab) => activaTab !== tab ? setActiveTab(tab) : null

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
            <a role='button' className='btn btn-outline-warning' target='_blank' rel='noopener noreferrer' href={eventUrl(event)}  disabled={event.info_url === null} >Get The Ticket</a>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Event