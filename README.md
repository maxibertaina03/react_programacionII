# Práctica de React — Programación II

Primera práctica de React de la materia Programación II: una página con tres componentes chicos para practicar props, estado y eventos.

**Alumno:** Máximo Bertaina

## Qué tiene

| Componente | Qué practica |
| --- | --- |
| `Saludo` | Recibir datos por **props** (`<Saludo nombre="Masita" />`). |
| `Contador` | Estado con **`useState`** y eventos `onClick` para sumar y restar. |
| `Formulario` | **Input controlado**: el texto que se escribe se guarda en el estado y se muestra abajo. |

Los tres se usan desde `src/App.jsx`.

## Cómo correrlo

Requisitos: Node.js 18 o superior.

```bash
npm install
npm run dev
```

La app queda en `http://localhost:5173`.

| Comando | Para qué |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga automática |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Ver el build de producción |
| `npm run lint` | Revisar el código con ESLint |

## Stack

React 19 + Vite.
