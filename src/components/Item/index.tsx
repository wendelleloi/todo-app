import { FiTrash2 } from "react-icons/fi";

import styles from "./index.module.css";
import { ITodo, IItem } from "../../interfaces";

interface ItemProp {
  todo: ITodo;
  onPress: ({}: IItem) => void;
}

export function Item({ todo, onPress }: ItemProp) {
  function onUpdateTodo({ id, action }: IItem) {
    onPress({ id: id, action: action });
  }

  return (
    <div className={styles.item}>
      <div
        className={styles.box}
        onClick={() => onUpdateTodo({ id: todo.id, action: "update" })}
      >
        <label title="Finalizar todo" className={styles.checkbox}>
          <input
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => onUpdateTodo({ id: todo.id, action: "update" })}
          />
          <span className={styles.checkmark}></span>
        </label>
        <p className={todo.isComplete ? styles.todoCompleted : ""}>
          {todo.title}
        </p>
      </div>
      <button
        title="Deletar todo"
        onClick={() => onUpdateTodo({ id: todo.id, action: "delete" })}
      >
        <FiTrash2 size={20} />
      </button>
    </div>
  );
}
