import React, {useState } from 'react'
import logo from '../images/logo3.png'
import {FiMenu} from 'react-icons/fi'
import {NavbarStyles} from '../components/Styles/NavbarStyles'
import DropdownMenu from './DropdownMenu'

const Navbar = () => {
  const[drop,setDrop] = useState(false)
  
  return (
    <NavbarStyles>
      <div className="container">
        <div className="controller">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h3>Crypto<span>Mania</span></h3>
          </div>
          <div className="menu" onClick={()=>setDrop(!drop)}>
            <span><FiMenu fontSize={29}/></span>
          </div>
        </div>
        <div className="dropdown">
          {drop && <DropdownMenu show = {setDrop} />}
        </div>
      </div>
      
      
      
    </NavbarStyles>
  )
}

export default Navbar