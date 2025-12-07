

# 📘 ORBIX — Guia Oficial de Stack, Padrões e Fluxo de Desenvolvimento

Este documento define a stack oficial, como codar, como commitar, como organizar branches e como qualquer dev deve trabalhar dentro da Orbix.

A regra é simples: **leu isso aqui → já sabe jogar o game.**

## 🧱 1. Stack Oficial

### Frontend
*   **Core:** React + Vite
*   **Linguagem:** TypeScript
*   **Estilização:** TailwindCSS
*   **Mobile:** PWA (manifest + service worker)
*   **State Management:** Zustand (ou Jotai) — *Gerenciamento de estado simples e clean*
*   **Data Fetching:** React Query — *Cache inteligente de requisições*
*   **UI Kit:** Shadcn/UI — *Componentes padrão do projeto*
*   **Linting:** ESLint + Prettier — *Padronização*

### Backend / Infra
*   **Core:** Supabase
*   **Database:** PostgreSQL
*   **Auth:** Supabase Auth
*   **Storage:** Supabase Storage
*   **Serverless:** Edge Functions
*   **Futuro (se necessário):** Node + Express *(Apenas quando o MVP pedir regras mais complexas)*

### Ferramentas
*   **Git:** GitHub Desktop / GitHub
*   **Design:** Figma (UI/UX)
*   **Deploy Front:** Vercel
*   **Hosting DB:** Supabase Hosting

## 🔥 2. Estrutura de Pastas do Front

```text
src/
  ├── assets/
  ├── components/
  ├── hooks/
  ├── pages/
  ├── features/
  ├── lib/
  ├── store/
  ├── services/
  ├── styles/
  ├── routes/
  └── utils/
public/
index.html
vite.config.ts
```

> **Regra de ouro:**
> Se virou um mini-módulo com mais de 1 tela → vai para `/features`.

## 🌱 3. Branch Strategy (Fluxo Git)

### Branches fixas
*   `main` → Produção (Estável)
*   `dev` → Desenvolvimento contínuo

### Branches de feature
Padrão: `feature/nome-da-feature`

**Exemplos:**
*   `feature/auth`
*   `feature/habits-page`
*   `feature/pwa-setup`

### Branches de hotfix
Padrão: `hotfix/nome-do-bug`

## 🧾 4. Padrão de Commits (Conventional Commits)

Formato obrigatório:
`tipo(scope): mensagem curta e direta`

### Tipos permitidos
*   **feat** → nova funcionalidade
*   **fix** → correção de bug
*   **docs** → documentação
*   **style** → coisa visual ou formatação (espaços, vírgulas)
*   **refactor** → refatoração sem mudança de comportamento
*   **perf** → melhoria de performance
*   **test** → testes
*   **chore** → manutenção geral (dependências, configs…)

### Exemplos
```bash
feat(auth): cria fluxo de login com supabase
fix(habits): corrige bug da contagem diária
docs(stack): adiciona instruções de setup
style(ui): ajusta espaçamentos no card
refactor(store): move estado geral para zustand
```

## 🧩 5. Padrões de Código

### Naming
*   **Arquivos:** `kebab-case` (ex: `user-profile.tsx`)
*   **Componentes:** `PascalCase` (ex: `UserProfile`)
*   **Estados/Funções:** `camelCase` (ex: `isLoading`, `handleSubmit`)
*   **Constantes:** `UPPER_CASE` (ex: `API_URL`)

### Importações organizadas
1.  Libs externas (React, Zustand...)
2.  Libs internas (Hooks, Utils...)
3.  Componentes
4.  Styles

### React
*   Apenas **Componentes Funcionais**.
*   **Regra mínima:** 1 hook custom se a lógica começar a ficar complexa ("feder").
*   Colocar hooks dentro de `/hooks` quando for lógica reutilizável.

## 🧪 6. Testes (Fase 2)

*Quando chegarmos na maturidade:*
*   **Ferramenta:** Vitest
*   **Estrutura:** Pastas `__tests__` ao lado do módulo testado.

## 🧩 7. Fluxo de Desenvolvimento (Dia a dia)

1.  **Criar branch:** `git checkout -b feature/minha-feature`
2.  **Implementar:** Mantendo o padrão do projeto.
3.  **Commitar:** Usando Conventional Commits.
4.  **Pull Request:** Abrir PR para a branch `dev`.
5.  **Code Review:** Revisão + Merge.
6.  **Deploy:** Automático na Vercel (ao cair na branch principal).

## 🎯 8. Objetivo do MVP

*   Precisamos lançar **rápido**, **bonito** e **funcional**.
*   **Web-first**, mobile com **PWA**.
*   Nada de escopão gigante.
*   **Foco:** Só o necessário pra validar se o fluxo "hábito + rotina + IA" vende.