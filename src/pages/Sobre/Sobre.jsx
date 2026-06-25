import styles from './Sobre.module.css'

export default function Sobre() {
  return (
    <div className={styles.pagina}>
      <div className={styles.cabecalho}>
        <h1 className={styles.titulo}>Sobre o GameVault</h1>
        <p className={styles.sub}>Conheça o projeto e as tecnologias utilizadas</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <span className={styles.icone}>🎮</span>
          <h2 className={styles.cardTitulo}>O Projeto</h2>
          <p className={styles.cardTexto}>
            GameVault é uma biblioteca digital de games desenvolvida como projeto final
            da disciplina de Linguagem de Programação para Internet na UNIUBE.
            A aplicação permite explorar, filtrar e descobrir jogos organizados por gênero.
          </p>
        </div>

        <div className={styles.card}>
          <span className={styles.icone}>⚛️</span>
          <h2 className={styles.cardTitulo}>Tecnologias</h2>
          <ul className={styles.lista}>
            <li>React com JavaScript</li>
            <li>Vite como bundler</li>
            <li>React Router DOM para rotas</li>
            <li>CSS Modules para estilização</li>
            <li>Dados mockados locais</li>
          </ul>
        </div>

        <div className={styles.card}>
          <span className={styles.icone}>✨</span>
          <h2 className={styles.cardTitulo}>Componente Criativo</h2>
          <p className={styles.cardTexto}>
            O <strong>GameFlipCard</strong> é o componente criativo do projeto. Ao clicar em um card
            de destaque na Home, ele realiza uma animação de rotação 3D revelando informações
            adicionais do game no verso, como desenvolvedor, plataformas e nota.
          </p>
        </div>

        <div className={styles.card}>
          <span className={styles.icone}>📚</span>
          <h2 className={styles.cardTitulo}>Funcionalidades</h2>
          <ul className={styles.lista}>
            <li>Navegação entre 4 páginas via SPA</li>
            <li>Filtro de games por gênero</li>
            <li>Cards com flip 3D interativo</li>
            <li>Página de detalhes por game</li>
            <li>Renderização condicional</li>
          </ul>
        </div>
      </div>

      <div className={styles.rodape}>
        <p>Desenvolvido com 💜 para a disciplina de Linguagem de Programação para Internet</p>
        <p className={styles.rodapeSub}>UNIUBE · 2026 · Professor Dr. Camilo Barreto</p>
      </div>
    </div>
  )
}