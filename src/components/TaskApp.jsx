import { TaskContextProvider } from "../context/TaskContext"
import TaskForm from "./TaskForm"
import TaskList from "./TaskList"
import "./TaskApp.css"

function TaskApp() {

  return (
    <TaskContextProvider>
      <div className="main-container">
        <div>
        <h1>Task List App</h1>
        <TaskForm/>
        <TaskList/>

        </div>
      </div>
    </TaskContextProvider>
  )
}

export default TaskApp
