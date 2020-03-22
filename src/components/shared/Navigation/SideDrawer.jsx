import React from 'react'
import ReactDom from 'react-dom'
import './SideDrawer.scss'
import {CSSTransition} from 'react-transition-group'

const SideDrawer = props =>{
    const content =
    <CSSTransition in={props.show} 
                   timeout={1000} 
                   classNames="slide-in-left"
                   mountOnEnter
                   unmountOnExit>
                   <aside className="side-drawer">
                        {props.children}
                  </aside>
    </CSSTransition>    
    return ReactDom.createPortal(content,document.getElementById('drawer-hook'))
}
export default SideDrawer