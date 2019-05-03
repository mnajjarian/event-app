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
        <Row  className=" mt-3 mb-3">
          <Col>
            <ul>
              <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/">
                <li className="fa fa-facebook fa-lg" />
              </a>
              <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/">
                <li className="fa fa-twitter fa-lg" />
              </a>
              <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/mahdi-n-90aaa395/">
                <li className="fa fa-linkedin fa-lg" />
              </a>
              <a className="btn btn-social-icon btn-github" href="https://github.com/mnajjarian/event-app-frontend">
                <li className="fa fa-github fa-lg" />
              </a>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
