import { ChangeEvent, InputHTMLAttributes, KeyboardEvent } from "react";
import styles from "./index.module.css";

interface InputProp extends InputHTMLAttributes<HTMLInputElement> {
  onHandleChange: (todoTitle: string) => void;
  onKeyDownEnter: () => void;
  inputValue: string;
}

export function Input({
  onHandleChange,
  onKeyDownEnter,
  inputValue,
  ...props
}: InputProp) {
  function handleTodoTitle(event: ChangeEvent<HTMLInputElement>) {
    onHandleChange(event.target.value);
  }
  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && event.currentTarget.value) {
      onHandleChange(event.currentTarget.value);
      onKeyDownEnter();
    }
  }

  return (
    <input
      className={styles.input}
      placeholder="Adicione uma nova tarefa"
      type="text"
      onChange={handleTodoTitle}
      onKeyDown={handleKeyDown}
      value={inputValue}
      {...props}
    />
  );
}
