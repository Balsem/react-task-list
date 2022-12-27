import AddTask from "../components/addTask";
import TaskList from "../components/taskList";
import { IRoute } from "../models/routes";

export const GLOBAL_ROUTES: IRoute[] = [
    {
        path: '/',
        component: TaskList,
        name: 'TaskList'
    },
]


