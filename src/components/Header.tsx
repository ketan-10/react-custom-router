import React, { useState } from 'react'
import logo from '../logo.svg'
import Link from '../router/Link';

function Header(){


  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello Vite + React!</p>
      <Link path={"/"}> Go To Count</Link>
      <Link path={"/footer"}> Go TO Footer</Link>
    </div>
    )
  
} 

export default Header;