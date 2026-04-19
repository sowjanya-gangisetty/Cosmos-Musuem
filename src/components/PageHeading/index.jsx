import styles from "./pageHeading.module.css";

const PageHeading = ({ eventTitle, title, highlight, subtitle }) => {
  return (
    <section className={styles.main}>
      {eventTitle && <span className={styles.eventTitle}>{eventTitle}</span>}
      <h1 className={styles.title}>
        {title} {highlight && <em>{highlight}</em>}
      </h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <div className={styles.divider} />
    </section>
  );
}

export default PageHeading;