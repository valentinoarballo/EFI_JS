import React, { useState } from 'react';
import TaskCard from './TaskCard';
import { RoundaboutLeft } from '@mui/icons-material';

const CardsPerPage = 12;

function TaskList({ tasks }) {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastCard = currentPage * CardsPerPage;
  const indexOfFirstCard = indexOfLastCard - CardsPerPage;
  const currentCards = tasks.slice(indexOfFirstCard, indexOfLastCard);
  console.log(currentCards)
  return (
    <>
      <section style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        {currentCards.map((task, key) => (
          <TaskCard key={key} data={task} />
        ))}
      </section>
      <section style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </button>
        <p>
          page Nº {currentPage} of {Math.ceil(tasks.length / CardsPerPage)}
        </p>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={indexOfLastCard >= tasks.length}>
          Siguiente
        </button>
      </section>
    </>
  );
}
export default TaskList;

