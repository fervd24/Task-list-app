import { TaskContextProvider } from "../context/TaskContext"
import TaskForm from "./TaskForm"
import TaskList from "./TaskList"

function TaskApp() {

  return (
    <TaskContextProvider>
      <div>
        <h1>Task List App</h1>
        <TaskForm/>
        <TaskList/>
      </div>
    </TaskContextProvider>
  )
}

export default TaskApp
