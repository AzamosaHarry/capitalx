import './Header.css'
import logoblack from './CAPITAL X BLACK LOGO.png'
import logowhite from './CAPITAL X WHITE LOGO.png'
import { Link, useNavigate } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { RiLeafFill } from 'react-icons/ri'
import { SlArrowDown } from 'react-icons/sl'
import { useState } from 'react'
import { NavHashLink } from 'react-router-hash-link'

function Header () {
    const navigate = useNavigate()
    const [menu, setMenu] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    return (
        <div className='header transparent'>      
        <Link to='/'><img src={logowhite} className='header_logo'/></Link>
        <ul className='header_nav'>
          <li>
            <Link to='/about' className='header_nav_list'>About us</Link>
          </li>
          <li className='dropdown' onClick={() => {setDropdown(!dropdown)}}>    
              <Link to='/career' className='header_nav_list'>Career</Link>
          </li>
          <li><NavHashLink
              to="/#with-hash-contact"
              className='header_nav_list'
              >Contact us</NavHashLink></li>
        </ul>

        <FiMenu className='home_menu' onClick={() => {setMenu(true)}}/>
        <div className={menu? 'home_sidebar_true' : 'home_sidebar'}>
            <div style={{display: 'flex', alignItems: 'center'}}>
            <Link to='/'><img src={logowhite} className='header_logo2'/></Link>
              <AiOutlineClose className='home_sidebar_close' onClick={() => {setMenu(false)}}/>
            </div>
            <ul className='home_sidebar_navbar'>
              <li><Link
                to='/about'
                className='home_sidebar_link'
                >About us</Link></li>
                <li><Link
                to='/career'
                className='home_sidebar_link'
                >Career</Link></li>
              <li><NavHashLink
              to="/#with-hash-contact"
              className='home_sidebar_link'
              >Contact us</NavHashLink></li>
            </ul>
        </div>
    </div>
    )   
}

export default Header;