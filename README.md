# MarkingLab

Public landing page for Marking Lab 


## Quick start

Prerequisites: Node.js (v16+), npm or your preferred package manager.

```sh
# Install
npm install

# Start development server
npm run dev
```

Open http://localhost:8080 (or the port Vite reports) to view the app.


## Testing & linting

- Tests are run with `vitest` (`npm run test`).
- Use `npm run lint` to run ESLint across the codebase.


## Deployment

1. Build the project with `npm run build` 
2. Run `npm run deploy` to update the `dist` folder with static files. Push normally. The dist folder will automatically be pushed to the `gh-pages` branch, which is deployed using github pages.

> Note: Never push the dist folder in normal branches (it is and should be .gitignored)