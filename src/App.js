// import logo from './logo.svg';
// import './App.css';

import React from 'react'
import { Link } from 'react-router-dom'

const  App=()=>{
   
    return (
    <nav className="navbar fixed-top navbar-expand-lg  bg-info"><div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{color:"white"}}>NewsTeller</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Home" style={{color:"white"}}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{color:"white"}}>About</Link>
            </li>
           <li className="nav-item">
              <Link className="nav-link" to="/business" style={{color:"white"}}>business</Link>
            </li>
           <li className="nav-item">
              <Link className="nav-link" to="/entertainment" style={{color:"white"}}>entertainment</Link>
            </li>
           <li className="nav-item">
              <Link className="nav-link" to="/general" style={{color:"white"}}>general</Link>
            </li>
           <li className="nav-item">
              <Link className="nav-link" to="/health" style={{color:"white"}}>health</Link>
            </li>
           <li className="nav-item">
              <Link className="nav-link" to="/science" style={{color:"white"}}>science</Link>
            </li>
           <li className="nav-item">
              <Link className="nav-link" to="/sports" style={{color:"white"}}>sports</Link>
            </li>
           <li className="nav-item">
              <Link className="nav-link" to="/technology" style={{color:"white"}}>technology</Link>
            </li>
          </ul>
          
        </div>
        </div>
        </nav>
    )
  
  
}
export default App
