import React from 'react';
import '../css/Header.css';
import { Route, Link } from "react-router-dom"

export default function Header() {
  return (
    <div>
      <header>
        <nav>
          <h2 className="home-tiltle">
            <Link to="/">
              Traveluation
              </Link>
            <span>
            <Link to="/about">
              About
              </Link>
              </span>
          </h2>
        </nav>
      </header>



    </div>
  )
}
