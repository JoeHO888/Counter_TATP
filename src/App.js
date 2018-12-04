import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter.js' ;

class App extends Component {
	state = {group:new Array(this.props.num).fill(0),sum:0}
	addValue = (value)=>{this.setState({
		sum:this.state.sum+value
		})}
  render() {
    return (
	<div>
	{this.state.group.map(()=><Counter onUpdate={this.addValue}/>)}
	<p>Sum:{this.state.sum}</p>
	</div>
    );
  }
}

export default App;
