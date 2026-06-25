import styles from './FilterBar.module.css'
import { generos } from '../../data/games'

export default function FilterBar({ filtroAtivo, onFiltroChange }) {
  return (
    <div className={styles.container}>
      {generos.map((genero) => (
        <button
          key={genero}
          className={`${styles.botao} ${filtroAtivo === genero ? styles.ativo : ''}`}
          onClick={() => onFiltroChange(genero)}
        >
          {genero}
        </button>
      ))}
    </div>
  )
}