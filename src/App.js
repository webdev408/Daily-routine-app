import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskContextProvider from "./contexts/TaskContext";


function App() {
  return (
    <div className="App">
      <TaskContextProvider>
        <Navbar />
        <TaskList />
        <TaskForm />
      </TaskContextProvider>
    </div>
  );
}

export default App;
