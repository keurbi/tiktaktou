import React, { FC, useState } from 'react';
import './Gameboard.css';

interface GameboardProps {
   historic : 
}

const Gameboard: FC<GameboardProps> = () => {
   //9 cases vides, state typé comme tableau avec types strings ou nulls
   const [cells,setCells] = useState<(string | null)[]>(Array(9).fill(null));
   // pour définir le tour des joueurs
   const [player, setPlayer] = useState<boolean>(true);

   
   const click = (cellid : number) => {
      console.log(cellid)
   }
   return (
 <div>
   <table className='board'>
      <tbody>
         <tr>
            <td className='cell' onClick={() => {click(1)}}></td>
            <td className='cell' onClick={() => {click(2)}}></td>
            <td className='cell' onClick={() => {click(3)}}></td>
         </tr>
         <tr>
            <td className='cell' onClick={() => {click(4)}}></td>
            <td className='cell' onClick={() => {click(5)}}></td>
            <td className='cell' onClick={() => {click(6)}}></td>
         </tr>
         <tr>
            <td className='cell' onClick={() => {click(7)}}></td>
            <td className='cell' onClick={() => {click(8)}}></td>
            <td className='cell' onClick={() => {click(9)}}></td>
         </tr>
      </tbody>
   </table>
 </div>
);
}

export default Gameboard;
