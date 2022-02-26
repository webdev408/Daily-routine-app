import { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const TaskDetails = ({task}) => {
  const { removeTask } = useContext(TaskContext)
  return (
    <li onClick={()=>removeTask(task.id)}>
      <div className="time">{task.time}</div>
      <div className="todo">{task.todo}</div>
    </li>
  )
}

export default TaskDetails;