import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const layout = await readFile(new URL("../src/app/layout.tsx", import.meta.url), "utf8");
const css = await readFile(new URL("../src/app/globals.css", import.meta.url), "utf8");
const consentComponent = await readFile(
  new URL("../src/app/analytics-consent.tsx", import.meta.url),
  "utf8",
).catch(() => "");

test("GA4 is mounted globally and loads only after analytics consent", () => {
  assert.match(layout, /import \{ AnalyticsConsent \} from "\.\/analytics-consent";/);
  assert.match(layout, /<AnalyticsConsent \/>/);
  assert.doesNotMatch(layout, /googletagmanager\.com/);
  assert.match(consentComponent, /const GA_MEASUREMENT_ID = "G-QVQMFTCXRF";/);
  assert.match(consentComponent, /consent === "granted"/);
  assert.match(consentComponent, /googletagmanager\.com\/gtag\/js\?id=\$\{GA_MEASUREMENT_ID\}/);
  assert.match(consentComponent, /konsu_analytics_consent/);
  assert.match(consentComponent, /useSyncExternalStore/);
  assert.doesNotMatch(consentComponent, /useEffect/);
  assert.match(css, /\.cookie-consent\s*\{/);
  assert.match(css, /\.cookie-consent-settings\s*\{/);
});
