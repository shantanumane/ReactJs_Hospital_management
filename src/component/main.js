import React from 'react'
import Home from './home';
import Contact from './contact';
import Services from './services';
import Appointment from './Appointment'
import {Switch,Route} from 'react-router-dom'
import Login from './Login'
import Read from './Read'
const Main=()=>{
    return(
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route  path='/contact' component={Contact}/>
        <Route  path='/services' component={Services}/>
        <Route  path='/Appointment' component={Appointment}/>
        <Route path='/Login' component={Login} />
        <Route path='/Read' component={Read} />

    </Switch>
    )
}


export default Main;