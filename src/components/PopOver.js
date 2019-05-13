import React from 'react'
import { Popover, Button } from 'reactstrap'

const PopOver = ({ modalToggle, tooltipOpen, tooltipToggle, userLogout }) => (
  <Popover placement='bottom' isOpen={tooltipOpen} toggle={tooltipToggle} target='popoverNav' >
    <div>
      <Button onClick={modalToggle} color='white'>Change image</Button>
    </div>
    <Button  color='white' onClick={userLogout} >
      <span className='fa fa-sign-out fa-lg' ></span>
     Logout
    </Button>
  </Popover>
)

export default PopOver