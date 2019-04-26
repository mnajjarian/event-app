import React from 'react'
import {
  Col, Container, Row
} from 'reactstrap'

const Footer = props => {
  if(props.show) {
    return null
  }
return (
  <div >
    <Container>
    <Row  className="text-center mt-3 mb-3">
    <Col>
            <ul>
              <a className="btn btn-social-icon btn-facebook" href="/">
                <li className="fa fa-facebook fa-lg" />
              </a>
              <a className="btn btn-social-icon btn-twitter" href="/">
                <li className="fa fa-twitter fa-lg" />
              </a>
              <a className="btn btn-social-icon btn-instagram" href="/">
                <li className="fa fa-instagram fa-lg" />
              </a>
              <a className="btn btn-social-icon btn-pinterest" href="/">
                <li className="fa fa-pinterest fa-lg" />
              </a>
            </ul>
            </Col>
          </Row>
    </Container>
    </div>
)
}

export default Footer
