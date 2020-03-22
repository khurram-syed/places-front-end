import React from 'react'
import ReactDom from 'react-dom'
import './Backdrop.scss'

const Backdrop = props =>{
    const content = <div className="backdrop" onClick={props.onClick}></div>
    return ReactDom.createPortal(content,document.getElementById('drawer-hook'))
}
export default Backdrop