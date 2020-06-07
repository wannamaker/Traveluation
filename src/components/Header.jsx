import React from 'react';
import '../css/Header.css';
import { Route, Link } from "react-router-dom"

export default function Header() {
  return (
    <div>
      <header>
        <nav>
          <div>
          
            <div className="title">
                <Link to="/" className="lnk">
                     <h3 className="home-tiltle">Traveluation</h3>   
                  </Link>
              </div>
              

              <div className="about">
              <Link to="/about" className="lnk">
                      <h4>About</h4>
                      </Link>
                 </div>
         </div> 
        </nav>
      </header>



    </div>
  )
}
