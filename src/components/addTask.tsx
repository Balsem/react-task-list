import { FunctionComponent } from "react"
import { IAddTask } from "../types/tasks";



const AddTask: FunctionComponent<IAddTask> = ({ updatedData, changeHolder, updateTask, cancelUpdate,
  isToUpdate, newTask, setNewTask, addTask }) => {
  return (
    <>
      {!isToUpdate ?
        <div className="row mb-5 mt-5">
          <div className="col">
            <input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="form-control form-control-lg"
            />
          </div>
          <div className="col-auto">
            <button
              onClick={addTask}
              className="btn btn-lg btn-success"
            >
              Add Task
            </button>
          </div>
        </div>
        :
        <div className="row mb-5 mt-5">
          <div className="col">
            <input
              value={updatedData?.title}
              onChange={(e) => changeHolder(e)}
              className="form-control form-control-lg"
            />
          </div>
          <div className="col-auto">
            <button
              onClick={updateTask}
              className="btn btn-lg btn-success mr-20"
            >
              Update
            </button>
            <button
              onClick={cancelUpdate}
              className="btn btn-lg btn-secondary"
            >
              Cancel
            </button>
          </div>
        </div>
      }
    </>
  )
}

export default AddTask;