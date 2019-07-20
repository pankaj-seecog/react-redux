import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Counter from './Counter';
let iniState = {
  count : 0
}

let rootreducer = (state=iniState,action)=>{
if(action.type == "INC"){
return {
  count : state.count+1
}
}
if(action.type == "DEC"){
  return {
  count : state.count-1
}
}
if(action.type == "ADD"){
  return {
  count : state.count+action.val
}
}
return state;
}

let store = createStore(rootreducer);


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<Provider store = {store}><Counter /></Provider>, document.getElementById('root'));
