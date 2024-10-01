import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilSimpleLine } from "@phosphor-icons/react";

export function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img className={styles.cover} src="./cover-pic.png" alt="cover" />
        <div className={styles.profile}>
          <Avatar hasBorder src="./leslie-pic.png" />

          <strong>Leslie Alexander</strong>
          <span>UI Designer</span>
        </div>

        <footer>
          <a href="#" className={styles.edit_button}>
            <PencilSimpleLine style={{ marginRight: "0.5rem" }} size={20} />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </>
  );
}
