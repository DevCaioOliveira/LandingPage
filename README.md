# 🚀 Portfólio Personal & Landing Page Interactive (2026 Edition)

![License](https://img.shields.io/badge/license-MIT-violet.svg)
![Version](https://img.shields.io/badge/version-1.0.0-cyan.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

> **Landing Page e Portfólio Pessoal** focado em alta performance, micro-interações fluidas e estética moderna baseada em tendências de UI/UX de 2026 (*Glassmorphism*, gradientes neon, suporte a dark mode nativo e tipografia fluida).

---

## 🌟 Destaques & Funcionalidades

- **🎨 Design System Moderno (2026 Trends):**
  - Estética *Dark Mode* por padrão com sombras e *glows* radiais sutis.
  - Efeitos de *Glassmorphism* com desfoque de fundo (`backdrop-filter`).
  - Layout totalmente responsivo com grid flexível adaptável a mobile, tablet e desktop.
- **⚡ Performance & Interatividade ES6+:**
  - **Typewriter Effect:** Efeito de digitação dinâmica de cargos na seção Hero.
  - **3D Interactive Tilt:** Card interativo com rotação no mouse hover na Hero section.
  - **Scroll Progress Bar:** Barra superior com indicação do nível de rolagem da página.
  - **Active Scroll Spy:** O menu destaca automaticamente a seção ativa ao rolar a tela.
  - **Filtro de Projetos Dinâmico:** Filtragem rápida por categoria sem recarregar a página.
  - **Scroll Reveal Animations:** Aparição suave de elementos via `IntersectionObserver`/Scroll.
  - **Validação de Formulário em Tempo Real:** Validação dinâmica dos campos de contato em JS puro.
- **🧱 Arquitetura Modular:**
  - Estrutura pronta para fácil adição de novas experiências (Timeline) e projetos (Grid Cards).

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído priorizando alta performance e mínimo uso de dependências pesadas:

* **HTML5:** Marcação semântica focada em SEO e Acessibilidade (a11y).
* **CSS3 & Custom Properties:** Design System com Variáveis CSS (`:root`) para temas e Tailwind CSS (via CDN para utilitários rápidos).
* **JavaScript (ES6+):** Programação funcional em JS puro (Vanilla) para animações, filtros e validações.
* **Lucide Icons:** Biblioteca de ícones vetoriais modernos e leves.
* **Google Fonts (Inter):** Tipografia limpa otimizada para telas digitais.

---

## 📁 Estrutura do Projeto

```text
.
├── index.html     # Estrutura semântica principal e conteúdo da página
├── style.css      # Variáveis do tema, animações e estilos customizados
├── script.js     # Lógica interativa em JS (Typewriter, Tilt 3D, Filtros, Validação)
└── README.md      # Documentação oficial do repositório
