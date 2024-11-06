import React from 'react';
import './Historic.css';

interface HistoricProps {
   moves: {
     cells: (string | null)[];
     player: boolean;
     moveNumber: number;
   }[];
   selectedMove: (move: {
     cells: (string | null)[];
     player: boolean;
     moveNumber: number;
   }) => void;
}

const Historic: React.FC<HistoricProps> = ({ moves, selectedMove }) => {
   return (
     <div className="historic">
       <h3>Historique des coups</h3>
       <ul>
         {moves.map((move, index) => (
           <li key={index}>
             <button onClick={() => selectedMove(move)}>
               {index === 0 ? '0' : `${index}`}
             </button>
           </li>
         ))}
       </ul>
     </div>
   );
};

export default Historic;