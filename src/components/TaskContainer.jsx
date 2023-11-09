import TaskList from "../components/TaskList"
import PropTypes from 'prop-types';

const TaskListContainer = ({ tasks, pages, completeParameter }) => {
  // Filtrar las tareas basándose en el valor de completeParameter
  let filteredTasks = tasks;

  if (completeParameter === 1) {
    filteredTasks = tasks.filter(task => task.completed === true);
  } else if (completeParameter === 0) {
    filteredTasks = tasks.filter(task => task.completed === false);
  } else if (completeParameter === 2) {
    filteredTasks = tasks;
  }

  // Pasar las tareas filtradas al componente TaskList
  return <TaskList tasks={filteredTasks} pages={pages} completeParameter={completeParameter} />;
};

TaskListContainer.propTypes = {
  tasks: PropTypes.array.isRequired,
  pages: PropTypes.number.isRequired,
  completeParameter: PropTypes.number.isRequired,
};

export default TaskListContainer;
