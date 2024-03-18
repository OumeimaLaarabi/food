import React from 'react'
import {Link} from "react-router-dom";

export const Navbar = () => {
  return <nav>
    <ul>
        <li>
             <Link to="/home" >Home</Link>
        </li>
        <li> 
            <Link >Services</Link>
        </li>
         <li>
            <Link >Community</Link>
            </li>
          <li>
            <Link >About</Link>
            </li> 
          <li>
            <Link >Login</Link> 
            </li>    
                               
    </ul>
  </nav>
}
