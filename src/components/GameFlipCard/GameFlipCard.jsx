import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './GameFlipCard.module.css'

export default function GameFlipCard({ id, titulo, genero, nota, imagem, desenvolvedor, plataformas, ano }) {
  const [virado, setVirado] = useState(false)
  const navigate = useNavigate()

  function handleFlip() {
    setVirado(!virado)
  }

  function handleVerJogo(e) {
    e.stopPropagation()
    navigate(`/detalhes/${id}`)
  }

  return (
    <div className={styles.cena} onClick={handleFlip}>
      <div className={`${styles.card} ${virado ? styles.virado : ''}`}>
        <div className={styles.frente}>
          <img src={imagem} alt={titulo} className={styles.imagem} />
          <div className={styles.overlay}>
            <span className={styles.genero}>{genero}</span>
            <h3 className={styles.titulo}>{titulo}</h3>
            <p className={styles.dica}>Clique para ver mais</p>
          </div>
        </div>
        <div className={styles.verso}>
          <div className={styles.versoConteudo}>
            <h3 className={styles.versoTitulo}>{titulo}</h3>
            <div className={styles.versoInfo}>
              <p><span className={styles.label}>🏢 Dev:</span> {desenvolvedor}</p>
              <p><span className={styles.label}>📅 Ano:</span> {ano}</p>
              <p><span className={styles.label}>⭐ Nota:</span> {nota}</p>
              <p><span className={styles.label}>🎮 Plataformas:</span></p>
              <div className={styles.plataformas}>
                {plataformas.map((p) => (
                  <span key={p} className={styles.plataforma}>{p}</span>
                ))}
              </div>
            </div>
            <button className={styles.botao} onClick={handleVerJogo}>
              Ver Página Completa
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}