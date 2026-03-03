# Invest.JO

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

## API Configuration (Environment-Based)

The project reads the backend base URL from Vite environment variables, so you do not need to edit URLs in source files.

1. Copy `.env.example` to `.env.local`.
2. Set the server you want to use:

```env
VITE_API_BASE_URL=https://be-investjo.smartdots.net/api
VITE_API_REGISTER_ENDPOINT=/register
VITE_API_AGENDA_ENDPOINT=/agendas
VITE_API_TIMEOUT_MS=60000
```

`VITE_API_BASE_URL` is the only required value if your endpoint paths are the same across servers.
If paths differ between environments, override only the needed endpoint variables from `.env.example`.

Available API service modules:
- `src/services/apiClient.js` (shared request client)
- `src/services/contentApi.js` (home/tourism/partners/news/opportunities)
- `src/services/contactApi.js` (contact form)
- `src/services/registrationApi.js` (registration form)

Use different files per environment when needed:
- `.env.local` for local development overrides
- `.env.development` for dev server defaults
- `.env.production` for production build values

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
