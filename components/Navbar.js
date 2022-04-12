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
          {/* <label htmlFor="searchbar">Search</label>
          <form onSubmit={submitHandler}>
          <input id="searchbar" type="text"></input>
          <button>Search</button>
          </form> */}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

