# Visual Slash

Visual Slash is an independent, open-source prompt builder designed to help people tell an AI what they want without needing to know prompting terminology.

> Visual Slash is **not** an official OpenAI, ChatGPT, Google, Anthropic or other AI-provider command language. The `/slash` vocabulary is an independent convention; the generated natural-language prompt is the most portable output.

## What it builds

Visual Slash includes six dynamic builders:

- Images
- Documents
- Data analysis
- Presentations
- Text
- Code

The available options change according to the selected category. A user can also describe the desired result in ordinary language and get a local rule-based starting combination.

## v0.7.0 — multilingual

Supported languages:

- Italiano (`it`)
- English (`en`)
- Deutsch (`de`)
- Español (`es`)
- Français (`fr`)
- Português (`pt`)
- 简体中文 (`zh-CN`)

On the first launch, Visual Slash asks which language the user wants to use. The browser/device language is detected only to preselect a sensible choice. The final choice is stored locally in `localStorage` and is not sent anywhere. After that, the app opens directly in the saved language. The language can always be changed from the `🌐` button in the header.

The interface, category names, builder questions, guidance, output controls, beginner-friendly slash explanations and generated universal prompt are localized. Missing locale strings fall back to English.

Translation files live in `/i18n/`, so new languages can be added without changing the application structure.

## PWA

- installable web app
- offline-first service worker
- automatic service-worker update checks
- versioned CSS/JS and network-first `no-store` update strategy
- local language preference
- no account
- no server/database
- no external API
- local-only prompt assistance
- share/copy support

## PWA icons

PNG 192×192 and 512×512, maskable 512×512, Apple touch icon 180×180, favicon 32×32, plus SVG fallback.

## Local test

Serve the folder over localhost using any static HTTP server. Service workers do not run correctly from a plain `file://` URL.

## Deploy

Designed for static hosting such as GitHub Pages. HTTPS is required for normal PWA installation outside localhost.

## Author

Alessandro Pezzali

## Version

v0.7.0
