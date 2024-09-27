/* eslint-disable react/prop-types */
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import { pt } from "date-fns/locale";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Post muito bacana!"]);
  const [newComment, setNewComment] = useState("");
  const isNewCommentEmpty = newComment.length === 0;

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h' ",
    { locale: pt },
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: pt,
    addSuffix: true,
  });

  function handleNewCommentChange(event) {
    event.target.setCustomValidity(""); //event é sempre passado como argumento
    setNewComment(event.target.value);
  }

  function handleCreateNewComment(event) {
    event.preventDefault();

    setComments([...comments, newComment]);
    setNewComment("");
  }

  function deletComment(commentToDelete) {
    const commentsWithOutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithOutDeletedOne);
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity("Campo Obrigatório");
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={false} src={author.avatarUrl} />
          <span>
            <strong>{author.name}</strong>
            <p>{author.role}</p>
          </span>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}> {line.content} </p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href=""> {line.content} </a>
              </p>
            );
          }
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário..."
          name="comment"
          onChange={handleNewCommentChange}
          required
          onInvalid={handleNewCommentInvalid}
          value={newComment}
        />
        <footer>
          <button disabled={isNewCommentEmpty} type="submit">
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deletComment}
          />
        ))}
      </div>
    </article>
  );
}
