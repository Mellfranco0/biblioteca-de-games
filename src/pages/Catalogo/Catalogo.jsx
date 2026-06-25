import { useState } from 'react'
import { games } from '../../data/games'
import GameCard from '../../components/GameCard/GameCard'
import FilterBar from '../../components/FilterBar/FilterBar'
import styles from './Catalogo.module.css'

export default function Catalogo() {
  const [filtro, setFiltro] = useState('Todos')

  const gamesFiltrados = filtro === 'Todos'
    ? games
    : games.filter((g) => g.genero === filtro)

  return (
    <div className={styles.pagina}>
      <div className={styles.cabecalho}>
        <h1 className={styles.titulo}>🎮 Catálogo de Games</h1>
        <p className={styles.sub}>
          {gamesFiltrados.length} {gamesFiltrados.length === 1 ? 'game encontrado' : 'games encontrados'}
        </p>
      </div>

      <FilterBar filtroAtivo={filtro} onFiltroChange={setFiltro} />

      {gamesFiltrados.length === 0 ? (
        <div className={styles.vazio}>
          <p>Nenhum game encontrado para este gênero.</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {gamesFiltrados.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              titulo={game.titulo}
              genero={game.genero}
              nota={game.nota}
              imagem={game.imagem}
              descricaoCurta={game.descricaoCurta}
            />
          ))}
        </div>
      )}
    </div>
  )
}