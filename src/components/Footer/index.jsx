
import styles from "./footer.module.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <p> &copy; {year} CosomosMuseum </p>
    </div>
  );
}

export default Footer;
