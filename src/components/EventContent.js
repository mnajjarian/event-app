import React from 'react'
import { Row, Col, CardTitle, TabPane } from 'reactstrap'

const EventContent = ({ event }) => {
  console.log(event)
  if(!event.description) return <div>Information not provided yet</div>
  const keys = Object.keys(event.description)

  const eventName = event.name.en ? event.name.en : event.name.fi
  return (
    keys.map(e =>
      <TabPane key={e} tabId={e} >
        <Row>
          <Col>
            <CardTitle>{eventName}</CardTitle>
            <div dangerouslySetInnerHTML={{ __html: event.description[e] }}></div>
          </Col>
        </Row>
      </TabPane>
    )
  )
}

export default EventContent