import styles from "./home.module.css";
import { useState, useEffect } from "react";

const Home = () => {

  const [apod, setApod] = useState(null);
  const [apodLoading, setApodLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_NASA_API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setApod(data);
        setApodLoading(false);
      })
      .catch(() => setApodLoading(false));
  }, []);

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

    <section className={styles.apodSection}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionLabel}>NASA API · Live Data</span>
            <h2 className={styles.sectionTitle}>Astronomy Picture of the Day</h2>
          </div>
        </div>

        {apodLoading ? (
          <div className={styles.loading}>
            <span className={styles.spinner} />
            Loading from NASA...
          </div>
        ) : apod ? (
          <div className={styles.apodCard}>
            <div className={styles.apodImage}>
              {apod.media_type === "image" ? (
                <img src={apod.url} alt={apod.title} />
              ) : (
                <div className={styles.apodFallback}>Image Unavailable</div>
              )}
            </div>
            <div className={styles.apodContent}>
              <p className={styles.apodLabel}>Featured Image · NASA APOD</p>
              <h3 className={styles.apodTitle}>{apod.title}</h3>
              <p className={styles.apodDesc}>{apod.explanation}</p>
              <p className={styles.apodDate}>{apod.date}</p>
            </div>
          </div>
        ) : (
          <div className={styles.apodCard}>
            <div className={styles.apodFallback}>Image Unavailable</div>
            <div className={styles.apodContent}>
              <p className={styles.apodLabel}>NASA APOD</p>
              <h3 className={styles.apodTitle}>Today&apos;s cosmic view</h3>
              <p className={styles.apodDesc}>
                Unable to load today's image. Check back soon!
              </p>
            </div>
          </div>
        )}
      </section>

    </div>

    
  );
}

export default Home;
