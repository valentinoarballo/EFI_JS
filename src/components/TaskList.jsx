import { useState, useContext } from 'react';
import Pagination from '@mui/material/Pagination';
import TaskCard from './TaskCard';
import { DarkModeContext } from '../context/DarkModeContext';
import PropTypes from 'prop-types';
import '../index.css'


export default function TaskList({ tasks, pages, completeParameter }) {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastCard = currentPage * pages;
  const indexOfFirstCard = indexOfLastCard - pages;
  const currentCards = tasks.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(tasks.length / pages);
  const { darkMode } = useContext(DarkModeContext);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <section className='taskListBodySection'>
        {currentCards.map((task, key) => (
          <TaskCard key={key} data={task} />
        ))}
      </section>

      <section className='taskListPagination'>
        <Pagination
          count={totalPages}  // Número total de páginas
          page={currentPage}  // Página actual
          onChange={handleChange}  // Función que se llama cuando el usuario cambia de página
          color='primary'
          sx={{ // Clases de estilo condicionales
            '& .MuiPaginationItem-root': {
              color: darkMode ? '#fff' : 'rgba(0, 0, 0, 0.87)'
            },
          }}
        />
      </section>
    </>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  pages: PropTypes.number.isRequired,
  completeParameter: PropTypes.number.isRequired,
};
