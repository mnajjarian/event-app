import React from 'react'
import {
  Col, Container, Row, InputGroup, Input, InputGroupAddon, Button, NavbarBrand
} from 'reactstrap'

const Footer = props => {
  if(props.show) {
    return null
  }
  return (
    <div className='footer-wrapper ' >
      <Container >
        <Row  className="offset-1 mt-3 mb-3 justify-content-center">
          <Col   md={5} >
            <NavbarBrand href='/' ><span className='fas fa-archway fa-lg' ></span> heleventcity</NavbarBrand>
          </Col>
          <Col md={6} >
            <h5>Get the weekly newsletter, packed full of our latest Events, delivered straight to your inbox.</h5>
            <InputGroup>
              <Input placeholder='Your Email Address' />
              <InputGroupAddon addonType='prepend' >
                <Button color='primary' >Join Newsletter</Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
