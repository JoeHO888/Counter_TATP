import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter.js' ;
import Button from './Button.js';

class App extends Component {
	state = {group:new Array(3).fill(0),sum:0,size:3}
	
	addValue = (value)=>{this.setState({
		sum:this.state.sum+value
		})}
	
	modifyNumberOfCounters = ()=>{
		this.setState({sum:0,group:new Array(this.state.size).fill(<Counter onUpdate={this.addValue}/>)})
	}
	updateSize = (event) =>{
		this.setState({size:parseInt(event.target.value)})
	}
  render() {
    return (
	<div>
	{this.state.group.map(()=><Counter onUpdate={this.addValue}/>)}
	<p>Sum:{this.state.sum}</p>
	<input type="text" onChange={this.updateSize}></input>
	<button onClick={this.modifyNumberOfCounters}>Click Me</button>
	</div>
    );
  }
}

export default App;
