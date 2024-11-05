import React, { FC } from 'react';
import './Gameboard.css';

interface GameboardProps {}

const Gameboard: FC<GameboardProps> = () => (
 <div>
   <table className='board'>
      <tbody>
         <tr>
            <td className='cell'></td>
            <td className='cell'></td>
            <td className='cell'></td>
         </tr>
         <tr>
            <td className='cell'></td>
            <td className='cell'></td>
            <td className='cell'></td>
         </tr>
         <tr>
            <td className='cell'></td>
            <td className='cell'></td>
            <td className='cell'></td>
         </tr>
      </tbody>
   </table>
 </div>
);

export default Gameboard;
