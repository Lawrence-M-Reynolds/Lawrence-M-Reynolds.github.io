import React from 'react';
import logo from './NatsChameleon.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lawrence's React Website.
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/DCn5dHVd8Rk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </header>
    </div>
  );
}

export default App;
