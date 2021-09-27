import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Header from './Header.js/Header'
import Contact from './Contact/Contact'
import About from './About/About'
import Footer from './Footer/Footer'


const Usermain = () => {
    return (
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route path='/' exact component={About}/>
            <Route path='/contact' exact component={Contact} />
        </Switch>
        <Footer/>
        </BrowserRouter>
    )
}

export default Usermain
