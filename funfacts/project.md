# Project Structure Overview

This document provides an overview of the project structure for the React Workshop workspace.

## Root Directory
- `README.md`: General information about the workspace.
- `funfacts/`: Main project folder containing the React application.

## funfacts Directory
- `eslint.config.js`: ESLint configuration for code linting.
- `index.html`: Entry HTML file for the app.
- `package.json`: Project dependencies and scripts.
- `README.md`: Project-specific documentation.
- `tsconfig.app.json`, `tsconfig.json`, `tsconfig.node.json`: TypeScript configuration files.
- `vite.config.ts`: Vite configuration for development/build.

### Subfolders
- `public/`: Static assets served directly (e.g., images, favicon).
- `src/`: Source code for the React app.
    - `App.css`: Styles for the main App component.
    - `App.tsx`: Main App component.
    - `index.css`: Global styles.
    - `main.tsx`: Entry point for the React app.
    - `assets/`: Additional static assets (e.g., images, fonts).

## Typical Workflow
1. Develop components in `src/`.
2. Use `vite` for local development and builds.
3. Manage dependencies and scripts via `package.json`.
4. Configure TypeScript and ESLint as needed.

## Useful Commands
- `npm install`: Install dependencies.
- `npm run dev`: Start development server.
- `npm run build`: Build for production.

---
This file helps new contributors quickly understand the layout and purpose of each folder/file in the project.