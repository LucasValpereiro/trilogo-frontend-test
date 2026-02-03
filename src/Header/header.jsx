import styles from "./Header.module.css";
import icon from "../assets/icon.png";

export function Header({ onNewTicket }) {
  return (
    <div>
      <header className={styles.header}>
        <img src={icon} alt="Ícone trílogo"></img>

        <button className={styles.newButton} onClick={onNewTicket}>
          <span className={styles.plusSign}>+</span>
          <span className={styles.buttonText}>Novo ticket</span>
        </button>
      </header>
    </div>
  );
}
