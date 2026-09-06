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

v0.6.0 — initial functional prototype.


## PWA icons
PNG 192×192 and 512×512, maskable 512×512, Apple touch icon 180×180, favicon 32×32, plus SVG fallback.


## v0.6.0
- Tooltip didattici in linguaggio semplice per ogni slash.
- Ogni spiegazione include: cosa fa, quando usarlo, esempio.
- Supporto hover/focus desktop e tocco/focus mobile.
- Micro-istruzioni per le quattro categorie.


## v0.6.0
- Ricette pronte per obiettivi comuni
- “Non so cosa scegliere” con suggerimenti locali/offline
- Sezione “Perché queste scelte?” per imparare mentre si usa il builder
- Nessuna API o servizio esterno per i suggerimenti


## Dove si usa
Visual Slash non genera direttamente immagini. Costruisce un prompt visuale esteso da copiare in ChatGPT o in un altro strumento di AI generativa compatibile con la creazione/modifica di immagini. Le scorciatoie `/slash` sono un vocabolario indipendente del progetto; per la massima portabilità tra strumenti è consigliato usare il **Prompt generato** in linguaggio naturale.

Le capacità e l’interpretazione del prompt dipendono dallo strumento AI utilizzato. Visual Slash non è affiliato, certificato o sponsorizzato da OpenAI, Google, Anthropic o altri fornitori.


## v0.6.0
Visual Slash ora include sei aree: immagini, documenti, dati, presentazioni, testi e codice. Il prompt esteso resta in linguaggio naturale per essere portabile tra strumenti AI compatibili.
