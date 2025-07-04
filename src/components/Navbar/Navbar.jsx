import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Usm</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/home"}>Home</Link>
        </li>
         <li className="nav-item">
           <Link className="nav-link" to={"/details"}> details</Link>
        </li>
         <li className="nav-item">
           <Link className="nav-link" to={"/creat"}>Creat</Link>
        </li>

        
      </ul>
      
    </div>
  </div>
</nav>

  )
}

export default Navbar;