import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/exhibits", label: "Exhibits" },
  { to: "/missions", label: "Missions" },
  { to: "/about", label: "About" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <div className={styles.logoIcon}>🌌</div>
          <div className={styles.logoText}>
            CosmosMuseum
            <span className={styles.logoSub}>Space Exploration</span>
          </div>
        </NavLink>

        <nav className={styles.nav} aria-label="Main navigation">
          {navItems.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`${styles.mobileNav} ${menuOpen ? styles.open : ""}`}>
        {navItems.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `${styles.mobileNavLink} ${isActive ? styles.active : ""}`
            }
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </header>
  );
}

export default Header;
