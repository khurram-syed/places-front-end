import React,{ useContext } from 'react'
import {NavLink} from 'react-router-dom'
import './NavLinks.scss'
import {AuthContext} from '../context/Auth.context'
import Button from '../FormElements/Button'

const NavLinks = props =>{
   const authContext = useContext(AuthContext)
   console.log('***NavLinks - authContext.isLoggedIn :',authContext.isLoggedIn)
  return  <ul className="nav-links">
        <li>
            <NavLink to="/">ALL USERS</NavLink> 
        </li>
        { authContext.isLoggedIn && 
         <React.Fragment>
            <li>
                <NavLink to="/u1/places">MY PLACES</NavLink> 
            </li>
            <li>
                <NavLink to="/places/new">ADD PLACE</NavLink> 
            </li>
         </React.Fragment>   
        }
        { !authContext.isLoggedIn &&
        <li>
            <NavLink to="/auth">AUTHENTICATE</NavLink> 
        </li>
        }
       { authContext.isLoggedIn &&
        <li>
            <Button onClick={authContext.logout}>LOGOUT</Button> 
        </li>
        }
    </ul>
}
export default NavLinks