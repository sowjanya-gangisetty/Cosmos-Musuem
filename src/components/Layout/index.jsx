import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./layout.module.css";

const Layout =() => {
  return (
    <div className={styles.layout}>
      <div className={styles.starBg} aria-hidden="true" />
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
