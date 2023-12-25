import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
export const Navbar = () => {
  const [menuopen,setmenu] = useState(false)
  window.addEventListener("scroll", ()=>{
    var nav = document.querySelector("nav")
    nav.classList.toggle("change",window.scrollY>0)
  })
  return(
    <nav>
    <Link to="/" className='title'>Andre Bryam</Link>
      <div className='menu' onClick={()=>{
          setmenu(!menuopen);
        }}>
        <i className='bx bx-menu'>&equiv;</i>
          <span></span>
          <span></span>
      </div>
      <ul className={menuopen ? 'open' : ''}>
        <li><NavLink to="/work">Work</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}
