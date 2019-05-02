import React, { useState } from 'react'
import { Navbar, NavbarBrand, Button } from 'reactstrap'
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
        <NavbarBrand href='/' >Events</NavbarBrand>
        {!localStorage.getItem('token') ?
          <Button color='white' onClick={toggleLogin} className='ml-auto' ><span className='fa fa-sign-in fa-lg' ></span> Login</Button>
          :
          <PopoverNav userLogout={props.userLogout} />
        }
      </Navbar>
      <Login toggleLogin={toggleLogin} isOpen={loginIsOpen} handleLogin={handleLogin} handleRegister={handleRegister} />
    </div>
  )
}

export default Header