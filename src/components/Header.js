import React, { useState } from 'react'
import {
  Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse, Button
} from 'reactstrap'
import Login from './Login'

const Header = (props) => {
  const [loginIsOpen, setLoginIsOpen] = useState(false)
  const [navIsOpen, setNavIsOpen] = useState(false)
  const toggleNav = () => setNavIsOpen(!navIsOpen)

  const handleLogin = (user) => {
    props.loginToAccount(user)
  }

  const handleRegister = (user) => {
    props.userRegister(user)
  }

  const toggleLogin = () => setLoginIsOpen(!loginIsOpen)
  if(!props.show) {
    return null
  }
  const toggleLogout = () => props.userLogout()
  return (
    <div className='header' >
      <Navbar fixed='top' color='white' expand='md'  >
        <div className='container' >
          <NavbarToggler onClick={toggleNav} />
          <NavbarBrand href='/' >Events</NavbarBrand>
          <Collapse isOpen={navIsOpen} navbar >
            <Nav navbar >
              <NavItem>
                <NavLink className='nav-link' href='/' >Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' href='/'>Archive</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' href='/'>Category</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' href='/'>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' href='/'>Contact</NavLink>
              </NavItem>
            </Nav>
            {!props.success ?
              <Button color='white' onClick={toggleLogin} className='ml-auto' ><span className='fa fa-sign-in fa-lg' ></span> Login</Button>
              : <Button color='white' onClick={toggleLogout}  className='ml-auto' ><span className='fa fa-sign-out fa-lg' ></span> Logout</Button>
            }
          </Collapse>
        </div>
      </Navbar>
      <Login toggleLogin={toggleLogin} isOpen={loginIsOpen} handleLogin={handleLogin} handleRegister={handleRegister} />
    </div>
  )
}

export default Header