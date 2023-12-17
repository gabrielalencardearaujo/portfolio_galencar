import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import Theme from "./Theme";
import Languages from "./Languages";
import React from "react";

function Header() {
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
      <div>
        <nav className={styles.navLinks}>
          <ul>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" end>
                Projetos
              </NavLink>
            </li>
            <li>
              <NavLink to="/education">Formação</NavLink>
            </li>
          </ul>
        </nav>
        <Theme />
        <Languages />
      </div>
    </header>
  );
}

export default Header;
