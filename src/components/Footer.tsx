import React, { useState } from 'react';
import Link from '../router/Link';

function Footer(){


  return (
    <div>
       <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>

        <Link path={"/header"}> Go TO Header</Link>
        <Link path={"/"}> Go To Count</Link>

    </div>)
  
} 

export default Footer;