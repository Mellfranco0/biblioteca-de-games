import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.texto}>
        🎮 GameVault — Sua biblioteca de games favoritos
      </p>
      <p className={styles.sub}>
        Desenvolvido com React + Vite · UNIUBE 2026
      </p>
    </footer>
  )
}