import React, { FC } from 'react';
import './Historic.css';

interface HistoricProps {
   moves: {
     cells: (string | null)[];
     player: boolean;
     moveNumber: number;
   }[];
 }

const Historic: FC<HistoricProps> = (moves) => (
   <div>
      <button className='historicButton'> 0 </button>
      {}
   </div>
);

export default Historic;
