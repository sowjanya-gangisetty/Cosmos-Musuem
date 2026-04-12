import { spacecrafts } from "../../../data/museumData";
import styles from "./spacecrafts.module.css";

function Spacecrafts() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Historic Spacecraft</h2>

        <div className={styles.grid}>
          {spacecrafts.map((spacecraft) => (
            <article key={spacecraft.id} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.cardTopLeft}>
                  <span className={styles.type}>{spacecraft.type}</span>
                </div>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.name}>{spacecraft.name}</h3>
                <p className={styles.desc}>{spacecraft.description}</p>
                <div className={styles.stats}>
                  {[
                    { label: "Agency",            value: spacecraft.agency },
                    { label: "Launch Year",        value: spacecraft.launchYear },
                    { label: "Status",             value: spacecraft.status },
                    { label: "Distance Traveled",  value: spacecraft.distanceTraveled },
                  ].map(({ label, value }) => (
                    <div key={label} className={styles.stat}>
                      <span className={styles.statLabel}>{label}</span>
                      <span className={styles.statValue}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.achievement}>
                <span className={styles.achievementLabel}> Key Achievement</span>
                <p className={styles.achievementText}>{spacecraft.achievement}</p>
              </div>

            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Spacecrafts;
