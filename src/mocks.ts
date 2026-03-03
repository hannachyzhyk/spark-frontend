import type { Task } from "./models/task";

const tasks: Task[] = [
    {
        id: "1",
        title: "Task 1",
        description: "Description for Task 1",
        status: 1,
        writing: "Writing content for Task 1",
        parentId: "0",
        createdAt: new Date(),
        editedAt: new Date(),
        deletedAt: undefined,
        sortId: 1,
        category: "Romance"
    },
    {
        id: "2",
        title: "Task 2",
        description: "Description for Task 2",
        status: 2,
        writing: "Writing content for Task 2",
        parentId: "0",
        createdAt: new Date(),
        editedAt: new Date(),
        deletedAt: undefined,
        sortId: 2,
        category: "Fun and Recreation"
    },
    {
        id: "3",
        title: "Task 3",
        description: "Description for Task 3",
        status: 3,
        writing: "Writing content for Task 3",
        parentId: "0",
        createdAt: new Date(),
        editedAt: new Date(),
        deletedAt: undefined,
        sortId: 3,
        category: "Business"
    }
]


export default {
    tasks
}