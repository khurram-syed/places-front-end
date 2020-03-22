import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'

import './MainNavigation.scss'
import MainHeader from './MainHeader'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'
import Backdrop from '../UIElements/Backdrop'


const MainNavigation = (props)=>{
   
   const [drawerIsOpen,setDrawerIsOpen] = useState(false)
   const openDrawerHandler=(e)=>{
        setDrawerIsOpen(true)
   }
   const closeDrawerHandler=(e)=>{
    setDrawerIsOpen(false)
   }
   return <React.Fragment>
           {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
           { drawerIsOpen ?
               <SideDrawer show={drawerIsOpen}>
                    <nav className="main-navigation__drawer-nav">
                        <NavLinks />
                    </nav>
                </SideDrawer>
               : <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/">Your Places</Link>  
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>

                </MainHeader>
           }     
         </React.Fragment>   
}
export default MainNavigation