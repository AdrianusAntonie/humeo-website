import puppeteer from 'puppeteer';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(root, 'temporary screenshots');
fs.mkdirSync(outDir, { recursive: true });

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

const existing = fs
  .readdirSync(outDir)
  .map((f) => f.match(/^screenshot-(\d+)/))
  .filter(Boolean)
  .map((m) => parseInt(m[1], 10));
const next = existing.length ? Math.max(...existing) + 1 : 1;
const fileName = `screenshot-${next}${label ? '-' + label : ''}.png`;
const outPath = path.join(outDir, fileName);

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle0' });

// Scroll through the page first so scroll-triggered reveal animations fire
// before the full-page screenshot is taken.
await page.evaluate(async () => {
  const distance = 400;
  const delay = 60;
  while (
    document.scrollingElement.scrollTop + window.innerHeight <
    document.scrollingElement.scrollHeight
  ) {
    document.scrollingElement.scrollBy(0, distance);
    await new Promise((r) => setTimeout(r, delay));
  }
  document.scrollingElement.scrollTo(0, 0);
});
await new Promise((r) => setTimeout(r, 500));

await page.screenshot({ path: outPath, fullPage: true });
await browser.close();

console.log(`Saved ${outPath}`);
