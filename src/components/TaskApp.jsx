import { TaskContextProvider } from "../context/TaskContext"
import TaskForm from "./TaskForm"

function TaskApp() {

  return (
    <TaskContextProvider>
      <div>
        <h1>Task List App</h1>
        <TaskForm/>
      </div>
    </TaskContextProvider>
  )
}

export default TaskApp
