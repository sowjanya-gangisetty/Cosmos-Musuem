
import styles from "./home.module.css";

function Home() {

  return (
    <div className={styles.page}>
      <section className={styles.main}>
        
        <div className={styles.mainContent}>
          <h1 className={styles.mainTitle}>
            Explore the<em>Universe</em>
          </h1>
          <p className={styles.mainSubTitle}>
            Journey from the formation of the solar system to the edges of the
            observable universe. Interactive exhibits, live space data, and
            guided tours for all ages.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
