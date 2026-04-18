import { NavLink, Outlet, useLocation, Link } from "react-router-dom";
import PageHeading from "../../components/PageHeading";
import styles from "./exhibits.module.css";

function Exhibits() {
  const { pathname } = useLocation();
  const isIndex = pathname === "/exhibits" || pathname === "/exhibits/";

  return (
    <div>
      <PageHeading
        eventTitle="Gallery · Interactive Exhibits"
        title="Explore Our"
        highlight="Exhibits"
        subtitle="Dive deep into planetary science, spacecraft engineering, and the history of space exploration through our curated collections."
      />

      <div className={styles.subNav}>
        <div className={styles.subNavInner}>
          <NavLink
            to="/exhibits/planets"
            className={({ isActive }) =>
              `${styles.subLink} ${isActive ? styles.active : ""}`
            }
          >
            Planets
          </NavLink>
          <NavLink
            to="/exhibits/spacecrafts"
            className={({ isActive }) =>
              `${styles.subLink} ${isActive ? styles.active : ""}`
            }
          >
            Spacecrafts
          </NavLink>
        </div>
      </div>

      {isIndex ? (
        <div className={styles.indexGrid}>
          <Link to="/exhibits/planets" className={`${styles.indexCard} ${styles.bgPlanets}`}>
            <span className={styles.indexIcon}></span>
            <h2>Planets</h2>
            <p>Journey through all worlds of our solar system.</p>
          </Link>
          <Link to="/exhibits/spacecrafts" className={`${styles.indexCard} ${styles.bgSpacecrafts}`}>
            <span className={styles.indexIcon}></span>
            <h2>Spacecrafts</h2>
            <p>Historic vehicles that carried humans to the stars.</p>
          </Link>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default Exhibits;
