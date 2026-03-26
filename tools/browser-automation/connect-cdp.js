const { chromium } = require('playwright-core');

async function main() {
  const endpoint = process.env.BROWSER_CDP_URL || 'http://127.0.0.1:9222';
  console.log(`Connecting to CDP endpoint: ${endpoint}`);

  const browser = await chromium.connectOverCDP(endpoint);
  const contexts = browser.contexts();
  const context = contexts[0] || await browser.newContext();
  const page = context.pages()[0] || await context.newPage();

  await page.goto('https://example.com', { waitUntil: 'domcontentloaded' });
  console.log('Title:', await page.title());

  await browser.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
