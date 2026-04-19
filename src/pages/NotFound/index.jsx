import { Link } from "react-router-dom";
import styles from "./notFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.page}>
      <span className={styles.icon}>🌑</span>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>Lost in Space</h1>
      <p className={styles.desc}>
        This page drifted beyond our observable universe. Let us navigate you back.
      </p>
      <Link to="/" className={styles.btn}> Return to Home Base </Link>
    </div>
  );
}

export default NotFound;
