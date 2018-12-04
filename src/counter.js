import React, { Component } from 'react';
import logo from './logo.svg';

class Counter extends Component {
	state = {number:0}
	addValue = ()=>{
		this.setState({number:this.state.number+1});
		{this.props.onUpdate(1)};
		}
	minusValue = ()=>{
		this.setState({number:this.state.number-1});
		{this.props.onUpdate(-1)}
		}
  render() {
    return (
	<div>
	<button onClick={this.addValue}>+</button> 
	{this.state.number}<button onClick={this.minusValue}>-</button>
	
	</div>
    );
  }
}

export default Counter;
