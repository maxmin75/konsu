"use client";

import Script from "next/script";
import { useState, useSyncExternalStore } from "react";

const GA_MEASUREMENT_ID = "G-QVQMFTCXRF";
const CONSENT_COOKIE = "konsu_analytics_consent";
const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 180;
const CONSENT_CHANGED_EVENT = "konsu:analytics-consent-changed";

type Consent = "granted" | "refused" | null;

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
  }
}

function readConsent(): Consent {
  const value = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${CONSENT_COOKIE}=`))
    ?.split("=")[1];

  return value === "granted" || value === "refused" ? value : null;
}

function saveConsent(value: Exclude<Consent, null>) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";

  document.cookie = `${CONSENT_COOKIE}=${value}; Path=/; Max-Age=${CONSENT_MAX_AGE_SECONDS}; SameSite=Lax${secure}`;
}

function subscribeToConsent(onStoreChange: () => void) {
  window.addEventListener(CONSENT_CHANGED_EVENT, onStoreChange);

  return () => window.removeEventListener(CONSENT_CHANGED_EVENT, onStoreChange);
}

function getServerConsent(): Consent {
  return null;
}

function configureGoogleAnalytics() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);
}

export function AnalyticsConsent() {
  const consent = useSyncExternalStore(subscribeToConsent, readConsent, getServerConsent);
  const [isOpen, setIsOpen] = useState(false);

  function chooseConsent(value: Exclude<Consent, null>) {
    saveConsent(value);
    window.dispatchEvent(new Event(CONSENT_CHANGED_EVENT));
    setIsOpen(false);

    if (value === "refused") {
      window.gtag?.("consent", "update", { analytics_storage: "denied" });
    }
  }

  const showPanel = consent === null || isOpen;

  return (
    <>
      {consent === "granted" ? (
        <Script
          id="google-analytics"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
          onLoad={configureGoogleAnalytics}
        />
      ) : null}

      {showPanel ? (
        <section className="cookie-consent" aria-label="Preferenze cookie" role="dialog" aria-modal="false">
          <p className="cookie-consent__eyebrow">Le tue preferenze</p>
          <p className="cookie-consent__copy">
            Usiamo cookie statistici per capire come viene visitato il sito. Puoi accettarli o rifiutarli.
          </p>
          <div className="cookie-consent__actions">
            <button className="cookie-consent__reject" type="button" onClick={() => chooseConsent("refused")}>
              Rifiuta
            </button>
            <button className="cookie-consent__accept" type="button" onClick={() => chooseConsent("granted")}>
              Accetta statistiche
            </button>
          </div>
        </section>
      ) : (
        <button
          className="cookie-consent-settings"
          type="button"
          aria-expanded="false"
          onClick={() => setIsOpen(true)}
        >
          Cookie
        </button>
      )}
    </>
  );
}
