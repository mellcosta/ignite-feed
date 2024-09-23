import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasborder={false} src="./leslie-pic.png" />
      <section>
        <div className={styles.commentContent}>
          <header>
            <div>
              <strong>Devon Lane</strong>
              <p className="time">Cerca de 2h</p>
            </div>
            <a>
              <Trash size={24} />
            </a>
          </header>
          <div>Muito bom Devon, Parabéns!</div>
        </div>

        <footer className={styles.likes}>
          <ThumbsUp size={20} />
          Aplaudir . 33
        </footer>
      </section>
    </div>
  );
}
