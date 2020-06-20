import React, { Component } from 'react';
import './App.css';
import { Navbar,Nav, NavDropdown,Form,FormControl,Button } from 'react-bootstrap';

class NavBar extends Component {


  constructor(props) {
    super(props)

  }
  


  render() {

    return  <nav class="nav justify-content-center">
    <a class="nav-link active" href="#">First</a>
    <a class="nav-link" href="#">Second</a>
    <a class="nav-link" href="#">Third</a>
    </nav>
  }
}


export default NavBar

