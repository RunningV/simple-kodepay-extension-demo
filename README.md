# simple-kodepay-extension-demo
### Clone to local

If you prefer to do it manually with the cleaner git history

> If you don't have pnpm installed, run: npm install -g pnpm

```bash
download the code
cd simple-kodepay-extension-demo
pnpm i
```

## Usage

### Project Structure

- `src` - main source.
  - `content-script` - scripts and components to be injected as `content_script`
    - `iframe` content script iframe app which will be injected into page
  - `background` - scripts for background.
  - `popup` - popup application root
    - `pages` - popup pages
  - `options` - options application root
    - `pages` - options pages
  - `setup` - Page for Install and Update chrome extension events
    - `pages` - pages for install and update events
  - `offscreen` - Chrome extension offscreen pages, can be used for audio, screen recording
  - `pages` - application pages, common to all views (About, Contact, Authentication etc)
  - `assets` - assets
- `dist` - built files, also serve stub entry for Vite on development.

### Extra info

In [src/background/index.ts](./src/background/index.ts) you can find an example of chrome.runtime.onInstalled.addListener.

### Development

```bash
pnpm dev
```

Then **load extension in browser with the `dist/` folder**.

### Build

To build the extension, run

```bash
pnpm build
```

And then pack files under `dist`, you can upload `dist.crx` or `dist.xpi` to appropriate extension store.

## Access kodepay service
[kodepay guide](./DevelopmentGuide.md) | [kodepay 指南](./DevelopmentGuide-zh.md)