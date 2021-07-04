import React, { useState } from 'react'
import Link from '../router/Link';  


function Count(){

  const [count, setCount] = useState(0)

  return (
    <div>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </button>
      <Link path={"/header"}> Go TO Header</Link>
      <Link path={"/footer"}> Go To Footer</Link>
      
    </div>)
  
} 

export default Count;