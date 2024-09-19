import styles from "./Avatar.module.css";

export function Avatar() {
  return (
    <div className={styles.avatar}>
      <img src="./leslie-pic.png" alt="Profile Picture" />
    </div>
  );
}
