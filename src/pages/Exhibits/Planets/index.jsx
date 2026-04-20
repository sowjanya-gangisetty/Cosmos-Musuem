import { planets } from "../../../data/museumData";
import styles from "./planets.module.css";
import { getImageURL } from "../../../utils/imagesFunction";

const Planets = () => {

  return (
    <div className={styles.page}>
      <div className={styles.container}>
       <h2 className={styles.heading}>Solar System Planets</h2>
        <div className={styles.cardGrid}>
          {planets.map((planet) => (
            <article key={planet.id} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.planetImgWrap}>
                  <img
                    src={getImageURL(planet.image)}
                    alt={planet.name}
                    className={styles.planetImg}
                  />
                </div>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.name}>{planet.name}</h3>
                <span className={styles.type}>{planet.type}</span>
                <p className={styles.description}>{planet.description}</p>
                <div className={styles.stats}>
                  <div className={styles.stat}>
                    <span className={styles.statLabel}>Distance</span>
                    <span className={styles.statValue}>{planet.distanceFromSun}</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statLabel}>Diameter</span>
                    <span className={styles.statValue}>{planet.diameter}</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statLabel}>Moons</span>
                    <span className={styles.statValue}>{planet.moons}</span>
                  </div>
                </div>
              </div>

              <div className={styles.cardBottom}>
                <p className={styles.funFact}>
                  <span className={styles.funFactLabel}>Fun Fact</span>
                  {planet.funFact}
                </p>
              </div>

            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Planets;