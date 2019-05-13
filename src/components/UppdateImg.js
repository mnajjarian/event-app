import React from 'react'
import { Modal, ModalBody, ModalHeader, Form, InputGroup, Input, Label, FormGroup, Button } from 'reactstrap'

const UpdateImg = ({ modalToggle, handleSubmit, modalIsOpen, setImgfile }) => (
  <Modal isOpen={modalIsOpen} toggle={modalToggle} >
    <ModalBody >
      <ModalHeader toggle={modalToggle} ></ModalHeader>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <InputGroup>
          <Input className='custom-file-input' type='file' onChange={(e) => setImgfile(e.target.files[0])} accept='image/*' name='myFile' />
          <Label className='custom-file-label' >Choose file</Label>
        </InputGroup>
        <FormGroup>
          <Button type='submit' >Submit</Button>
        </FormGroup>
      </Form>
    </ModalBody>
  </Modal>
)

export default UpdateImg