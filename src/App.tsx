import React, { useState } from 'react';
import './App.css';
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
    setWinner(null);//reset de tout
  };

  const selectedMove = (move: {
    cells: (string | null)[];
    player: boolean;
    moveNumber: number;
  }) => {
  setCells(move.cells);//remet l'état du board à ce moment là
  setIsXNext(!move.player);//remet le joueur qui devait jouer à ce moment là
  setIsHistoric(move.moveNumber < historic.length - 1);// Active mode historique
  };

  const verifyWin = (cells: (string | null)[]) => {
    const winningCombo = WINSTREAKS.find(streak => 
      cells[streak[0]] && 
      cells[streak[0]] === cells[streak[1]] && 
      cells[streak[0]] === cells[streak[2]] //vérif si première case remplie et si les trois se correspondent
    );
    
    if (winningCombo) {
      setIsHistoric(true); // bloque le jeu, je vais pas m'embêter à faire un autre fonction quand même
      setWinner(cells[winningCombo[0]]);// state du gagnant
      return cells[winningCombo[0]];// return le gagnant
    }
    return null;
  }

  const handleMove = (index: number) => {
    if (cells[index] || isHistoric) return; // est ce que la case est libre, et peut on jouer actuellement
    const nextCells = cells.slice();    // copie du tableau
    nextCells[index] = isXNext ? 'X' : 'O'; 
    const winner = verifyWin(nextCells);
    const newHistoric = [...historic, {
        cells: [...nextCells],
        player: isXNext,
        moveNumber: historic.length
    }]; // ajout à l'historique
    setCells(nextCells);
    setIsXNext(!isXNext);
    setHistoric(newHistoric); // Met à jour l'état du jeu
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

