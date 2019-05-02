import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Notification = ({ errMess }) => {
  if(!errMess) return <div></div>
  const message = errMess.split(',')
  return(
    <div className='notify-wrapper' >
      <Container className='align-items-center'>
        <Row  className='justify-content-center'>
          <Col>
            <h1>{message[0]}</h1>
            <h2>{message[1]}</h2>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Notification