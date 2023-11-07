import React, { useState } from 'react';
import TaskCard from './TaskCard';
import { RoundaboutLeft } from '@mui/icons-material';

const CardsPerPage = 12;

function TaskList({ tasks, pages, completeParameter  }) {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastCard = currentPage * pages;
  const indexOfFirstCard = indexOfLastCard - pages;
  const currentCards = tasks.slice(indexOfFirstCard, indexOfLastCard);
  return (
    <>
      
      <section style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'space-evenly', marginTop: '20px'}}>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </button>
        <p>
          page Nº {currentPage} of {Math.ceil(tasks.length / pages)}
        </p>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={indexOfLastCard >= tasks.length}>
          Siguiente
        </button>
      </section>
      <section style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        {currentCards.map((task, key) => (
          
            <TaskCard key={key} data={task} />
             
        ))}
      </section>
    </>
  );
}
export default TaskList;

