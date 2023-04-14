import styles from "./index.module.css";
import logo from "../../assets/Logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logotipo do Todo" />
    </header>
  );
}
