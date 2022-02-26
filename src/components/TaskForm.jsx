import { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [time, setTime] = useState('')
  const [todo, setTodo] = useState('')
     
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(time, todo)
    setTime('')
    setTodo('')
  }  

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add task time" value={time}
      onChange={(e)=>setTime(e.target.value)} required />
      <input type="text" placeholder='Add a task' value={todo}
        onChange={(e) => setTodo(e.target.value)} required />
      <input type="submit" value="Add Task" />
    </form>
  )
}

export default TaskForm;