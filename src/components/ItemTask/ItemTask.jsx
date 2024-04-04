import { tasksContext } from '../Context/Context';
import './ItemTask.css';
import { useContext, useState } from "react";


export const ItemTask = ({ taskId, taskName, description, taskDone }) => {

  const context = useContext(tasksContext)
  const [done, setDone] = useState(taskDone);

  const handleCheckbox = () => {
    setDone(!done);
    context.setTasks(tasks =>
      tasks.map(task =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };
  
  return (
    <li key={taskId}>
      <div className={`circle ${done ? 'green' : 'red'}`}></div>
      <div className={`task ${done ? 'completed' : ''}`}>
        <h3>{taskName}</h3>
        <p>{description}</p>
      </div>
      <input className="check" type="checkbox" checked={done} onChange={handleCheckbox} />

  </li>
  );
};
