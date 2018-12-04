import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter.js' ;
import Button from './Button.js';

class App extends Component {
	state = {group:new Array(3).fill(0).map(()=>{return {count:0,id:Math.random()}}),sum:0,size:3,number:0}
	
	modifyValue = (value,id)=>{this.setState({
		group:this.state.group.map((e)=>{
			if(e.id==id){
				return {count:e.count+value,id:e.id}
			}return {count:e.count,id:e.id}
		})
		})}
	
	modifyNumberOfCounters = ()=>{
		this.setState({sum:0,group:new Array(this.state.size).fill(0).map(()=>{return {count:0,id:Math.random()}})})
	}
	updateSize = (event) =>{
		this.setState({size:parseInt(event.target.value)})
	}
	
	
  render() {
    return (
	<div>
	{this.state.group.map((e)=>{
		return <Counter id={e.id} number={e.count} updateValue={this.modifyValue}/>
		})}
	<p>Sum:{this.state.group.map((e)=>e.count).reduce((total,num)=>total+num)}</p>
	<input type="text" onChange={this.updateSize}></input>
	<button onClick={this.modifyNumberOfCounters}>Click Me</button>
	</div>
    );
  }
}

export default App;
