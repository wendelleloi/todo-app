import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Input } from "./../Input/index";
import { Button } from "./../Button/index";

import { ITodo } from "./../../interfaces";

import styles from "./index.module.css";

interface InputBarProp {
  onCreateTodo: (todo: ITodo) => void;
}

export function InputBar({ onCreateTodo }: InputBarProp) {
  const [todoTitle, setTodoTitle] = useState("");

  function handleCreateNewTodoTitle(todoTitle: string) {
    setTodoTitle(todoTitle);
  }

  function onCreateNewTodo() {
    const newTodo: ITodo = {
      title: todoTitle,
      isComplete: false,
      id: uuidv4(),
    };
    setTodoTitle("");
    onCreateTodo(newTodo);
  }

  return (
    <div className={styles.wrapper}>
      <Input
        onKeyDownEnter={onCreateNewTodo}
        onHandleChange={handleCreateNewTodoTitle}
        inputValue={todoTitle}
      />
      <Button
        onPress={onCreateNewTodo}
        isDisabled={!Boolean(todoTitle.length)}
      />
    </div>
  );
}
