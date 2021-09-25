import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Usermain from './components/User/Usermain'

const App = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Usermain}/>
            <Route exact path="/admin"/>
        </Switch>
        </BrowserRouter>
    )
}

export default App
