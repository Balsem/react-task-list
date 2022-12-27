export interface IUpdatedData {
    id: number
    title: string
    status: boolean
}


export interface IAddTask {
    updatedData: IUpdatedData
    changeHolder: (e: any) => void
    updateTask: () => void
    cancelUpdate: () => void
    isToUpdate: boolean
    newTask: string
    setNewTask: (e: any) => void
    addTask: () => void
}

export interface ITask {
    id: number
    title: string
    status: boolean
}

export interface ItaskItem {
    task: ITask
    index: number
    markDone: (e: any) => void
    setUpdatedData: (t: ITask) => void
    deleteTask: (id: number) => void
    setIsToUpdate: (t: boolean) => void
}