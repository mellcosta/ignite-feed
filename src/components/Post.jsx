import styles from "./Post.module.css";

import { Profile_Pic } from "./Profile_Pic";

export function Post() {
  return (
    <>
      <div className={styles.post}>
        <div className={styles.header}>
          <div className={styles.author}>
            <Profile_Pic src="" />
            <span>
              <strong>Jane Cooper</strong>
              <p>Dev frontend</p>
            </span>
          </div>

          <p>Publicado há 1h</p>
        </div>

        <div className={styles.content}>
          Fala galeraa 👋
          <br />
          <br />
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
          <br />
          <br />
          <a href="#">👉 jane.design/doctorcare</a>
          <br />
          <br />
          <a href="#">#novoprojeto #nlw #rocketseat</a>
        </div>

        <form className={styles.form}>
          <p>Deixe seu feedback</p>
          <textarea
            id={styles.textarea}
            placeholder="Escreva um Comentário..."
          ></textarea>
          <button>Publicar</button>
        </form>
      </div>
    </>
  );
}
