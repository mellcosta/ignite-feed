import styles from "./Avatar.module.css";

// eslint-disable-next-line react/prop-types
export function Avatar({ hasBorder, src }) {
  return (
    <div className={hasBorder ? styles.avatarWithBorder : styles.avatar}>
      <img src={src} alt="Profile Picture" />
    </div>
  );
}
