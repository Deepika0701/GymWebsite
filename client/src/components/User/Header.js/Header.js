import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {IconButton} from '@material-ui/core'
import {GiHamburgerMenu} from 'react-icons/gi'
import './style.css'
 
const Header = () => {
     
    return (
         <>
           <nav>
               <div className="logo">
                   <Link to='/'>MyGym</Link>
               </div>
               <ul>
                   
                      <li> <Link to='/'>About</Link></li>
                      <li> <Link to='/'>Programs</Link></li>
                      <li> <Link to='/'>Subscriptions</Link></li>
                      <li> <Link to='/'>Schedule</Link></li>
                      <li> <Link to='/contact' >Contact</Link></li>
                   
               </ul>
           </nav>
           
         </>
    )
}

export default Header
