import React, { Component } from 'react';
import './Middle.css';
import { Navbar,Nav, NavDropdown,Form,FormControl,Button } from 'react-bootstrap';

class Todo extends Component {


	constructor(props) {
		super(props)
		this.state = { todoList: ['First', 'Second', 'Third'], value:" " ,colors: ['red', 'gold', '']}   // Array of things 
		this.handleChange = this.handleChange.bind(this);	// everytime value in input changes we update value in this state
		this.handleSubmit = this.handleSubmit.bind(this);  // then you press submit button we do certain action with data which was written in input
	}

	delete(name){ // pass value we want to delete
		this.setState({todoList: this.state.todoList.filter(function(person) {  // function which goes for all values and if we find same value as in name we delete that element
			return person !== name
		})});
	}


	handleChange(event) {    this.setState({value: event.target.value});  } // update value everytime we change something in input


	handleSubmit(event){
		event.preventDefault();
		this.setState(previousState => ({
			todoList: [...previousState.todoList, this.state.value]  // when submit we add value to a list 
		}));


	}

	
	showMessage(i) {
		return   '#'+Math.floor(Math.random()*16777215).toString(16)	}

		render() {





			return <div> <div  className="todo"> {this.state.todoList.map((item,i )=>(  <ul key={i} style={{background: this.showMessage()}} > <li > {item}  </li>
				<button  className="btn btn-warning" onClick={() => this.delete(item)}> Delete </button> </ul> ))}  
		{/* this.state.todoList.map do certain action for each element in array so we have arrow function which pass argument and we render every value in todoList + button */}

		</div>
		<div>
		<form onSubmit={this.handleSubmit} style={{textAlign: 'center'}}>  
		<label>
		<input type="text" name="name" input = {this.state.value}  onChange={this.handleChange} />
		</label>
		<input type="submit" value="add"  class="btn btn-success"/>
		</form>
		</div>
		</div>
	}};


	export default Todo;

