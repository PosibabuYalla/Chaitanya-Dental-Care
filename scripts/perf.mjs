// Usage: node scripts/perf.mjs [home|path] — phone profile, entry video skipped.
// Reports paint timings and bytes by resource type (run against `next start`).
import { chromium } from "playwright";
const arg = process.argv[2] ?? "home";
const path = arg === "home" ? "/" : "/" + arg.replace(/^\/+/, "");
const browser = await chromium.launch({ args: ["--use-gl=angle", "--ignore-gpu-blocklist"] });
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
await ctx.addInitScript(() => sessionStorage.setItem("entry_played", "1"));
const page = await ctx.newPage();
await page.goto(`http://localhost:${process.env.PORT ?? 3000}${path}`, { waitUntil: "load" });
await page.waitForTimeout(4000);
const r = await page.evaluate(() => {
  const paint = Object.fromEntries(performance.getEntriesByType("paint").map((p) => [p.name, Math.round(p.startTime)]));
  const lcp = new Promise((res) => new PerformanceObserver((l) => { const e = l.getEntries(); res(Math.round(e[e.length - 1].startTime)); }).observe({ type: "largest-contentful-paint", buffered: true }));
  const by = {};
  for (const e of performance.getEntriesByType("resource")) {
    const k = /\.glb/.test(e.name) ? "3d-model" : e.initiatorType === "img" || /_next\/image/.test(e.name) ? "image" : /\.js/.test(e.name) ? "js" : e.initiatorType;
    by[k] = (by[k] ?? 0) + e.transferSize;
  }
  return lcp.then((l) => ({ paint, lcp: l, kb: Object.fromEntries(Object.entries(by).map(([k, v]) => [k, Math.round(v / 1024)])) }));
});
console.log(path, JSON.stringify(r));
await browser.close();
