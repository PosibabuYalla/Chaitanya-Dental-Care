// Usage: node scripts/qa-scroll.mjs <home|path> <name> <mobile|desktop> <y1,y2,...>
// Viewport screenshots at given scroll offsets — the shared WebGL canvas is
// fixed to the viewport, so full-page captures can't show below-fold 3D.
import { chromium } from "playwright";
const [arg = "home", name = "scroll", device = "desktop", ys = "0"] = process.argv.slice(2);
const path = arg === "home" ? "/" : "/" + arg.replace(/^\/+/, "");
const vp = device === "mobile"
  ? { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 1 }
  : { viewport: { width: 1440, height: 900 } };
const browser = await chromium.launch({ args: ["--use-gl=angle", "--ignore-gpu-blocklist"] });
const ctx = await browser.newContext(vp);
await ctx.addInitScript(() => sessionStorage.setItem("entry_played", "1"));
const page = await ctx.newPage();
await page.goto(`http://localhost:3000${path}`, { waitUntil: "load" });
await page.waitForTimeout(2000);
for (const y of ys.split(",").map(Number)) {
  await page.evaluate((y) => window.scrollTo(0, y), y);
  await page.waitForTimeout(1800);
  await page.screenshot({ path: `scripts/out/${name}-${device}-${y}.png` });
}
await browser.close();
