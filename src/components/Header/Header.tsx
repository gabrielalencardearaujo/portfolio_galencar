import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import Theme from "./Theme";
// import Languages from "./Languages";
import React from "react";

function Header() {
  const [menuActive, setMenuActive] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.getElementsByTagName("title")[0].textContent =
          "Home | G.Alencar";
        break;
      case "/projects":
        document.getElementsByTagName("title")[0].textContent =
          "Projects | G.Alencar";
        break;
      case "/education":
        document.getElementsByTagName("title")[0].textContent =
          "Education | G.Alencar";
        break;
    }
  }, [location]);

  return (
    <header id="header">
      <div className="logo">
        <NavLink to="/" className="logoDetails">
          <strong className="active">G.</strong>Alencar
        </NavLink>
      </div>

      <div
        className={`${styles.mobileMenu} ${
          menuActive ? styles.menuActive : ""
        }`}
        onClick={() => setMenuActive(!menuActive)}
      >
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>

      <nav
        className={`${styles.navLinks} ${menuActive ? styles.menuActive : ""}`}
      >
        <ul>
          <li onClick={() => setMenuActive(!menuActive)}>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li onClick={() => setMenuActive(!menuActive)}>
            <NavLink to="/projects">
              Projetos
            </NavLink>
          </li>
          <li onClick={() => setMenuActive(!menuActive)}>
            <NavLink to="/education">Formação</NavLink>
          </li>
          <li onClick={() => setMenuActive(!menuActive)}>
            <Theme />
          </li>
          {/* <li onClick={() => setMenuActive(!menuActive)}>
            <Languages />
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
