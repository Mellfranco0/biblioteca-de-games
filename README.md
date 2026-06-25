# 🎮 GameVault — Biblioteca de Games

## Integrantes do Grupo

| Nome | RA |
|------|----|
| SEU NOME AQUI | SEU RA AQUI |
| NOME DO COLEGA | RA DO COLEGA |

## Descrição do Projeto

GameVault é uma Single Page Application (SPA) desenvolvida com React, JavaScript e Vite.
A aplicação funciona como uma biblioteca digital de games, permitindo ao usuário explorar
um catálogo, filtrar por gênero, visualizar detalhes de cada jogo e interagir com
componentes visuais criativos.

## Tema Escolhido

Biblioteca de Games

## Tecnologias Utilizadas

- React + JavaScript
- Vite
- React Router DOM
- CSS Modules

## Principais Funcionalidades

- Navegação entre 4 páginas via SPA com React Router DOM
- Catálogo de games com filtro por gênero (Lift State Up)
- Cards interativos com animação flip 3D (componente criativo)
- Página de detalhes individual por game
- Renderização condicional para estados de filtro vazio e game não encontrado
- Dados mockados locais organizados em arquivo separado

## Passos para Instalação

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/biblioteca-de-games.git

# Entre na pasta
cd biblioteca-de-games

# Instale as dependências
npm install
```

## Passos para Execução

```bash
npm run dev
```

Acesse em: http://localhost:5173

## Link do Repositório

https://github.com/SEU_USUARIO/biblioteca-de-games

## Componente Criativo — GameFlipCard

O **GameFlipCard** é o componente criativo autoral do projeto, localizado em
`src/components/GameFlipCard/`.

Ao clicar em um card de game em destaque na página Home, o componente realiza uma
animação de rotação 3D (flip) utilizando CSS `transform: rotateY(180deg)` com
`perspective` e `backface-visibility`, revelando o verso do card com informações
adicionais: desenvolvedor, ano de lançamento, nota e plataformas disponíveis.

O verso também conta com um botão que navega para a página de detalhes completos
do game via `useNavigate`. A interação é intuitiva, visualmente diferenciada e
integrada ao tema do projeto.   