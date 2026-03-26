# Browser Automation on this Android/Termux host

## Current status

This workspace now has a lightweight browser automation setup based on `playwright-core`.

Installed packages:
- `playwright-core`
- `@playwright/test`

## Important limitation

This host is **Android/Termux**, and Playwright's bundled browser install does **not** support platform `android`.

That means:
- local `npx playwright install chromium` **does not work here**
- fully local headless Chromium automation is **not available on this device** using standard Playwright browser bundles

## What does work

You can still use this setup in either of these ways:

### Option 1: Connect to a remote Chrome / Chromium over CDP

If you have another machine running Chrome with remote debugging enabled:

```bash
chrome --remote-debugging-port=9222
```

Then edit `BROWSER_CDP_URL` and run:

```bash
node connect-cdp.js
```

### Option 2: Use a remote browser service

Any browser endpoint that exposes a Chrome DevTools Protocol URL may work.

Set:

```bash
export BROWSER_CDP_URL=http://HOST:9222
node connect-cdp.js
```

## Files

- `connect-cdp.js` - basic Playwright CDP connection test

## Next realistic upgrade paths

1. Run browser automation on a laptop/VPS and connect from here
2. Use ACP/Codex on another host that has Chromium/Playwright support
3. If needed later, add task-specific scripts for login/form submission once a CDP browser is available
