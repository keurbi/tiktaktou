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
        <li>
          <button onClick={() => selectedMove({
            cells: Array(9).fill(null),
            player: true,
            moveNumber: 0
          })}>
            0
          </button>
        </li>
        {moves.map((move, index) => (
          <li key={index + 1}>
            <button onClick={() => selectedMove(move)}>
              {`${index + 1}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Historic;