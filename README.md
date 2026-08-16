# 🥁 Drummer Portfolio

Portfólio desenvolvido para apresentar a trajetória do baterista **Eduardo Martins**, reunindo mais de 20 anos de carreira em uma experiência visual moderna, responsiva e de fácil navegação.

O projeto também funciona como um projeto prático de desenvolvimento front-end, explorando componentização, gerenciamento de estado, interação com APIs nativas do navegador e organização de uma aplicação React.

---

## 📖 Sobre o projeto

O Drummer Portfolio foi criado para centralizar os principais momentos da carreira de Eduardo Martins, incluindo artistas, bandas, gravações em estúdio, apresentações ao vivo, produções audiovisuais e registros musicais.

O projeto está sendo desenvolvido com foco em uma experiência visual cinematográfica e orientada à narrativa, valorizando fotografia, música, vídeo e a trajetória profissional.

A aplicação utiliza uma arquitetura baseada em componentes reutilizáveis e separação de responsabilidades.

---

## ✨ Funcionalidades

- História profissional
- Capítulos da trajetória musical
- Destaques da carreira
- Catálogo de áudios
- Filtros de áudios por artista
- Player de áudio customizado
- Reprodução e pausa de previews
- Controle de volume
- Barra de progresso sincronizada com a reprodução
- Seek para navegação dentro da faixa
- Exibição de duração e tempo restante
- Sincronização entre player e card da faixa atual
- Performances em vídeo
- Galeria de fotos
- Contato
- Navegação entre páginas com React Router
- Vídeos do YouTube incorporados
- Efeitos de interação e scroll
- Navegação responsiva em desenvolvimento

---

## 🧩 Arquitetura

O projeto utiliza uma estrutura baseada em componentes reutilizáveis e separação de responsabilidades.

A página de Áudios possui um componente principal responsável pelo gerenciamento dos estados da reprodução, filtros e faixa selecionada.

Componentes como `AudioCard`, `AudioFilters` e `AudioPlayer` recebem dados e callbacks através de props.

O player utiliza a API nativa de áudio do HTML5 para controlar reprodução, pausa, progresso, duração, volume e eventos da faixa.

Fluxo simplificado:

```text
Audios
   │
   ├── AudioHero
   │
   ├── AudioFilters
   │
   ├── AudioCard
   │
   ├── AudioCard
   │
   ├── AudioCard
   │
   └── AudioPlayer
           │
           ▼
      HTML5 Audio API