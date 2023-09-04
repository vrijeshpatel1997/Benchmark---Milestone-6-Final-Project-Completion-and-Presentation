import React from 'react'
import { Link } from 'react-router-dom'

export default function Nabar() {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">


  <div className="container-fluid">
    <a className="navbar-brand" href="#">Milestone 4 </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <Link className="btn btn-outline-dark" to="/addproduct">
  Add Product
</Link>

  

  </div>
</nav>


    </div>
  )
}
