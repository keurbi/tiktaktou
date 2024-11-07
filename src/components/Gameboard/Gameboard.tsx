import React from 'react';
import './Gameboard.css';

interface GameboardProps {
  cells: (string | null)[];
  setCells: React.Dispatch<React.SetStateAction<(string | null)[]>>;
  isXNext: boolean;
  setIsXNext: React.Dispatch<React.SetStateAction<boolean>>;
  isHistoric: boolean;
  onMove: (index: number) => void;
}
const Gameboard: React.FC<GameboardProps> = ({ cells, isHistoric, onMove }) => {
  const handleClick = (index: number) => {
    if (cells[index] || isHistoric) return;
    onMove(index);
  };

  return (
    <div className="gameboard">
      <table className="board">
        <tbody>
          <tr>
            <td className={`cell ${cells[0] ? `clicked-${cells[0].toLowerCase()}` : ''}`} onClick={() => handleClick(0)}>{cells[0]}</td>
            <td className={`cell ${cells[1] ? `clicked-${cells[1].toLowerCase()}` : ''}`} onClick={() => handleClick(1)}>{cells[1]}</td>
            <td className={`cell ${cells[2] ? `clicked-${cells[2].toLowerCase()}` : ''}`} onClick={() => handleClick(2)}>{cells[2]}</td>
          </tr>
          <tr>
            <td className={`cell ${cells[3] ? `clicked-${cells[3].toLowerCase()}` : ''}`} onClick={() => handleClick(3)}>{cells[3]}</td>
            <td className={`cell ${cells[4] ? `clicked-${cells[4].toLowerCase()}` : ''}`} onClick={() => handleClick(4)}>{cells[4]}</td>
            <td className={`cell ${cells[5] ? `clicked-${cells[5].toLowerCase()}` : ''}`} onClick={() => handleClick(5)}>{cells[5]}</td>
          </tr>
          <tr>
            <td className={`cell ${cells[6] ? `clicked-${cells[6].toLowerCase()}` : ''}`} onClick={() => handleClick(6)}>{cells[6]}</td>
            <td className={`cell ${cells[7] ? `clicked-${cells[7].toLowerCase()}` : ''}`} onClick={() => handleClick(7)}>{cells[7]}</td>
            <td className={`cell ${cells[8] ? `clicked-${cells[8].toLowerCase()}` : ''}`} onClick={() => handleClick(8)}>{cells[8]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
;export default Gameboard;