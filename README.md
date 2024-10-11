# SPA + Netlify functions monorepo template with Typescript
This is a simple template for a monorepo containing an SPA built with [Vite](https://vitejs.dev/)
and with [Netlify functions](https://docs.netlify.com/functions/build/?fn-language=ts) both 
using Typescript.

## Install
Run `npm install`

## Run the app
Run `npm start`

## Test the app
To test the app you need to install playwright before running the tests.

Run `npm test:e2e`


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