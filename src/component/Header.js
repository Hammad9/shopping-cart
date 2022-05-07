import React from 'react'
import { Button,Navbar, Container, FormControl,Dropdown,Nav, Badge} from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa'
function Header() {
  return (
    <Navbar bg="light"  >
    <Container>
      <Navbar.Brand href="/">Shopping Cart</Navbar.Brand>
      <Navbar.Text className="search">
            <FormControl 
                style={{width:500}}
                placeholder="Search Product"
                className="m-auto"
            />
            </Navbar.Text>
            <Nav>
            <Dropdown alignLeft>
            <Dropdown.Toggle variant="success">
            <FaShoppingCart color="white" size="25px" />
                <Badge>{10}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{minWidth:370}}>
                <span style={{padding:10}}>Cart is Empty!</span>
            </Dropdown.Menu>
            </Dropdown>
            </Nav>
    </Container>
  </Navbar>
  )
}

export default Header