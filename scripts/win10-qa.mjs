import { chromium } from "playwright";

const browser = await chromium.launch({ args: ["--no-sandbox"] });
const errors = [];

async function attach(page) {
  page.on("pageerror", (e) => errors.push("page:" + String(e)));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push("console:" + m.text());
  });
}

async function toDesktop(page) {
  await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
  await page.waitForTimeout(300);
  await page.mouse.click(200, 300);
  await page.waitForTimeout(400);
  await page.mouse.click(200, 300);
  await page.waitForTimeout(400);
  const sign = page.getByRole("button", { name: "Iniciar sesión" });
  if (await sign.count()) await sign.click();
  await page.waitForTimeout(1100);
}

const desk = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await attach(desk);
await toDesktop(desk);

await desk.getByRole("button", { name: "Inicio" }).click();
await desk.waitForTimeout(350);
await desk.locator(".win-start").getByRole("button", { name: "Calculadora" }).first().click();
await desk.waitForTimeout(450);
await desk.screenshot({ path: "/workspace/screenshots/qa-calc.png" });

await desk.getByRole("button", { name: "Inicio" }).click();
await desk.waitForTimeout(300);
await desk.locator(".win-start").getByRole("button", { name: "Configuración" }).first().click();
await desk.waitForTimeout(450);
await desk.screenshot({ path: "/workspace/screenshots/qa-settings.png" });

await desk.getByRole("button", { name: "Inicio" }).click();
await desk.waitForTimeout(300);
await desk.locator(".win-start").getByRole("button", { name: "Microsoft Edge" }).first().click();
await desk.waitForTimeout(450);
await desk.screenshot({ path: "/workspace/screenshots/qa-edge.png" });

const mob = await browser.newPage({ viewport: { width: 390, height: 844 } });
await attach(mob);
await toDesktop(mob);
await mob.screenshot({ path: "/workspace/screenshots/qa-mobile.png" });
await mob.getByRole("button", { name: "Inicio" }).click();
await mob.waitForTimeout(400);
await mob.screenshot({ path: "/workspace/screenshots/qa-mobile-start.png" });
await mob.locator(".win-start").getByRole("button", { name: "Bloc de notas" }).first().click();
await mob.waitForTimeout(450);
await mob.screenshot({ path: "/workspace/screenshots/qa-mobile-app.png" });

console.log(JSON.stringify({ errors }, null, 2));
await browser.close();
