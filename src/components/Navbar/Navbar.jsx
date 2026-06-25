import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.logoIcone}>🎮</span>
        <span className={styles.logoTexto}>GameVault</span>
      </div>
      <ul className={styles.links}>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.ativo : styles.link} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalogo" className={({ isActive }) => isActive ? styles.ativo : styles.link}>
            Catálogo
          </NavLink>
        </li>
        <li>
          <NavLink to="/sobre" className={({ isActive }) => isActive ? styles.ativo : styles.link}>
            Sobre
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}