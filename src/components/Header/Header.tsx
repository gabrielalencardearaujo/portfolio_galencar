import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import Theme from './Theme';
import Languages from './Languages';

function Header() {

  return (
    <header>
      <div className={styles.logo}>
        <NavLink to='/' className={styles.logoDetails}>
          <strong className="active">G.</strong>Alencar
        </NavLink>
      </div>
      <div>
        <nav className={styles.navLinks}>
          <ul>
            <li><NavLink to='/projects' end>Projetos</NavLink></li>
            <li><NavLink to='education'>Formação</NavLink></li>
          </ul>
        </nav>
        <Theme />
        <Languages />
      </div>
    </header>
  )
}

export default Header;