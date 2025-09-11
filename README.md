[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

# Table of Contents

- [Meantonal](#meantonal)
- [Project Structure](#project-structure)
- [Commands](#commands)

<img align="left" src="/src/assets/logo.svg" width="48">
  
# Meantonal

Meantonal is a specification for representing pitch information in Western music, and a suite of tools for operating on this information. It's a small, focused library that aims to empower developers to build musical apps more easily.

Meantonal is:

- **Flexible with I/O**: easily ingest and translate between Scientific Pitch Notation, Helmholtz notation, ABC and Lilypond. Extract MIDI values at any time.
- **Semantically nondestructive**: the distinction between enharmonic notes such as $\sf{C}\sharp$ and $\sf{D}\flat$ is maintained. Things that don't behave the same way musically are not encoded the same way in Meantonal.
- **Just vectors**: under the hood [pitches](https://meantonal.org/learn/pitch/) and [intervals](https://meantonal.org/learn/intervals/) are 2d vectors. Operations are simple to understand, surprisingly powerful, and fast to execute.
- **Tuning-agnostic**: Target any meantone tuning system, not just 12-tone equal temperament. You want 31 tones per octave? Done.

This is the repository for the companion documentation website for Meantonal. As an open source project, contributions are welcome! The information below will help you get started.

## Getting Started

First, clone the repo:

```bash
https://github.com/meantonal/documentation.git
```

Then, `cd` into the new directory and run `npm install`:

```bash
cd documentation && npm install
```

Now you can run `npm run dev` to spin up a dev server and start editing!

## Project Structure

The documentation site is an Astro + Starlight project. Inside the root directory, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   ├── pages/
│   ├── styles/
│   │   └── global.css
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

The project includes [Tailwind CSS](https://starlight.astro.build/guides/css-and-tailwind/#tailwind-css) for styling. Customize by modifying `src/styles/global.css`.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
