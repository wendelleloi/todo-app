import { ITodo, IItem } from "./../../interfaces";
import { Item } from "../Item";
import { Empty } from "./../Empty";

import styles from "./index.module.css";

interface ListProp {
  todos: ITodo[];
  onPress: ({}: IItem) => void;
}

export function List({ todos, onPress }: ListProp) {
  const todosCompleted = todos.reduce(
    (accumulator, todo) => accumulator + Number(todo.isComplete),
    0
  );

  function onUpdateTodo({ id, action }: IItem) {
    onPress({ id, action });
  }

  return (
    <div className={styles.list}>
      <header className={styles.infos}>
        <div className={styles.todosCreateds}>
          <strong>Tarefas criadas</strong>
          <span className={styles.counter}>{todos.length}</span>
        </div>
        <div className={styles.todosCompleteds}>
          <strong>Concluídas</strong>
          <span className={styles.counter}>
            {todosCompleted} de {todos.length}
          </span>
        </div>
      </header>

      <div className={styles.content}>
        {!todos.length ? (
          <Empty />
        ) : (
          todos.map((todo) => (
            <Item key={todo.id} onPress={onUpdateTodo} todo={todo} />
          ))
        )}
      </div>
    </div>
  );
}
