import React from 'react'

export const Loading = ({ text }) => {
  return(
    <div className="splash-screen" >
      {text}
      <div className='loading-dot' >.</div>
    </div>
  )
}