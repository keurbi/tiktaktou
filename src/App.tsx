import React, { useState } from 'react';
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
  [2, 4, 6],
];

const [historic, setHistoric] = useState<{
  cells: (string | null)[];
  player: boolean;
  moveNumber: number;
}[]>([]);

const [cells, setCells] = useState<(string | null)[]>(Array(9).fill(null));
const [isXNext, setIsXNext] = useState<boolean>(true);
const [isHistoric, setIsHistoric] = useState(false);

const handleReset = () => {
  setCells(Array(9).fill(null));
  setIsXNext(true);
  setIsHistoric(false);
};

const selectedMove = (move: {
  cells: (string | null)[];
  player: boolean;
  moveNumber: number;
}) => {
  setCells(move.cells);
  setIsXNext(move.player);
  setIsHistoric(move.moveNumber < historic.length - 1);
}

  return (
    <div className="App">
      <Gamestate/>
      <Gameboard 
        cells={cells} 
        setCells={setCells}
        isXNext={isXNext}
        setIsXNext={setIsXNext}
        isHistoric={isHistoric}
      />
      <Historic moves={historic} selectedMove={selectedMove}/>
      <button className='cssreset' onClick={handleReset}> RESTART</button>
    </div>
  );
}export default App;