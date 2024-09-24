/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { useState } from "react";

export function Comment(props) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDelete() {
    props.onDeleteComment(props.content);
  }

  function handleLikeComment() {
    setLikeCount((state) => state + 1);
    //setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasborder={false} src="./leslie-pic.png" />
      <section className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Devon Lane</strong>
              <time
                title="22 September of 2022, 15h30"
                dateTime="2022-06-06 15:33:00"
              >
                Cerca de 2h
              </time>
            </div>
            <button onClick={handleDelete} title="Delete Comment">
              <Trash size={24} />
            </button>
          </header>

          <p>{props.content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} style={{ marginRight: "0.5rem" }} />
            Aplaudir <span> {likeCount} </span>
          </button>
        </footer>
      </section>
    </div>
  );
}
