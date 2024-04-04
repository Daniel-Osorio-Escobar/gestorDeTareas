import React from 'react'
import { createContext, useState } from "react";


export const tasksContext = createContext();

export const TaskProvider = ({ children }) => {
  
    const [tasks, setTasks] = useState([{
      id: 1,
      name: 'Task 1',
      description: 'Description 1',
      done: false
    },{
      id: 2,
      name: 'Task 2',
      description: 'Description 2',
      done: false
    },{
       id: 3,
      name: 'Task 3',
      description: 'Description 3',
      done: false
    }]);

    const [filteredTasks, setFilteredTasks] = useState(tasks);

    const tasksResolved = tasks.filter(task => task.done).length;
    const tasksPending = tasks.filter(task => !task.done).length;

  return (
    <>
    
    <tasksContext.Provider value={{ tasks, setTasks, tasksResolved, tasksPending, filteredTasks, setFilteredTasks}}>
        {children}
    </tasksContext.Provider>
    
    </>
  )
}
