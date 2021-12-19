import React from 'react'
import {Navbar,Container,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'

const Navigationbar = () => {
    return (
        <Navbar   expand="lg">
       
          

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className=" my-2 my-lg-0"
              style={{ maxHeight: '225px',marginLeft:"auto"}}
              
            >
              <Nav.Link className='mx-4 ' href="#action1">Home</Nav.Link>
              <Nav.Link className='mx-4 ' href="#action2">About</Nav.Link>
              <Nav.Link className='mx-4 ' href="#action2">Dental Services</Nav.Link>
              <Nav.Link className='mx-4 ' href="#action2">Reviews</Nav.Link>
              <Nav.Link className='mx-4 text-white' href="#action2">Blog</Nav.Link>
              <Nav.Link className='mx-4 text-white' href="#action2">Contact Us</Nav.Link>
            
             
            </Nav>
          
          </Navbar.Collapse>
      
         
      </Navbar>
    )
}

export default Navigationbar
