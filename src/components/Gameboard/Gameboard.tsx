import React, { FC, useState } from 'react';
import './Gameboard.css';

interface GameboardProps {
  cells: (string | null)[]
  setCells: (cells: (string | null)[]) => void
  isXNext: boolean
  setIsXNext: (isXNext: boolean) => void
  isHistoric: boolean
}

const Gameboard: FC<GameboardProps> = ({ cells, setCells, isXNext, setIsXNext, isHistoric }) => {
   const click = (cellId: number) => {
      // si la cellule contient déjà une valeur, on arrête l'exécution
      if (cells[cellId]) return;
      const newCells = cells.slice();
      newCells[cellId] = isXNext ? 'X' : 'O';
      setCells(newCells);
      setIsXNext(!isXNext);
   }

   return (
    <div>
      <table className='board'>
         <tbody>
             <tr>
                <td 
                  className={`cell ${cells[0] === 'X' ? 'clicked-x' : cells[0] === 'O' ? 'clicked-o' : ''}`}
                  onClick={() => !isHistoric && click(0)}
                >
                  {cells[0]}
                </td>
                <td 
                  className={`cell ${cells[1] === 'X' ? 'clicked-x' : cells[1] === 'O' ? 'clicked-o' : ''}`}
                  onClick={() => !isHistoric && click(1)}
                >
                  {cells[1]}
                </td>
                <td 
                  className={`cell ${cells[2] === 'X' ? 'clicked-x' : cells[2] === 'O' ? 'clicked-o' : ''}`}
                  onClick={() => !isHistoric && click(2)}
                >
                  {cells[2]}
                </td>
             </tr>
             <tr>
                <td 
                  className={`cell ${cells[3] === 'X' ? 'clicked-x' : cells[3] === 'O' ? 'clicked-o' : ''}`}
                  onClick={() => !isHistoric && click(3)}
                >
                  {cells[3]}
                </td>
                <td 
                  className={`cell ${cells[4] === 'X' ? 'clicked-x' : cells[4] === 'O' ? 'clicked-o' : ''}`}
                  onClick={() => !isHistoric && click(4)}
                >
                  {cells[4]}
                </td>
                <td 
                  className={`cell ${cells[5] === 'X' ? 'clicked-x' : cells[5] === 'O' ? 'clicked-o' : ''}`}
                  onClick={() => !isHistoric && click(5)}
                >
                  {cells[5]}
                </td>
             </tr>
             <tr>
                <td 
                  className={`cell ${cells[6] === 'X' ? 'clicked-x' : cells[6] === 'O' ? 'clicked-o' : ''}`}
                  onClick={() => !isHistoric && click(6)}
                >
                  {cells[6]}
                </td>
                <td 
                  className={`cell ${cells[7] === 'X' ? 'clicked-x' : cells[7] === 'O' ? 'clicked-o' : ''}`}
                  onClick={() => !isHistoric && click(7)}
                >
                  {cells[7]}
                </td>
                <td 
                  className={`cell ${cells[8] === 'X' ? 'clicked-x' : cells[8] === 'O' ? 'clicked-o' : ''}`}
                  onClick={() => !isHistoric && click(8)}
                >
                  {cells[8]}
                </td>
             </tr>
         </tbody>
      </table>
    </div>
   );
}
export default Gameboard;
