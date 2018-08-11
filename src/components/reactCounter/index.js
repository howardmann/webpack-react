import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './counter.js'

const App = () => (
  <div>
    <Counter/>
  </div>
)

ReactDOM.render(
  <App/>,
  document.getElementById('react-counter')
)