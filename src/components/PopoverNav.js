import React, { useState } from 'react'
import Avatar from './Avatar'
import PopOver from './PopOver'
import UpdateImg from './UppdateImg'


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
      <Avatar user={props.user} />
      <PopOver modalToggle={modalToggle} tooltipToggle={tooltipToggle} tooltipOpen={tooltipOpen} userLogout={props.userLogout} />
      <UpdateImg handleSubmit={handleSubmit} modalIsOpen={modalIsOpen} setImgfile={setImgfile} />
    </div>
  )
}

export default PopoverNav