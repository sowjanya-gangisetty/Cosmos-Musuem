import styles from "./missionDetails.module.css";
import { useState } from "react";

const MissionDetails = ({ mission }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <article className={styles.card} >
      <div className={styles.cardHeader} onClick={() => setOpen((opencard) => !opencard)}>
        <div className={styles.cardLeft}>
          <span className={styles.phase}>{mission.phase}</span>
          <h3 className={styles.cardTitle}>{mission.name}</h3>
          <p className={styles.cardAgency}>{mission.agency}</p>
        </div>
        <div className={styles.cardRight}>
          <div className={styles.yearBadge}>
            <span className={styles.yearLabel}>Target</span>
            <span className={styles.yearValue}>{mission.targetYear}</span>
          </div>
          <span className={`${styles.chevron} ${open ? styles.open : ""}`}>›</span>
        </div>
      </div>

      <p className={styles.goal}>{mission.goal}</p>

      {open && (
        <div className={styles.expanded}>
          <p className={styles.description}>{mission.description}</p>
          <div className={styles.milestones}>
            <h4 className={styles.milestonesTitle}>Key Milestones</h4>
            <ul className={styles.milestoneList}>
              {mission.keyMilestones.map((milestone) => (
                <li key={milestone} className={styles.milestone}>
                  {milestone}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  );
}

export default MissionDetails;