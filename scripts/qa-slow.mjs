import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1600 } });
const msgs = [];
page.on("console", (msg) => msgs.push(`${msg.type()}: ${msg.text()}`));
page.on("pageerror", (err) => msgs.push("pageerror: " + err.message));

await page.goto("http://localhost:3000/qa", { waitUntil: "networkidle", timeout: 30000 });
await page.waitForTimeout(8000);
await page.screenshot({ path: "scripts/out/qa-slow.png", fullPage: true });
console.log(msgs.join("\n"));
await browser.close();
