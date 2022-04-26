import React from "react";

import navStyles from "./Navbar.module.css";
import Link from 'next/Link';


const Navbar = () => {
  


  return (
    <div className={navStyles.nav}>
      
      <ul>
        <li>
        <Link href='/'>Christian Wallpapers</Link>
        </li>
       <li>
       <Link href='instructions'>Instructions</Link>
       </li>
         
        
      </ul>
      
    </div>
  );
};

export default Navbar;

