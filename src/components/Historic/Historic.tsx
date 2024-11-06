import React, { FC } from 'react';
import './Historic.css';

interface HistoricProps {
   moves: {
     cells: (string | null)[];
     player: boolean;
     moveNumber: number;
   }[],
   selectedMove : Function;
 }

const Historic: FC<HistoricProps> = ({moves}, selectedMove) => (
   <div>
      <button className='historicButton'> 0 </button>
      {moves.map((move) => (
         <button 
         key={move.moveNumber}
         className='historicButton'
         >
            {move.moveNumber}
         </button>
      ))}
   </div>
);

export default Historic;
