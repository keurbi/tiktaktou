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
const Gameboard: React.FC<GameboardProps> = ({ cells, isXNext, isHistoric, onMove }) => {
  const handleClick = (index: number) => {
    if (cells[index] || isHistoric) return;
    onMove(index);
  };

  const getCellClass = (value: string | null) => {
    return value ? `cell ${value.toLowerCase()}` : 'cell';
  };

  return (
    <div className="gameboard">
      <table className="board">
        <tbody>
          <tr>
            <td className={getCellClass(cells[0])} onClick={() => handleClick(0)}>{cells[0]}</td>
            <td className={getCellClass(cells[1])} onClick={() => handleClick(1)}>{cells[1]}</td>
            <td className={getCellClass(cells[2])} onClick={() => handleClick(2)}>{cells[2]}</td>
          </tr>
          <tr>
            <td className={getCellClass(cells[3])} onClick={() => handleClick(3)}>{cells[3]}</td>
            <td className={getCellClass(cells[4])} onClick={() => handleClick(4)}>{cells[4]}</td>
            <td className={getCellClass(cells[5])} onClick={() => handleClick(5)}>{cells[5]}</td>
          </tr>
          <tr>
            <td className={getCellClass(cells[6])} onClick={() => handleClick(6)}>{cells[6]}</td>
            <td className={getCellClass(cells[7])} onClick={() => handleClick(7)}>{cells[7]}</td>
            <td className={getCellClass(cells[8])} onClick={() => handleClick(8)}>{cells[8]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};export default Gameboard;
