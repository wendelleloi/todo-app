import { ITodo } from "../interfaces/index";

import { v4 as uuidv4 } from "uuid";

export const todos: ITodo[] = [
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    isComplete: false,
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    isComplete: true,
  },
  {
    id: uuidv4(),
    title: "Estudar",
    isComplete: false,
  },
];
