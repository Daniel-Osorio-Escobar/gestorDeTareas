import React from 'react'
import { useState, useContext, useRef } from "react";
import { tasksContext } from '../../Context/Context';
import './ContainerInput.css'




export const EnterField = () => {

  const context = useContext(tasksContext);

  const titleField = useRef('');
  const descriptionField = useRef('');

  const [TaskName, setTaskName] = useState('');
  const [TaskDescription, setTaskDescription] = useState('');

  const handleInput = (event) => {
      setTaskName(event.target.value);
  };

  const handleInputDesc = (event) => {
      setTaskDescription(event.target.value);
  };


  const addTask = (event) => {
    event.preventDefault();
    const newId = context.tasks.length + 1;
    const newTaskObject = { id: newId, name: TaskName, description: TaskDescription, done: false };
    context.setTasks([...context.tasks, newTaskObject]);
    context.setFilteredTasks([...context.tasks, newTaskObject]);

    titleField.current.value = '';
    descriptionField.current.value = '';

  };

  return (
    <>
    <form>
      <div id='field'>
          <h3>Titulo de la tarea: </h3>
          <input ref={titleField} onChange={handleInput}/>
          <h3>Descripcion de la tarea: </h3>
          <input ref={descriptionField} onChange={handleInputDesc}/>
          <button onClick={addTask}>Crear</button>
      </div>
    </form>
    

    </>
  )
}
