import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import Form from './Form'
import Table from './Table'


const Navbar = () => {
  return (
    <div>
      <ul>
        
            <Link to="/">Home</Link>
            <Link to="./form">Form</Link>
            <Link to="./table">Table</Link>


        
      </ul>
    </div>
  )
}

export default Navbar
