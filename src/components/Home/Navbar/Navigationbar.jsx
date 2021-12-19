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
              <Nav.Link className='mx-4 activepage' href="#action1"> <Link  to="/">Home</Link></Nav.Link>
              <Nav.Link className='mx-4 ' href="#action2">About</Nav.Link>
              <Nav.Link className='mx-4  ' href="#action2">Dental Services</Nav.Link>
              <Nav.Link className='mx-4 ' href="#action2">Reviews</Nav.Link>
              <Nav.Link className='mx-4 ' href="#action2">Blog</Nav.Link>
              <Nav.Link className='mx-4 ' href="#action2">Contact Us</Nav.Link>
            
             
            </Nav>
          
          </Navbar.Collapse>
      
         
      </Navbar>
    )
}

export default Navigationbar
