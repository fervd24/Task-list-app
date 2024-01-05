import { TaskContextProvider } from "../context/TaskContext"
import TaskInput from "./TaskInput"

function TaskApp() {

  return (
    <TaskContextProvider>
      <div>
        <h1>Task List App</h1>
        <TaskInput/>
      </div>
    </TaskContextProvider>
  )
}

export default TaskApp
