import { useParams, useNavigate } from 'react-router-dom'
import { games } from '../../data/games'
import styles from './Detalhes.module.css'

export default function Detalhes() {
  const { id } = useParams()
  const navigate = useNavigate()
  const game = games.find((g) => g.id === Number(id))

  if (!game) {
    return (
      <div className={styles.erro}>
        <h2>Game não encontrado.</h2>
        <button className={styles.botaoVoltar} onClick={() => navigate('/catalogo')}>
          Voltar ao Catálogo
        </button>
      </div>
    )
  }

  return (
    <div className={styles.pagina}>
      <button className={styles.botaoVoltar} onClick={() => navigate(-1)}>
        ← Voltar
      </button>

      <div className={styles.conteudo}>
        <div className={styles.imagemWrapper}>
          <img src={game.imagem} alt={game.titulo} className={styles.imagem} />
          <div className={styles.notaBadge}>⭐ {game.nota}</div>
        </div>

        <div className={styles.info}>
          <span className={styles.genero}>{game.genero}</span>
          <h1 className={styles.titulo}>{game.titulo}</h1>

          <div className={styles.metadados}>
            <div className={styles.meta}>
              <span className={styles.metaLabel}>Desenvolvedor</span>
              <span className={styles.metaValor}>{game.desenvolvedor}</span>
            </div>
            <div className={styles.meta}>
              <span className={styles.metaLabel}>Ano de Lançamento</span>
              <span className={styles.metaValor}>{game.ano}</span>
            </div>
            <div className={styles.meta}>
              <span className={styles.metaLabel}>Gênero</span>
              <span className={styles.metaValor}>{game.genero}</span>
            </div>
          </div>

          <div className={styles.plataformasWrapper}>
            <span className={styles.metaLabel}>Plataformas</span>
            <div className={styles.plataformas}>
              {game.plataformas.map((p) => (
                <span key={p} className={styles.plataforma}>{p}</span>
              ))}
            </div>
          </div>

          <div className={styles.descricaoWrapper}>
            <span className={styles.metaLabel}>Descrição</span>
            <p className={styles.descricao}>{game.descricao}</p>
          </div>

          <button className={styles.botaoCatalogo} onClick={() => navigate('/catalogo')}>
            Ver mais games
          </button>
        </div>
      </div>
    </div>
  )
}