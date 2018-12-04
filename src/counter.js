import React, { Component } from 'react';
import logo from './logo.svg';

class Counter extends Component {
	addValue = ()=>{
		this.props.updateValue(1,this.props.id);
		}
	minusValue = ()=>{
		this.props.updateValue(-1,this.props.id);
		}
  render() {
    return (
	<div>
	<button onClick={this.addValue}>+</button> 
	{this.props.number}<button onClick={this.minusValue}>-</button>
	
	</div>
    );
  }
}

export default Counter;
