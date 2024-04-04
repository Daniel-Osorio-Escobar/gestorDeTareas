import { useState, useContext } from 'react';
import './Filter.css';
import { tasksContext } from '../Context/Context';



export const Filter = () => {
  const context = useContext(tasksContext);

  const handleFilterChange = (event) => {
    let filterType = event.target.value;
    if (filterType === 'Pendientes') {
      context.setFilteredTasks(context.tasks.filter(task => !task.done));
    }else if (filterType === 'Resueltas') {
      context.setFilteredTasks(context.tasks.filter(task => task.done));
    }else{
      context.setFilteredTasks(context.tasks);
    }


  }

  return (
    <>
      <div id='filter'>
        <h3 id='filterTitle'>Filtrar: </h3>
        <select onChange={handleFilterChange}>
          <option value="">Todas las tareas</option>
          <option value="Pendientes">Pendientes</option>
          <option value="Resueltas">Resueltas</option>
        </select>
      </div>
    </>
  );
};
