import { useState } from "react";

import { ITodo, IItem } from "./interfaces/index";
import { todos } from "./data";

import { Header } from "./components/Header/index";
import { List } from "./components/List";
import { InputBar } from "./components/InputBar";

import styles from "./app.module.css";
import "./global.css";

function App() {
  const [todoList, setTodoList] = useState<ITodo[]>(todos);

  function onCreateTodo(todo: ITodo) {
    setTodoList([...todoList, todo]);
  }

  function onUpdateTodo({ id, action }: IItem) {
    if (action === "update") checkTodo(id);
    if (action === "delete") deleTodo(id);
  }

  function checkTodo(id: string) {
    const todosUpdated = todoList.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodoList([...todosUpdated]);
  }

  function deleTodo(id: string) {
    const todosUpdated = todoList.filter((todo) => todo.id !== id);
    setTodoList([...todosUpdated]);
  }

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <div className={styles.todo}>
          <InputBar onCreateTodo={onCreateTodo} />
          <List todos={todoList} onPress={onUpdateTodo} />
        </div>
      </main>
    </>
  );
}

export default App;
