import React, { Component } from 'react';
import logo from './logo.svg';

class Button extends Component {
	
  render() {
    return (
	<button onUpdate={this.modifyNumberOfCounters}>Click Me</button>
    );
  }
}

export default Button;
