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
  const [winner, setWinner] = useState<string | null>(null);

  const handleReset = () => {
    setCells(Array(9).fill(null));
    setIsXNext(true);
    setIsHistoric(false);
    setHistoric([]);
    setWinner(null);
  };

  const selectedMove = (move: {
    cells: (string | null)[];
    player: boolean;
    moveNumber: number;
  }) => {
    setCells(move.cells);
    setIsXNext(move.player);
    setIsHistoric(move.moveNumber < historic.length - 1);
  };

  const verifyWin = (cells: (string | null)[]) => {
    const winningCombo = WINSTREAKS.find(streak => 
      cells[streak[0]] && 
      cells[streak[0]] === cells[streak[1]] && 
      cells[streak[0]] === cells[streak[2]]
    );
    
    if (winningCombo) {
      setIsHistoric(true);
      setWinner(cells[winningCombo[0]]);
      return cells[winningCombo[0]];
    }
    return null;
  }

  const handleMove = (index: number) => {
    if (cells[index] || isHistoric) return;
    
    const nextCells = cells.slice();
    nextCells[index] = isXNext ? 'X' : 'O';
    
    const winner = verifyWin(nextCells);
    
    const newHistoric = [...historic, {
      cells: [...nextCells],
      player: isXNext,
      moveNumber: historic.length
    }];
    
    setCells(nextCells);
    setIsXNext(!isXNext);
    setHistoric(newHistoric);
  };

  return (
    <div className="App">
      {winner && <div className='win'>Le joueur {winner} a gagné !</div>}
      <Gameboard 
        cells={cells} 
        isXNext={isXNext}
        isHistoric={isHistoric}
        onMove={handleMove}
        setCells={setCells}
        setIsXNext={setIsXNext}
      />
      <Historic moves={historic} selectedMove={selectedMove}/>
      <button className='cssreset' onClick={handleReset}> RESTART</button>
    </div>
  );
}



export default App;

