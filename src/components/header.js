import React from 'react';
import {Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';


const HandleClick = () => {
    
}

const Header = () => {
    return (
<Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">To-Do</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link onCLick={HandleClick}>Home</Nav.Link>
      <Nav.Link href="#features">Lists</Nav.Link>
    </Nav>
  </Navbar>
    )
};

export default Header;