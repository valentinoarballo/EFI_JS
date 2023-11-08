import React, { useState } from 'react';
import TaskCard from './TaskCard';
import { RoundaboutLeft } from '@mui/icons-material';
import { DarkModeContext } from '../context/DarkModeContext';
import Pagination from '@mui/material/Pagination';

function TaskList({ tasks, pages, completeParameter }) {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastCard = currentPage * pages;
  const indexOfFirstCard = indexOfLastCard - pages;
  const currentCards = tasks.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(tasks.length / pages);
  const { darkMode, toggleDarkMode } = React.useContext(DarkModeContext);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <section style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'space-evenly', marginTop: '20px' }}>
        <Pagination
          count={totalPages}  // Número total de páginas
          page={currentPage}  // Página actual
          onChange={handleChange}  // Función que se llama cuando el usuario cambia de página
          color={darkMode ? 'secondary' : 'primary'}
          sx={{ // Clases de estilo condicionales
            '& .MuiPaginationItem-root': {
              color: darkMode ? '#fff' : 'rgba(0, 0, 0, 0.87)'},}}
        />
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

