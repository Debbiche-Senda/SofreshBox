import React from 'react'
import { Redirect, Route,  Switch } from 'react-router-dom'
import HomePage from './components/Home/HomePage'
import Login from './components/LoginPage/Login'
import NavBar from './components/Navbar/NavBar'
import SignUp from './components/RegisterPage/SignUp'

const Client = () => {
    const loggedIn = false;

    return (
        <div className='container'>

       <NavBar/>
       
         <Switch>
            <Route exact path="/home-page"> 
             <HomePage/>
           </Route>
           <Route exact path="/login"> 
           {loggedIn ? <Redirect to="/home-page"/> : <Login/>}
           </Route>
           <Route exact path="/signup"> 
             <SignUp/>
           </Route>
         </Switch>
       
    
    
    </div>
    )
}

export default Client
