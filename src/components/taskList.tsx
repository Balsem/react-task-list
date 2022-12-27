import  { FunctionComponent, useState } from "react"
import TaskItem from "./taskItem"
import AddTask from "./addTask"
import { ITask } from "../types/tasks"


const TaskList: FunctionComponent = () => {

    // Tasks (ToDo List) State
    const [toDo, setToDo] = useState([
        { id: 1, title: 'Task 1', status: false },
        { id: 2, title: 'Task 2', status: false }
    ])

    // Temp State
    const [newTask, setNewTask] = useState<string>('')
    const [updatedData, setUpdatedData] = useState({ id: -1, title: '', status: false })
    const [isToUpdate, setIsToUpdate] = useState<boolean>(false)

    // Add task 
    const addTask = () => {
        if (newTask) {
            let num = toDo.length + 1
            setToDo([
                ...toDo,
                { id: num, title: newTask, status: false }
            ])
            setNewTask('')
        }
    }

    // Delete task 
    const deleteTask = (id: number) => {
        setToDo(toDo.filter(task => task.id !== id))

    }

    // Mark task as done or completed
    const markDone = (id: number) => {
        setToDo(toDo.map(
            task => (task.id === id)
                ? ({ ...task, status: !task.status })
                : (task)
        ))
    }

    // Cancel update
    const cancelUpdate = () => {
        setUpdatedData({ id: -1, title: '', status: false })
        setIsToUpdate(false)
    }

    // Change task for update
    const changeHolder = (e: any) => {
        setUpdatedData({ ...updatedData, title: e.target.value })
    }

    // Update task
    const updateTask = () => {
        let removeOldRecord = [...toDo].filter(task => task.id !== updatedData.id)
        setToDo([
            ...removeOldRecord,
            updatedData
        ])
        setIsToUpdate(false)
    }


    return (
        <div className="container w-60 mt-6 mb-5 pb-5">
            <h2 className="mt-5 mb-5 listTitle">To Do Task List </h2>

            <AddTask
                updatedData={updatedData}
                changeHolder={changeHolder}
                updateTask={updateTask}
                cancelUpdate={cancelUpdate}
                isToUpdate={isToUpdate}
                newTask={newTask}
                setNewTask={setNewTask}
                addTask={addTask}
            />

            {toDo?.length ? '' : 'No Tasks...'}
            {toDo && toDo
                .sort((a: ITask, b: ITask) => a.id > b.id ? 1 : -1)
                .map((task: ITask, index: number) => {
                    return (
                        <TaskItem
                            task={task}
                            index = {index}
                            markDone={markDone}
                            setUpdatedData={setUpdatedData}
                            deleteTask={deleteTask}
                            setIsToUpdate={setIsToUpdate}
                            key={task?.id}
                        />
                    )
                })
            }
        </div>
    )
}

export default TaskList;