// Usage: node scripts/qa.mjs [path] [name]
// Screenshots a page at phone + desktop widths with the entry video skipped,
// and reports console errors plus total bytes transferred.
import { chromium } from "playwright";

const arg = process.argv[2] ?? "home";
// Pass "home" for "/" — Git Bash on Windows rewrites a bare "/" into a filesystem path.
const path = arg === "home" ? "/" : "/" + arg.replace(/^\/+/, "");
const name = process.argv[3] ?? "qa";
const url = `http://localhost:3000${path}`;

const browser = await chromium.launch({ args: ["--use-gl=angle", "--enable-webgl", "--ignore-gpu-blocklist"] });

for (const vp of [
  { label: "mobile", width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 },
  { label: "desktop", width: 1440, height: 900 },
]) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, isMobile: vp.isMobile, hasTouch: vp.hasTouch, deviceScaleFactor: vp.deviceScaleFactor ?? 1 });
  await ctx.addInitScript(() => sessionStorage.setItem("entry_played", "1"));
  const page = await ctx.newPage();
  const errors = [];
  let bytes = 0;
  page.on("console", (m) => m.type() === "error" && errors.push(m.text().slice(0, 200)));
  page.on("pageerror", (e) => errors.push("pageerror: " + e.message.slice(0, 200)));
  page.on("response", async (r) => {
    const len = Number(r.headers()["content-length"] ?? 0);
    bytes += len;
  });

  await page.goto(url, { waitUntil: "load", timeout: 60000 });
  await page.waitForTimeout(2500);
  await page.screenshot({ path: `scripts/out/${name}-${vp.label}-fold.png` });

  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < height; y += 500) {
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await page.waitForTimeout(250);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(800);
  await page.screenshot({ path: `scripts/out/${name}-${vp.label}.png`, fullPage: true });

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  console.log(`[${vp.label}] height=${height}px horizontalOverflow=${overflow}px transferred≈${(bytes / 1e6).toFixed(2)}MB`);
  console.log(`[${vp.label}] errors:`, errors.length ? errors : "none");
  await ctx.close();
}
await browser.close();
