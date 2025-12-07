

# 🎨 ORBIX — Design Tokens (v1)

Documento oficial contendo a paleta de cores, tokens semânticos e padrões de design adotados pela aplicação Orbix.

## 1. Paleta Base (Core Tokens)

Essas são as cores fundamentais do sistema.
Elas **não** são usadas diretamente nos componentes, apenas servem para gerar os tokens semânticos.

```css
:root {
  /* Core Brand */
  --color-brand: #6C5CE7;
  --color-brand-light: #A29BFE;
  --color-brand-dark: #4B39C6;

  /* Success / Progressão de Hábito */
  --color-success: #00C896;
  --color-success-dark: #00A77D;

  /* Warning */
  --color-warning: #FFB830;
  --color-warning-dark: #E09F26;

  /* Danger */
  --color-danger: #FF6B6B;
  --color-danger-dark: #E25757;

  /* Neutros Globais */
  --color-white: #FFFFFF;
  --color-black: #0E0E0E;

  --color-gray-50: #F7F8FA;
  --color-gray-100: #ECEEF1;
  --color-gray-200: #DADDE2;
  --color-gray-300: #C4C8CF;
  --color-gray-400: #9CA2AD;
  --color-gray-500: #787E87;
  --color-gray-600: #555B63;
  --color-gray-700: #3A3F46;
  --color-gray-800: #24272B;
  --color-gray-900: #16181A;
}
```

## 2. Tokens Semânticos — Light Mode

Essas são as cores que o app realmente utiliza no modo claro.

```css
:root[data-theme="light"] {
  /* Backgrounds */
  --bg-primary: var(--color-white);
  --bg-secondary: var(--color-gray-50);
  --bg-elevated: var(--color-white);

  /* Text */
  --text-primary: var(--color-gray-900);
  --text-secondary: var(--color-gray-600);
  --text-tertiary: var(--color-gray-400);

  /* Borders */
  --border-color: var(--color-gray-200);

  /* Brand */
  --brand-main: var(--color-brand);
  --brand-hover: var(--color-brand-dark);

  /* Feedback */
  --success: var(--color-success);
  --warning: var(--color-warning);
  --danger: var(--color-danger);
}
```

## 3. Tokens Semânticos — Dark Mode

Mesmos tokens, porém com contraste adequado ao modo escuro.

```css
:root[data-theme="dark"] {
  /* Backgrounds */
  --bg-primary: var(--color-black);
  --bg-secondary: var(--color-gray-800);
  --bg-elevated: var(--color-gray-900);

  /* Text */
  --text-primary: var(--color-gray-50);
  --text-secondary: var(--color-gray-300);
  --text-tertiary: var(--color-gray-500);

  /* Borders */
  --border-color: var(--color-gray-700);

  /* Brand */
  --brand-main: var(--color-brand-light);
  --brand-hover: var(--color-brand);

  /* Feedback */
  --success: var(--color-success);
  --warning: var(--color-warning);
  --danger: var(--color-danger);
}
```

## 4. Spacing, Shadows e Radius

Variáveis opcionais, mas recomendadas para manter a consistência espacial.

```css
:root {
  /* Radius */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 18px;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;

  /* Shadows */
  --shadow-1: 0 1px 3px rgba(0,0,0,0.1);
  --shadow-2: 0 4px 8px rgba(0,0,0,0.15);
  --shadow-3: 0 8px 16px rgba(0,0,0,0.2);
}
```

## 5. Observações

*   **Uso:** Apenas tokens semânticos (ex: `--bg-primary`) devem ser usados diretamente nos componentes. Evite usar `--color-gray-100` diretamente.
*   **Localização do Arquivo:** Preferencialmente em `/design/tokens.css`.
*   **Alternância de Tema:** Para alternar entre Light e Dark mode, basta alterar o atributo `data-theme` na tag HTML.

**Exemplo de implementação HTML:**

```html
<!-- Modo Claro -->
<html data-theme="light">

<!-- Modo Escuro -->
<html data-theme="dark">
```