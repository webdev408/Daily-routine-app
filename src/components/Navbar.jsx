import { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const Navbar = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div className="navbar">
      <h1>This is my typical daily routine</h1>
      <p>Currently you have {tasks.length} tasks unattended in your routine</p>
    </div>
  )
}

export default Navbar;