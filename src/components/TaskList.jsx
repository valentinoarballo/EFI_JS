import React, { useState } from 'react';
import TaskCard from './TaskCard';

const CardsPerPage = 12;

function TaskList({ tasks }) {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastCard = currentPage * CardsPerPage;
  const indexOfFirstCard = indexOfLastCard - CardsPerPage;
  const currentCards = tasks.slice(indexOfFirstCard, indexOfLastCard);
  console.log(currentCards)
  return (
    <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
      {currentCards.map((task, key) => (
        <TaskCard key={key} data={task} />
      ))}
      <div>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </button>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={indexOfLastCard >= tasks.length}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default TaskList;
