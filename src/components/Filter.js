import React from 'react'
import { Nav, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const ButtonDropdowns = () => (
  <NavItem>
    <Dropdown nav >
      <DropdownToggle caret color="primary">
           Text
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider/>
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </NavItem>
)
const Filter = () => {
  return(
    <Nav pills >
      <ButtonDropdowns />
      <ButtonDropdowns />
      <ButtonDropdowns />
    </Nav>
  )
}

export default Filter