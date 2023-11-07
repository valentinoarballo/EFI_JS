import React from 'react';
import TaskList from "../components/TaskList"

const TaskListContainer = ({ tasks, pages, completeParameter }) => {
  // Filtrar las tareas basándose en el valor de completeParameter
  let filteredTasks = tasks;

  if (completeParameter === true) {
    filteredTasks = tasks.filter(task => task.completed === true);
  } else if (completeParameter === false) {
    filteredTasks = tasks.filter(task => task.completed === false);
  }

  // Pasar las tareas filtradas al componente TaskList
  return <TaskList tasks={filteredTasks} pages={pages} completeParameter={completeParameter} />;
};

export default TaskListContainer;
