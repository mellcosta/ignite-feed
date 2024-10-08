import styles from "./Header.module.css";
import IgniteLogo from "../assets/ignite-feed-logo.svg";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={IgniteLogo} alt="Ignite Feed Logo" />
        <strong>Ignite Feed</strong>
      </header>
    </>
  );
}
