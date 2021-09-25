import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {IconButton} from '@material-ui/core'
import {GiHamburgerMenu} from 'react-icons/gi'
import './style.css'

const Header = () => {
    const [showMenu, setshowMenu] = useState(false)

    const menu=()=>{
        setshowMenu(!showMenu)
    }
    return (
         <>
          <nav className="main-nav">
              <div className="logo">
                  <h2> 
                  <span>M</span>y
                  <span>G</span>ym
                  </h2>
              </div>
              <div className={showMenu ? 'menu-link mobile-menu-link' : 'menu-link'}>
                  <ul> 
                  <li><Link to="/">About</Link></li>
                  <li><Link to="/">Programs</Link></li>
                  <li><Link to="/">Subscriptions</Link></li>
                  <li><Link to="/">Schedule</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  </ul>
              </div>
               
          </nav>
         </>
    )
}

export default Header
