import { FiPlusCircle } from "react-icons/fi";

import styles from "./index.module.css";

interface ButtonProp {
  onPress: () => void;
  isDisabled: boolean;
}

export function Button({ onPress, isDisabled }: ButtonProp) {
  return (
    <button className={styles.button} onClick={onPress} disabled={isDisabled}>
      Criar
      <FiPlusCircle size={16} />
    </button>
  );
}
