# Translation System

The Hatcher documentation site includes an automatic translation system that translates documentation to 13 languages using Google Translate via Puppeteer.

## Supported Languages

- 🇪🇸 Spanish (es)
- 🇫🇷 French (fr)
- 🇩🇪 German (de)
- 🇨🇳 Chinese Simplified (zh-cn)
- 🇯🇵 Japanese (ja)
- 🇰🇷 Korean (ko)
- 🇵🇹 Portuguese (pt)
- 🇷🇺 Russian (ru)
- 🇸🇦 Arabic (ar)
- 🇮🇳 Hindi (hi)
- 🇮🇷 Persian (fa)
- 🇮🇩 Indonesian (id)
- 🇹🇷 Turkish (tr)

## Usage

### Test Mode (Spanish only)

To test the translation system with just Spanish:

```bash
pnpm translate:test
```

### Full Translation (All languages)

To translate all documentation to all supported languages:

```bash
pnpm translate
```

⚠️ **Warning**: Full translation takes significant time (30-60 minutes) due to rate limiting and the number of files/languages.

## How It Works

1. The script scans for all `.md` files in the root directory
2. Filters out already translated files and README.md
3. Uses Puppeteer to automate Google Translate
4. Implements rate limiting (3 seconds between requests)
5. Includes retry logic for failed translations
6. Creates language-specific directories (e.g., `/es/`, `/fr/`, `/de/`)
7. Saves translated files with the same names in their respective directories

## Configuration

The translation script is located at `/scripts/translate-docs.js` and includes:

- **Rate limiting**: 3 seconds between translation requests
- **Retry logic**: Up to 3 retries for failed translations
- **Chunk splitting**: Large files are split into chunks to avoid Google Translate limits
- **Headless browser**: Uses Puppeteer in headless mode for automation

## Files Structure

```
/
├── index.md              # English (source)
├── introduction.md       # English (source)
├── es/
│   ├── index.md         # Spanish translation
│   └── introduction.md  # Spanish translation
├── fr/
│   ├── index.md         # French translation
│   └── introduction.md  # French translation
└── ... (other languages)
```

## Troubleshooting

If translations fail:

1. **Check internet connection**: The script requires internet access to Google Translate
2. **Rate limiting**: If you see rate limit errors, the script will automatically wait
3. **Puppeteer issues**: Ensure Chrome/Chromium is properly installed
4. **Large files**: Very large markdown files may need to be split manually

## Manual Translation Updates

To update a specific translation:

1. Delete the translated file(s) in the target language directory
2. Run the translation script again
3. The script will only translate missing files

## Integration with VitePress

The translated files are automatically recognized by VitePress's locale system configured in `.vitepress/config.mts`. The language selector in the navigation bar allows users to switch between languages.