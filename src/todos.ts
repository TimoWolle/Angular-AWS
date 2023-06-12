import {todo} from "./app/entity/todo";

export const todos: todo[] = [
  {
    id: 1,
    titel: "First Todo",
    status: "IN_PROGRESS",
    dueDate: Date.now(),
    prio: 1,
    description: "Lorem ipsum"
  },
  {
    id: 2,
    titel: "Second Todo",
    status: "IN_PROGRESS",
    dueDate: Date.now(),
    prio: 2,
    description: "Dolor sit amet"
  },
  {
    id: 3,
    titel: "Third Todo",
    status: "IN_PROGRESS",
    dueDate: Date.now(),
    prio: 3,
    description: "Consectetur adipiscing elit"
  }
]
