import React from 'react'
const baseUrl = 'https://helsinki-events.herokuapp.com/images/'

const Avatar = (props) => (
  <div>
    <img id='avatar' src={!props.user.photo ? `${baseUrl}${props.user.avatar}`: props.user.photo} alt='avatar' />
    <span id='popoverNav' > {localStorage.getItem('user')}</span>
  </div>
)

export default Avatar