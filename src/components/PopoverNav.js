import React, { useState } from 'react'
import { Popover, Button } from 'reactstrap'
import avatar from '../img/avatar.png'

const PopoverNav = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false)

  return(
    <div className='popover-nav' >
      <img id='avatar' src={avatar} alt='avatar' />
      <span id='popoverNav' > {localStorage.getItem('user')}</span>

      <Popover placement='bottom' isOpen={tooltipOpen} toggle={() => setTooltipOpen(!tooltipOpen)} target='popoverNav' >
        <Button  color='white' onClick={props.userLogout} ><span className='fa fa-sign-out fa-lg' ></span> Logout</Button>
      </Popover>
    </div>
  )
}

export default PopoverNav