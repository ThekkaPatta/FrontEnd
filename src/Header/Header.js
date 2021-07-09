import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import './style.css';

class Header extends Component{

  logout=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    window.location.href ='/login'
  }
    render (){
      if(localStorage.getItem('token')&& localStorage.getItem('userType')==='admin'){
        var menu=
        <>
        
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/">Add Work Category</Nav.Link>
      <Nav.Link href='/' onClick={this.logout}>Log Out</Nav.Link>
  </>
      }

      else if (localStorage.getItem('token')&& localStorage.getItem('userType')==='user'){
        var menu=
        <>
        
      <Nav.Link href="/home">Add Work</Nav.Link>
      <Nav.Link href="/book">Browse Worker</Nav.Link>
      <Nav.Link href="/book">See Bidding Requests</Nav.Link>
      <Nav.Link href='/login' onClick={this.logout}>Log Out</Nav.Link>
    
  </>

      }

      else {
        var menu=
        <>
        <Nav.Link href="/register">Register</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/aboutus">About Us</Nav.Link>
       
        </>
      }


        return(
          <div className="header">
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/home">ThekkaPatta</Navbar.Brand>
    <Nav className="mr-auto">
    {menu}
    </Nav>
  </Navbar>
  </div>
  
            
            
        )
    }
}
export default Header