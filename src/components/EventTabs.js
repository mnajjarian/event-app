import React from 'react'
import classnames from 'classnames'
import { NavItem, NavLink } from 'reactstrap'

const EventTabs = ({ event, toggle, activaTab }) => {
  if(!event.description) return <div>{event.name.fi}</div>
  const keys = Object.keys(event.description)
  return(
    keys.map(e =>
      <NavItem key={e}>
        <NavLink className={classnames({ active: activaTab === e })}
          onClick={() => toggle(e)} >{e}</NavLink>
      </NavItem>
    )
  )
}

export default EventTabs