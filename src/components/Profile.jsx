import { Avatar } from "./Avatar";
import styles from "./Profile.module.css";
import { PencilSimpleLine } from "@phosphor-icons/react";

export function Profile() {
  return (
    <>
      <div className={styles.profile}>
        <div className={styles.header}>
          <Avatar />
          <span>
            <strong className={styles.name}>Leslie Alexander</strong>
            <p className={styles.job_title}>UI Designer</p>
          </span>
        </div>

        <div className={styles.edit_profile}>
          <a href="#" className={styles.edit_button}>
            <PencilSimpleLine className={styles.edit_icon} />
            Editar seu perfil
          </a>
        </div>
      </div>
    </>
  );
}
