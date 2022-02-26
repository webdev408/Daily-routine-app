import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TaskContext = createContext()


const TaskContextProvider = (props) => {  
  const [tasks, setTasks] = useState([
    { id: 1, time: '10:00 AM', todo: 'wash body and brush teeth' },
    { id: 2, time: '10:30 AM', todo: 'make coffee and drink' },
    { id: 3, time: '11:00 AM', todo: 'start coding' }
  ])

  const addTask = (time, todo) => {
    setTasks([...tasks,{id:uuidv4(), time, todo}])
  }

  const removeTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  return (
    <TaskContext.Provider value={{tasks, addTask, removeTask}}>
      {props.children}
  </TaskContext.Provider>
    
  )
}

export default TaskContextProvider;