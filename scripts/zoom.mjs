import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3000", { waitUntil: "networkidle", timeout: 30000 });
await page.waitForTimeout(1200);

// Hero tooth
const hero = page.locator("section").first().locator("canvas").first();
await hero.screenshot({ path: "scripts/out/zoom-hero.png" }).catch((e) => console.log("hero err", e.message));

// scroll to why choose us chair
await page.evaluate(() => window.scrollTo(0, 1500));
await page.waitForTimeout(1000);
await page.screenshot({ path: "scripts/out/zoom-chair-area.png", clip: { x: 0, y: 0, width: 1440, height: 900 } });

// scroll to journey
await page.evaluate(() => window.scrollTo(0, 2400));
await page.waitForTimeout(1000);
await page.screenshot({ path: "scripts/out/zoom-journey-area.png", clip: { x: 0, y: 0, width: 1440, height: 900 } });

await browser.close();
console.log("done");
