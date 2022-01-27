import React from 'react'
import './Navbar.css'
import {Navbar,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigationbar = () => {
    return (
        <Navbar  expand="lg">
       
          

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className=" my-2 my-lg-0 navwraper"
              style={{ maxHeight: '225px',marginLeft:"auto"}}
              
            >
              <Link className='activepage'  to="/">Home</Link>
              <Link  to="/">Dental Services</Link>
              <Link  to="/">Reviews</Link>
              <Link  to="/">Blog</Link>
              <Link  to="/">Contact Us</Link>
              <Link  to="/login">Login</Link>
             
              {/* <Nav.Link className='mx-4 ' >About</Nav.Link>
              <Nav.Link className='mx-4  ' >Dental Services</Nav.Link>
              <Nav.Link className='mx-4 ' >Reviews</Nav.Link>
              <Nav.Link className='mx-4 ' >Blog</Nav.Link>
              <Nav.Link className='mx-4 ' >Contact Us</Nav.Link> */}
            
             
            </Nav>
          
          </Navbar.Collapse>
      
         
      </Navbar>
    )
}

export default Navigationbar
