import Clipboard from "../../assets/Clipboard.svg";
import styles from "./index.module.css";

export function Empty() {
  return (
    <div className={styles.empty}>
      <img src={Clipboard} alt="Imagem de tarefas" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
