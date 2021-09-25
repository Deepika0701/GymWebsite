import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Header from './Header.js/Header'
import Contact from './Contact/Contact'

const Usermain = () => {
    return (
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route path='/contact' exact component={Contact} />
        </Switch>
        </BrowserRouter>
    )
}

export default Usermain
