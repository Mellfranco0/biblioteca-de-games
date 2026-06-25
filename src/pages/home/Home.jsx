import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { games } from '../../data/games'
import GameFlipCard from '../../components/GameFlipCard/GameFlipCard'
import styles from './Home.module.css'

export default function Home() {
  const navigate = useNavigate()
  const [busca, setBusca] = useState('')

  const destaques = games.filter((g) => g.destaque)

  function handleBusca(e) {
    e.preventDefault()
    if (busca.trim()) {
      navigate('/catalogo')
    }
  }

  return (
    <div className={styles.pagina}>
      <section className={styles.hero}>
        <div className={styles.heroConteudo}>
          <h1 className={styles.heroTitulo}>
            Sua <span className={styles.destaque}>Biblioteca</span> de Games
          </h1>
          <p className={styles.heroSub}>
            Explore, descubra e salve seus jogos favoritos em um só lugar.
          </p>
          <form className={styles.buscaForm} onSubmit={handleBusca}>
            <input
              type="text"
              placeholder="Buscar um game..."
              className={styles.buscaInput}
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
            <button type="submit" className={styles.buscaBotao}>Buscar</button>
          </form>
          <button className={styles.botaoDestaque} onClick={() => navigate('/catalogo')}>
            Ver Catálogo Completo
          </button>
        </div>
        <div className={styles.heroDecoracao}>
          <span className={styles.emoji}>🎮</span>
        </div>
      </section>

      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>⭐ Games em Destaque</h2>
        <p className={styles.secaoSub}>Clique nos cards para descobrir mais informações</p>
        <div className={styles.grid}>
          {destaques.map((game) => (
            <GameFlipCard
              key={game.id}
              id={game.id}
              titulo={game.titulo}
              genero={game.genero}
              nota={game.nota}
              imagem={game.imagem}
              desenvolvedor={game.desenvolvedor}
              plataformas={game.plataformas}
              ano={game.ano}
            />
          ))}
        </div>
      </section>

      <section className={styles.bannerCatalogo}>
        <div className={styles.bannerTexto}>
          <h2>Quer ver todos os games?</h2>
          <p>Explore nosso catálogo completo com filtros por gênero.</p>
        </div>
        <button className={styles.bannerBotao} onClick={() => navigate('/catalogo')}>
          Ir para o Catálogo
        </button>
      </section>
    </div>
  )
}