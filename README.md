## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Tailwind Vue 3 Composition API

Install tailwind

    $ npm install tailwindcss@latest postcss@latest autoprefixer@latest

Generate a tailwind.config.js file

    $ npx tailwindcss init -p

Include tailwind in the main CSS file

    @tailwind base;
    @tailwind components;
    @tailwind utilities;