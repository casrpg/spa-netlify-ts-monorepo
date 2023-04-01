# SPA + Netlify functions monorepo template with Typescript
This is a simple template for a monorepo containing an SPA built with [Vite](https://vitejs.dev/)
and with [Netlify functions](https://docs.netlify.com/functions/build/?fn-language=ts) both 
using Typescript.

## Install
Run `npm install`


## Troubleshooting

### Vscode fails to run the linter
Put this into the `.vscode/settings.json` file:
```json
{
  "eslint.workingDirectories": [
    "app",
    "functions",
  ]
}
```