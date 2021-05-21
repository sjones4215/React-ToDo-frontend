import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import {Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import HomePageModal from './home-page-modal'
import ListPageModal from './ListPageModal'
import HomePage from './home-page';



const Header = (props) => {

const [onHomePage, setHomePage] = useState(true)
const [onList, setOnList] = useState(true)
const [modalShow, setModalShow] = useState(false);
// custom hook to get the current pathname in React

const pathname = window.location.pathname

useEffect(() => {
  if(pathname !== "/" && "/home") {
    setHomePage(false)
  } else {
    setOnList(false)
  }
}, [])
  
return (
<Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/" >To-Do</Navbar.Brand>
    <Nav className="mr-auto">
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/lists">Lists</Nav.Link>
      {onList && <Button onClick={() => setModalShow(true)}>Add Card</Button>}
      {onHomePage && <Button onClick={() => setModalShow(true)}>Add List</Button>}
    </Nav>
    {onList && <ListPageModal show={modalShow} onHide={() => setModalShow(false)} />}
    {onHomePage && <HomePageModal show={modalShow} onHide={() => setModalShow(false)} />}
  </Navbar>
  )
};

export default Header;