# 🥁 Drummer Portfolio

Portfólio desenvolvido para apresentar a trajetória do baterista **Eduardo Martins**, reunindo mais de 20 anos de carreira em uma experiência visual moderna, responsiva e de fácil navegação.

O projeto nasceu de uma necessidade real: o material da carreira estava espalhado entre vídeos no YouTube, álbuns no Spotify e fotos em diferentes redes. O site centraliza essa história em um só lugar e, ao mesmo tempo, serviu como estudo prático de **React, componentização, gerenciamento de estado e APIs nativas do navegador**.

---

## 🌐 Projeto publicado

👉 https://eduardo-martins-tech.github.io/drummer-portfolio/

---

## ✨ Funcionalidades

- **Início:** apresentação, capítulos com destaques da carreira e vídeos em destaque
- **Bio:** história completa da trajetória musical
- **Áudios / Discografia:** catálogo com 23 álbuns gravados, filtros por artista e links para o Spotify
- **Galeria:** registros de shows, bastidores e gravações, com visualização ampliada e navegação por teclado
- **Performances:** shows e clipes integrados ao YouTube
- **Contato:** links diretos para WhatsApp, e-mail, Instagram e Facebook no rodapé
- Layout responsivo para celular, tablet e desktop
- Pré-visualização personalizada ao compartilhar o link (Open Graph)

---

## 🎵 Player de áudio

A página de Discografia possui um player próprio, desenvolvido com **React e a HTML5 Audio API**, sem bibliotecas externas.

- Reprodução e pausa dos trechos
- Avançar e voltar 10 segundos
- Barra de progresso com seek por clique ou arraste (mouse e toque)
- Controle de volume e mudo
- Tempo atual e tempo restante
- Sincronização entre o player e o card da faixa selecionada

O estado principal (faixa atual, tempo, duração e filtro ativo) fica centralizado na página de Áudios, e a comunicação entre os componentes acontece por **props e callbacks**.

---

## 🧩 Arquitetura

Estrutura baseada em **componentes reutilizáveis e separação de responsabilidades**: cada componente tem sua própria pasta com JSX e CSS, os dados ficam separados em `src/data` e as cores e fontes são centralizadas em variáveis CSS.

```text
src
├── components/     # Navbar, Hero, AudioPlayer, AudioCard, Footer...
├── pages/          # Home, Bio, Audios, Galeria, Performances
├── data/           # catálogo de áudios e performances
├── styles/         # reset, variáveis, tipografia e estilos globais
└── assets/         # imagens otimizadas
```

Exemplo da página de Áudios:

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

## ⚡ Desempenho e acessibilidade

- Imagens comprimidas (de ~44 MB para ~5 MB no total)
- Carregamento sob demanda (`loading="lazy"`) em imagens e vídeos fora da tela inicial
- Textos alternativos em todas as imagens e `aria-label` nos controles do player
- Um título principal (`h1`) por página
- Foco visível para navegação por teclado

---

## 🚀 Tecnologias

- React
- Vite
- JavaScript (ES6+)
- HTML5 e CSS3
- React Router
- HTML5 Audio API
- Git e GitHub
- GitHub Actions
- GitHub Pages
- YouTube Embed

---

## 📌 Status do projeto

✅ **Versão 1.0 publicada**

### 🛣️ Próximos passos

- [ ] SEO (sitemap e metadados por página)

---

## ⚙️ Deploy

O projeto usa **GitHub Actions** para gerar o build e publicar automaticamente no **GitHub Pages** a cada atualização na branch `main`.

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

Como o site é uma SPA com React Router, o workflow copia o `index.html` para `404.html` depois do build. Assim, links diretos para páginas internas (como `/audios`) funcionam normalmente.

---

## 💻 Rodando localmente

```bash
git clone https://github.com/eduardo-martins-tech/drummer-portfolio.git
cd drummer-portfolio
npm install
npm run dev
```
