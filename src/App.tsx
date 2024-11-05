import React from 'react';
import logo from './logo.svg';
import './App.css';
import Gamestate from './components/Gamestate/Gamestate';
import Gameboard from './components/Gameboard/Gameboard';
import Historic from './components/Historic/Historic';

function App() {

  /*
    +---+---+---+
    | 0 | 1 | 2 |
    +---+---+---+
    | 3 | 4 | 5 |
    +---+---+---+
    | 6 | 7 | 8 |
    +---+---+---+
*/

const WINSTREAKS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],]

  return (
    <div className="App">
      <Gamestate/>
      <Gameboard/>
      <Historic/>
      <button></button>
    </div>
  );
}

export default App;
