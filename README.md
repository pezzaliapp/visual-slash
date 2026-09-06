# Visual Slash

A lightweight, open vocabulary for composing clear and reusable visual prompts.

> Visual Slash is **not** an official OpenAI or ChatGPT command language. It is an independent prompting convention.

## Idea

Choose a **format + style + purpose + constraints**, add the subject, and Visual Slash expands the shorthand into a complete prompt ready to copy.

Example:

`/infographic /technical /linkedin /low-text`

## PWA

- installable web app
- offline-first service worker
- no account
- no server/database
- no external API
- local-only interaction
- share/copy support

## Local test

Serve the folder over localhost, for example with any static HTTP server. Service workers do not run correctly from a plain `file://` URL.

## Deploy

Designed for static hosting such as GitHub Pages. HTTPS is required for normal PWA installation outside localhost.

## Author

Alessandro Pezzali

## Status

v0.2.0 — initial functional prototype.


## PWA icons
PNG 192×192 and 512×512, maskable 512×512, Apple touch icon 180×180, favicon 32×32, plus SVG fallback.


## v0.2.0
- Tooltip didattici in linguaggio semplice per ogni slash.
- Ogni spiegazione include: cosa fa, quando usarlo, esempio.
- Supporto hover/focus desktop e tocco/focus mobile.
- Micro-istruzioni per le quattro categorie.
