import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import { FiMenu } from 'react-icons/fi'
import './style.css'

const Header = () => {
    const [showMenu, setshowMenu] = useState(false)

    const menu = () => {
        setshowMenu(!showMenu)
    }
    return (
        <>
            <section className="header">
                <nav >

                    <Link to="/">FITNESS STUDIO</Link>
                    <div className={showMenu ? 'menu-link mobile-menu-link' : 'menu-link'}>
                        <div className="nav-links" id="nav-links">
                       < FiMenu/>
                            <ul>
                                <li><Link to="/">ABOUT</Link></li>
                                <li><Link to="/">PROGRAMS</Link></li>
                                <li><Link to="/">SUBSCRIPTIONS</Link></li>
                                <li><Link to="/">SCHEDULE</Link></li>
                                <li><Link to="/contact">CONTACT</Link></li>
                            </ul>
                        </div>
                    </div>

                </nav>
            </section>
        </>
    )
}

export default Header
