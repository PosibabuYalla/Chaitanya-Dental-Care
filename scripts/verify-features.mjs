// Usage: node scripts/verify-features.mjs [baseUrl]
// End-to-end checks for the hero links, tooth-masked image, entry video
// session logic, shared GLB viewer and the auto-scrolling reviews.
import { chromium } from "playwright";

const BASE = process.argv[2] ?? "http://localhost:3000";
const results = [];
const check = (name, ok, detail = "") => {
  results.push({ name, ok });
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail ? `  — ${detail}` : ""}`);
};

const browser = await chromium.launch({ args: ["--use-gl=angle", "--ignore-gpu-blocklist", "--autoplay-policy=no-user-gesture-required"] });
const errors = [];
const watch = (page, label) => {
  page.on("console", (m) => m.type() === "error" && errors.push(`[${label}] ${m.text().slice(0, 160)}`));
  page.on("pageerror", (e) => errors.push(`[${label}] pageerror ${e.message.slice(0, 160)}`));
};

// ---------- 3. Entry video: new session / refresh / navigation / new session ----------
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  watch(page, "entry");
  await page.goto(BASE, { waitUntil: "domcontentloaded" });
  const overlay = page.locator(".entry-overlay");
  check("Entry video overlay shows on a new session", await overlay.isVisible());
  await page.waitForTimeout(2500);
  const v = await page.evaluate(() => {
    const el = document.querySelector(".entry-overlay video");
    return el ? { src: el.currentSrc, t: el.currentTime, paused: el.paused } : null;
  });
  check("Entry video plays from the public path", !!v && v.src.endsWith("/website_entry_animation.mp4") && v.t > 0.2 && !v.paused, JSON.stringify(v));
  await overlay.waitFor({ state: "detached", timeout: 15000 });
  await page.waitForTimeout(700); // content fades in over 0.5s
  check("Overlay releases the site after the video ends", await page.locator(".entry-content").evaluate((e) => getComputedStyle(e).opacity === "1"));
  check("Session flag stored", (await page.evaluate(() => sessionStorage.getItem("entry_played"))) === "1");

  await page.reload({ waitUntil: "domcontentloaded" });
  await page.waitForTimeout(800);
  check("Refresh in the same session does not replay", !(await page.locator(".entry-overlay").isVisible().catch(() => false)));

  await page.getByRole("link", { name: "Explore Treatment Options" }).click();
  await page.waitForURL("**/services");
  await page.waitForTimeout(500);
  check("Navigation does not replay", !(await page.locator(".entry-overlay").isVisible().catch(() => false)));
  await ctx.close();

  const fresh = await browser.newContext();
  const p2 = await fresh.newPage();
  await p2.goto(BASE, { waitUntil: "domcontentloaded" });
  check("A new browser session shows it again", await p2.locator(".entry-overlay").isVisible());
  await fresh.close();
}

// Everything below skips the intro.
const ctxFor = async (vp) => {
  const ctx = await browser.newContext(vp);
  await ctx.addInitScript(() => sessionStorage.setItem("entry_played", "1"));
  return ctx;
};

// ---------- 1. Hero cards ----------
for (const [label, vp] of [["desktop", { viewport: { width: 1440, height: 900 } }], ["mobile", { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true }]]) {
  const ctx = await ctxFor(vp);
  const page = await ctx.newPage();
  watch(page, `hero-${label}`);
  await page.goto(BASE, { waitUntil: "load" });
  const cards = await page.evaluate(() => [...document.querySelectorAll("section")][0].innerText);
  check(`[${label}] "Understand Your Teeth" removed`, !cards.includes("Understand Your Teeth"));
  for (const [name, path] of [["Explore Treatment Options", "/services"], ["See Real Results", "/gallery"]]) {
    await page.goto(BASE, { waitUntil: "load" });
    await page.evaluate(() => (window.__spa = true)); // survives only a client-side navigation
    await page.getByRole("link", { name }).click();
    await page.waitForURL(`**${path}`);
    const spa = await page.evaluate(() => window.__spa === true);
    const h1 = await page.locator("h1").first().innerText();
    check(`[${label}] "${name}" → ${path} (client-side)`, spa && h1.length > 0, `h1="${h1.replace(/\n/g, " ")}"`);
  }
  await ctx.close();
}

// ---------- 2. Tooth-shaped image ----------
for (const [label, w, h] of [["desktop", 1440, 900], ["tablet", 820, 1180], ["mobile", 390, 844]]) {
  const ctx = await ctxFor({ viewport: { width: w, height: h } });
  const page = await ctx.newPage();
  await page.goto(BASE, { waitUntil: "load" });
  const img = page.locator(`img[alt="Dentist explaining a scan to a patient"]`);
  await img.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1200);
  const info = await img.evaluate((el) => {
    const clipEl = el.parentElement;
    const r = clipEl.getBoundingClientRect();
    return { clip: getComputedStyle(clipEl).clipPath, w: Math.round(r.width), h: Math.round(r.height), loaded: el.complete && el.naturalWidth > 0 };
  });
  check(`[${label}] Photo clipped by tooth path`, info.clip.includes("tooth-frame-clip") && info.loaded && info.w > 200, JSON.stringify(info));
  const box = await page.locator(".aspect-\\[100\\/112\\]").first().boundingBox();
  await page.screenshot({ path: `scripts/out/verify-tooth-${label}.png`, clip: { x: Math.max(0, box.x - 30), y: Math.max(0, box.y - 30), width: box.width + 60, height: box.height + 60 } });
  await ctx.close();
}

// ---------- 4. Services GLB (shared viewer) ----------
for (const [label, vp] of [["desktop", { viewport: { width: 1440, height: 900 } }], ["mobile", { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true }]]) {
  const ctx = await ctxFor(vp);
  const page = await ctx.newPage();
  watch(page, `glb-${label}`);
  await page.goto(BASE, { waitUntil: "load" });
  const heading = page.getByRole("heading", { name: /Under One Roof/ });
  await heading.scrollIntoViewIfNeeded();
  const canvas = page.locator("section:has(h2:has-text('Under One Roof')) canvas");
  await canvas.waitFor({ timeout: 15000 });
  await canvas.scrollIntoViewIfNeeded();
  await page.waitForTimeout(3500); // model + base texture load
  const b = await canvas.boundingBox();
  const cx = b.x + b.width / 2, cy = b.y + b.height / 2;
  await page.screenshot({ path: `scripts/out/verify-glb-${label}-before.png`, clip: b });
  // Vertical drag tilts the model about X — idle auto-rotation only ever turns about Y,
  // so a visible tilt proves the drag reached the viewer.
  await page.mouse.move(cx, cy);
  await page.mouse.down();
  for (let i = 1; i <= 12; i++) await page.mouse.move(cx + i * 8, cy + i * 9);
  await page.mouse.up();
  await page.waitForTimeout(150);
  await page.screenshot({ path: `scripts/out/verify-glb-${label}-after.png`, clip: b });
  const drawn = await canvas.evaluate((c) => c.width > 0 && c.height > 0);
  check(`[${label}] Services GLB canvas renders and accepts drag`, drawn, `${Math.round(b.width)}×${Math.round(b.height)} — compare verify-glb-${label}-before/after.png`);
  await ctx.close();
}

// ---------- 5. Reviews marquee ----------
{
  const ctx = await ctxFor({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  watch(page, "reviews");
  await page.goto(BASE, { waitUntil: "load" });
  const region = page.getByRole("region", { name: "Patient reviews" });
  await region.scrollIntoViewIfNeeded();
  await page.mouse.move(5, 5);
  const x = () => region.locator(".animate-marquee").evaluate((el) => new DOMMatrix(getComputedStyle(el).transform).m41);
  const a = await x(); await page.waitForTimeout(1000); const bx = await x();
  check("Reviews auto-scroll", bx < a - 20, `${a.toFixed(0)} → ${bx.toFixed(0)}px/s`);
  await region.hover();
  await page.waitForTimeout(300);
  const h1 = await x(); await page.waitForTimeout(1000); const h2 = await x();
  check("Reviews pause on hover", Math.abs(h2 - h1) < 1, `${h1.toFixed(1)} → ${h2.toFixed(1)}`);
  await page.mouse.move(5, 5);
  await page.waitForTimeout(300);
  const r1 = await x(); await page.waitForTimeout(1000); const r2 = await x();
  check("Reviews resume after hover", r2 < r1 - 20, `${r1.toFixed(0)} → ${r2.toFixed(0)}`);
  const widths = await region.locator(".animate-marquee > div").evaluateAll((els) => els.map((e) => e.getBoundingClientRect().width));
  const track = await region.locator(".animate-marquee").evaluate((el) => el.getBoundingClientRect().width);
  check("Loop is seamless (two equal copies = 50% of track)", widths.length === 2 && Math.abs(widths[0] - widths[1]) < 0.5 && Math.abs(widths[0] * 2 - track) < 1, JSON.stringify({ widths, track }));
  await ctx.close();
}
{
  const ctx = await ctxFor({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const page = await ctx.newPage();
  await page.goto(BASE, { waitUntil: "load" });
  const region = page.getByRole("region", { name: "Patient reviews" });
  await region.scrollIntoViewIfNeeded();
  const x = () => region.locator(".animate-marquee").evaluate((el) => new DOMMatrix(getComputedStyle(el).transform).m41);
  const t0 = await x(); await page.waitForTimeout(800); const t1 = await x();
  const fire = (type) => region.evaluate((el, type) => el.dispatchEvent(new PointerEvent(type, { bubbles: true, pointerType: "touch" })), type);
  await fire("pointerdown"); await page.waitForTimeout(200);
  const p0 = await x(); await page.waitForTimeout(800); const p1 = await x();
  await fire("pointerup"); await page.waitForTimeout(200);
  const q0 = await x(); await page.waitForTimeout(800); const q1 = await x();
  check("[mobile] Reviews auto-scroll, hold-to-pause, resume on release", t1 < t0 - 10 && Math.abs(p1 - p0) < 1 && q1 < q0 - 10, `moving ${t0.toFixed(0)}→${t1.toFixed(0)}, held ${p0.toFixed(0)}→${p1.toFixed(0)}, released ${q0.toFixed(0)}→${q1.toFixed(0)}`);
  await ctx.close();
}

// ---------- Routes + console ----------
{
  const ctx = await ctxFor({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  watch(page, "routes");
  for (const path of ["/", "/services", "/gallery", "/about", "/team", "/blog", "/contact", "/appointment", "/services/dental-implants"]) {
    const res = await page.goto(BASE + path, { waitUntil: "load" });
    if (res.status() !== 200) check(`Route ${path}`, false, `status ${res.status()}`);
  }
  check("All main routes return 200", true);
  await ctx.close();
}

check("No console errors", errors.length === 0, errors.slice(0, 5).join(" | "));
await browser.close();
const failed = results.filter((r) => !r.ok).length;
console.log(`\n${results.length - failed}/${results.length} checks passed`);
process.exit(failed ? 1 : 0);
