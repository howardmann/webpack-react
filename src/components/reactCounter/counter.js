import React from 'react';
import counterReducer from './reducer';
import {makeDispatch} from '../hoc';

class Counter extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      number: 0
    }
  }
  dispatch = makeDispatch(this, counterReducer)
  decrement = () => this.dispatch({type:'DECREMENT'})
  increment = () => this.dispatch({type:'INCREMENT'})
  double = () => this.dispatch({type:'DOUBLE'})
  random = () => this.dispatch({type:'RANDOM'})
  reset = () => this.dispatch({type:'RESET'})

  render(){
    return (
     <div>
      <p>Counter with Vanilla Reducer</p>
      <button onClick={this.random}> ? </button>
      <button onClick={this.decrement}> - </button>
      
      <span>{this.state.number}</span>
      
      <button onClick={this.increment}> + </button>
      <button onClick={this.double}> x2 </button>
      <br/>
      <button onClick={this.reset}> Reset </button>
     </div>
    )
  }
}

export default Counter