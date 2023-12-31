import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
export const Navbar = () => {
  const [menuopen,setmenu] = useState(false)
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return(
    <nav>
    <Link to="/" className='title' onClick={handleScrollToTop}>Andre Bryam</Link>
      <div className='menu' onClick={()=>{
          setmenu(!menuopen);
        }}>
        <i className='bx bx-menu'>&equiv;</i>
          <span></span>
          <span></span>
      </div>
      <ul className={menuopen ? 'open' : ''}>
        <li><NavLink to="/work" onClick={handleScrollToTop}>Work</NavLink></li>
        <li><NavLink to="/contact" onClick={handleScrollToTop}>Contact</NavLink></li>
      </ul>
    </nav>
  )
}
