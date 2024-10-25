# SPA + Netlify functions monorepo template with Typescript
This is a simple template for a monorepo containing an SPA built with [Vite](https://vitejs.dev/)
and with [Netlify functions](https://docs.netlify.com/functions/build/?fn-language=ts) both 
using Typescript.

It uses [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) so you can have different 
dependencies for the frontend and the backend.

## Install
Run `npm install`

## Run the app
Run `npm start`

## Test the app

You can run the tests with `npm test`.

To run the e2e test, you need to [install playwright](https://playwright.dev/docs/intro#installing-playwright) 
first and then run `npm test:e2e`.

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