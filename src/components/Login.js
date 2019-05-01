import React, { useState } from 'react'
import { Row, Col, Modal, ModalBody, ModalHeader, ModalFooter, Form, FormGroup, Input, Button } from 'reactstrap'

const Login = (props) => {
  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')
  const[rpassword, setRpassword] = useState('')
  const[display, setDisplay] = useState('none')


  const submit = (e) => {
    e.preventDefault()
    if(rpassword) {
      props.handleRegister({ username: username, password: password })
    }
    else {
      props.handleLogin({ username: username, password: password })
    }
    props.toggleLogin()
    setUsername('')
    setPassword('')
    setRpassword('')
  }
  const handleDisplay = (e) => {
    e.preventDefault()
    setDisplay(display === 'none' ? '' : 'none')
  }
  return(
    <Modal isOpen={props.isOpen} >
      <ModalHeader toggle={props.toggleLogin} >
        {display !== '' ? 'Sign in' : 'Sign Up'}
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={submit} id='Form' >
          <FormGroup>
            <Input
              type='text'
              id='email'
              name='username'
              placeholder='Username'
              value={username}
              required
              onChange={({ target }) => setUsername(target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              value={password}
              required
              onChange={({ target }) => setPassword(target.value)}
            />
          </FormGroup>
          <FormGroup style={{ display: display }} >
            <Input
              type='password'
              id='rpassword'
              name='rpassword'
              placeholder='Repeat Password'
              value={rpassword}
              onChange={({ target }) => setRpassword(target.value)}
              required={display === '' ? true : false }
            />
          </FormGroup>
          <Button block color='info' >{display === 'none' ? 'Login' : 'Create Account' }</Button>
        </Form>
        <div style={{ display: display === '' ? 'none' : '' }} className='division'>
          <div className='left'></div>
          <span>Or</span>
          <div className='right'></div>
          <Row>
            <Col>
              <a href='/' className="btn btn-block btn-social btn-facebook">
                <span className="fa fa-facebook fa-fw"></span>GitHub
              </a>
            </Col>
            <Col>
              <a href='/' className="btn btn-block btn-social btn-twitter">
                <span className="fa fa-twitter fa-fw"></span>Facebook
              </a>
            </Col>
          </Row>
        </div>
      </ModalBody>
      <ModalFooter>
        {display === 'none' ?
          <span>Looking to create an account? <a href="#Form" onClick={handleDisplay} > Create Account</a></span> :
          <span>Already have an account?<a href='#Form' onClick={handleDisplay} > Login</a></span>}
      </ModalFooter>
    </Modal>
  )
}

export default Login