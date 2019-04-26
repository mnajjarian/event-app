import React, { useState } from 'react'
import { Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input, Button } from 'reactstrap'

const Login = (props) => {
  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')

  const submit = (e) => {
    e.preventDefault()
    console.log(username, password)
    props.toggleLogin()
    setUsername('')
    setPassword('')
  }
  return(
    <Modal isOpen={props.isOpen} >
      <ModalHeader toggle={props.toggleLogin} >Login</ModalHeader>
      <ModalBody>
        <Form onSubmit={submit} >
          <FormGroup>
            <Label htmlFor='username' >Username</Label>
            <Input
              type='text'
              id='username'
              name='username'
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='password' >Password</Label>
            <Input
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </FormGroup>
          <Button color='info' >Login</Button>
        </Form>
      </ModalBody>
    </Modal>
  )
}

export default Login