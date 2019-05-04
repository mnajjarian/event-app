import React, { useState } from 'react'
import { Nav, Navbar, NavItem, NavLink, NavbarBrand, Button } from 'reactstrap'
import Login from './Login'
import PopoverNav from './PopoverNav'

const Header = (props) => {
  const [loginIsOpen, setLoginIsOpen] = useState(false)

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

  return (
    <div className='header' >
      <Navbar fixed='top' color='white' expand='md'  >
        <NavbarBrand href='/' ><span className='fas fa-archway fa-lg' ></span> eventincity</NavbarBrand>
        <Nav className='ml-auto' >
          <NavItem>
            <NavLink href='mailto:mnajarian@gmail.com' >
              <span className='fa fa-envelope fa-lg'></span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='https://github.com/mnajjarian' >
              <span className='fa fa-github fa-lg' ></span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='https://www.linkedin.com/in/mahdi-n-90aaa395/' >
              <span className='fa fa-linkedin fa-lg mr-4'></span>
            </NavLink>
          </NavItem>
          {!localStorage.getItem('token') ?
            <Button color='white' onClick={toggleLogin} className='ml-auto' ><span className='fa fa-sign-in fa-lg' ></span> Login</Button>
            :
            <PopoverNav userLogout={props.userLogout} uploadImage={props.uploadImage} />
          }
        </Nav>
      </Navbar>
      <Login toggleLogin={toggleLogin} isOpen={loginIsOpen} handleLogin={handleLogin} handleRegister={handleRegister} />
    </div>
  )
}

export default Header