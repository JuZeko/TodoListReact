import React, { Component } from 'react';
import './App.css';
import { Navbar,Nav, NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import NavBar from './NavBar';
import Middle from './Middle';
import Todo from './Todo';

function App() {
  return (
    <div className = "main">
       <Todo/>
   </div>
    );
}

export default App;
