# 🎨 Tailwind Theme Lab

Una app en React + Vite + TailwindCSS (V3) para practicar y demostrar cómo implementar múltiples temas con soporte de idioma y estilos accesibles. Ideal para usar como boilerplate o proyecto de portfolio.

---

## 🌟 Preview

<p align="center">
  <img src="https://i.imgur.com/XXXXX.png" width="600" alt="Preview 1" />
  <br/>
  <img src="https://i.imgur.com/YYYYY.png" width="600" alt="Preview 2" />
</p>

(A editar por imagenes reales)

---

## 🚀 Características

- 🎨 Sistema de temas visuales (Pastel, Oscuro, Naturaleza, Alto Contraste)
- 🌓 Cambio de tema con persistencia en `localStorage`
- 🌐 Selector de idioma (Español / Inglés)
- 🧩 Componentes desacoplados y reutilizables (Cards, Buttons)
- 🌍 Página 404 personalizada
- ✅ TailwindCSS con clases dinámicas basadas en CSS variables
- ⚛️ Arquitectura organizada: Context, Layout, Pages, Components

---

## 🛠️ Stack usado

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://v3.tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- `localStorage` para persistencia de estado
- `Context API` para temas e idioma

---

## 📦 Instalación y uso local

```bash
git clone https://github.com/Andrew-Mtz/tailwind-theme-lab-V4.git
cd tailwind-theme-lab-V3
npm install
npm run dev
```

---

## 🖌️ Agregar un nuevo tema

1. Definí las variables CSS en tu archivo `index.css`:

```css
.theme-mi-tema {
  --color-bg: #fdf6e3;
  --color-text: #073642;
  ...;
}
```

2. Agregalo al objeto `themes` en `src/themes/index.ts`.

3. Agregalo al objeto `translations` en `src/i18n/translations.ts`.

4. ¡Listo! El selector lo detectará automáticamente.

---

## 🤝 Licencia

MIT

---

## ✨ Autor

Hecho con cariño por [Andrew Martinez](https://github.com/Andrew-Mtz)
