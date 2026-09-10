# 🥁 Drummer Portfolio

Portfólio desenvolvido para apresentar a trajetória do baterista **Eduardo Martins**, reunindo mais de 20 anos de carreira em uma experiência visual moderna, responsiva e de fácil navegação.

O projeto também funciona como uma aplicação prática de desenvolvimento front-end, explorando **React, componentização, gerenciamento de estado e interação com APIs nativas do navegador**.

---

## 🌐 Projeto publicado

👉 https://eduardo-martins-tech.github.io/drummer-portfolio/

---

## 📖 Sobre o projeto

O Drummer Portfolio foi criado para centralizar momentos importantes da trajetória musical de Eduardo Martins, incluindo artistas, bandas, gravações em estúdio, apresentações ao vivo, vídeos e registros musicais.

A aplicação foi desenvolvida com foco em uma experiência visual elegante, valorizando fotografia, música, vídeo e a narrativa da trajetória profissional.

---

## ✨ Funcionalidades

- História e destaques da trajetória musical
- Performances em vídeo
- Integração com vídeos do YouTube
- Catálogo de áudios
- Filtros de músicas por artista
- Player de áudio customizado
- Reprodução e pausa de previews
- Controle de volume
- Barra de progresso e seek
- Exibição de duração e tempo restante
- Sincronização entre player e faixa selecionada
- Navegação entre páginas com React Router
- Efeitos de interação e scroll
- Deploy automatizado

---

## 🎵 Sistema de Áudio

A página de Discografia possui um player customizado desenvolvido com **React e HTML5 Audio API**.

O sistema utiliza gerenciamento de estado para controlar:

- Faixa selecionada
- Tempo atual da reprodução
- Duração da música
- Filtros por artista

A comunicação entre os componentes acontece através de **props e callbacks**, mantendo o gerenciamento principal centralizado na página de Áudios.

---

## 🧩 Arquitetura

O projeto utiliza uma estrutura baseada em **componentes reutilizáveis e separação de responsabilidades**.

Exemplo da estrutura da página de Áudios:

```text
Audios
   │
   ├── Navbar
   ├── AudioHero
   ├── AudioFilters
   ├── AudioCard
   ├── Footer
   └── AudioPlayer
           │
           ▼
      HTML5 Audio API
```

---

## 🚀 Tecnologias

- React
- Vite
- JavaScript (ES6+)
- HTML5
- CSS3
- React Router
- HTML5 Audio API
- Git
- GitHub
- GitHub Actions
- GitHub Pages
- YouTube Embed

---

## 📌 Status do Projeto

🚧 **Em desenvolvimento**

### ✅ Concluído

- Estrutura inicial em React + Vite
- Organização baseada em componentes
- Navbar e navegação com React Router
- Homepage completa
- Seção de destaques e capítulos da trajetória
- Página de Performances
- Integração com vídeos do YouTube
- Página de Áudios / Discografia
- Sistema de filtros por artista
- Player de áudio customizado
- Barra de progresso sincronizada
- Controle de volume
- Footer
- Deploy no GitHub Pages
- Deploy automatizado com GitHub Actions

---

## 🛣️ Roadmap

- [ ] Página História
- [ ] Página Banda
- [ ] Galeria de fotos
- [ ] Página Contato
- [ ] Finalizar previews das faixas
- [ ] Responsividade completa
- [ ] SEO

---

## ⚙️ Deploy

O projeto utiliza **GitHub Actions** para realizar automaticamente o build e deploy no **GitHub Pages** a cada atualização enviada para a branch `main`.

```text
Push na main
     ↓
GitHub Actions
     ↓
npm install
     ↓
npm run build
     ↓
GitHub Pages
```
