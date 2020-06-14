import React from 'react';
import logo from './NatsChameleon.jpeg';
import './App.css';
import Game from './tic-tac-toe/Game.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lawrence's React Website.
        </p>
        <iframe title="composition" width="560" height="315" src="https://www.youtube.com/embed/DCn5dHVd8Rk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </header>
      <hr/>
      <div>
        <h2><a href="https://reactjs.org/tutorial/tutorial.html#wrapping-up">Tic tac toe tutorial</a></h2>
          <div>
            <Game />
          </div>
      </div>
    </div>
  );
}

export default App;
