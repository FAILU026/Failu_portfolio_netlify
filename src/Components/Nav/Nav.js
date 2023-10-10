import React from 'react'
import  './nav.css'
import { Link } from 'react-scroll';
import menu from '../Nav/menu.png';
import { useState } from 'react';


const Nav = () => {
  const [showMenu, setShowMenu]= useState(false);
  return (
    <nav className='navbar'>
        <h3 className='portfolio'>Portfolio.</h3>
    <div className='navMenu'>
        <Link activeClass='active'to='intro' spy={true} smooth={true} offset={-100} duration={500} className="navList">Home</Link>
        <Link activeClass='active'to='about' spy={true} smooth={true} offset={-40} duration={500} className="navList">About</Link>
        <Link activeClass='active'to='skill' spy={true} smooth={true} offset={-50} duration={500} className="navList">Skill</Link>
        <Link activeClass='active'to='service' spy={true} smooth={true} offset={-50} duration={500} className="navList">Service</Link>
    
    </div>
    <button className='contactBtn' onClick={() =>{
      document.getElementById('contact').scrollIntoView({behavior:'smooth'});}}>Contact  Me</button>
    
    
    <img src={menu} alt="menu" className='menuImg' onClick={()=>setShowMenu(!showMenu)} />
    <div className='nMenu' style={{display: showMenu? 'flex':'none'}}>

        <Link activeClass='active'to='intro' spy={true} smooth={true} offset={-100} duration={500} className="List" onClick={()=>setShowMenu(!showMenu)}>Home</Link>
        <Link activeClass='active'to='about' spy={true} smooth={true} offset={-40} duration={500} className="List" onClick={()=>setShowMenu(!showMenu)}>About</Link>
        <Link activeClass='active'to='skill' spy={true} smooth={true} offset={-50} duration={500} className="List" onClick={()=>setShowMenu(!showMenu)}>Skill</Link>
        <Link activeClass='active'to='service' spy={true} smooth={true} offset={-50} duration={500} className="List" onClick={()=>setShowMenu(!showMenu)}>Service</Link>
        <Link activeClass='active'to='contact' spy={true} smooth={true} offset={-50} duration={500} className="List" onClick={()=>setShowMenu(!showMenu)}>Contact</Link>
    
        </div>
    </nav>
  )
}

export default Nav