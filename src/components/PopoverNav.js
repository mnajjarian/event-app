import React, { useState } from 'react'
import { Popover, Button, Modal, ModalBody, Form, FormGroup, Input, InputGroup, Label, ModalHeader } from 'reactstrap'
const baseUrl = 'https://helsinki-events.herokuapp.com/images/'

const PopoverNav = (props) => {
  const [modalIsOpen, setModalOpen] = useState(false)
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const[imgFile, setImgfile] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    props.uploadImage(imgFile)
    modalToggle()
    tooltipToggle()
  }

  const modalToggle = () => setModalOpen(!modalIsOpen)
  const tooltipToggle = () => setTooltipOpen(!tooltipOpen)
  return(
    <div className='popover-nav' >
      <img id='avatar' src={!props.user.photo ? `${baseUrl}${props.user.avatar}`: props.user.photo} alt='avatar' />
      <span id='popoverNav' > {localStorage.getItem('user')}</span>

      <Popover placement='bottom' isOpen={tooltipOpen} toggle={tooltipToggle} target='popoverNav' >
        <div><Button onClick={modalToggle} color='white'>Change image</Button></div>
        <Button  color='white' onClick={props.userLogout} ><span className='fa fa-sign-out fa-lg' ></span> Logout</Button>
      </Popover>
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
    </div>
  )
}

export default PopoverNav