import React, { FC } from 'react';
import './Historic.css';

interface HistoricProps {
   gameHistoric : [];
}

const Historic: FC<HistoricProps> = () => (
   <div>
      <button className='historicButton'> 0 </button>
   </div>
);

export default Historic;
