import { useNavigate } from 'react-router-dom'
import styles from './GameCard.module.css'

export default function GameCard({ id, titulo, genero, nota, imagem, descricaoCurta }) {
  const navigate = useNavigate()

  function handleVerDetalhes() {
    navigate(`/detalhes/${id}`)
  }

  return (
    <div className={styles.card}>
      <div className={styles.imagemWrapper}>
        <img src={imagem} alt={titulo} className={styles.imagem} />
        <span className={styles.genero}>{genero}</span>
      </div>
      <div className={styles.corpo}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <p className={styles.descricao}>{descricaoCurta}</p>
        <div className={styles.rodape}>
          <span className={styles.nota}>⭐ {nota}</span>
          <button className={styles.botao} onClick={handleVerDetalhes}>
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  )
}