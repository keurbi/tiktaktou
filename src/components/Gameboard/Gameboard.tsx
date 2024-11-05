import React, { FC, useState } from 'react';
import './Gameboard.css';

interface GameboardProps {
}

const Gameboard: FC<GameboardProps> = () => {
   //9 cases vides, state typé comme tableau avec types strings ou nulls
   const [cells,setCells] = useState<(string | null)[]>(Array(9).fill(null));
   // pour définir le tour des joueurs
   const [player, setPlayer] = useState<boolean>(true);

const click = (cellId: number) => {
   // si la cellule contient déjà une valeur, on arrête l'exécution
   if (cells[cellId]) return;
   const newCells = cells.slice();
   newCells[cellId] = player ? 'X' : 'O';
   setCells(newCells);
   setPlayer(!player);
}


   return (
 <div>
   <table className='board'>
      <tbody>
         <tr>
            <td className='cell' onClick={() => {click(1)}}>{cells[0]}</td>
            <td className='cell' onClick={() => {click(2)}}>{cells[1]}</td>
            <td className='cell' onClick={() => {click(3)}}>{cells[2]}</td>
         </tr>
         <tr>
            <td className='cell' onClick={() => {click(4)}}>{cells[3]}</td>
            <td className='cell' onClick={() => {click(5)}}>{cells[4]}</td>
            <td className='cell' onClick={() => {click(6)}}>{cells[5]}</td>
         </tr>
         <tr>
            <td className='cell' onClick={() => {click(7)}}>{cells[6]}</td>
            <td className='cell' onClick={() => {click(8)}}>{cells[7]}</td>
            <td className='cell' onClick={() => {click(9)}}>{cells[8]}</td>
         </tr>
      </tbody>
   </table>
 </div>
);
}

export default Gameboard;
