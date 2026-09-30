# Google Analytics 4 with visitor consent

## Goal

Measure visits to Konsu with GA4 property `G-QVQMFTCXRF` without loading Google Analytics before a visitor chooses the Statistics category.

## Design

`src/app/layout.tsx` mounts one client-side `AnalyticsConsent` component for every route. The component reads a first-party cookie called `konsu_analytics_consent` with the values `granted` or `refused`.

When the value is missing, it presents a compact, keyboard-accessible choice panel. Accepting stores `granted` for 180 days and renders the GA4 script. Rejecting stores `refused` and does not add any Google request or analytics cookie. A small “Cookie” control lets visitors reopen the panel and change that choice.

The GA4 script is rendered only in the `granted` state and configures the supplied Measurement ID after the Google library has loaded. The component uses only the consent cookie; it does not store analytics identifiers itself.

## Scope and limits

This change supplies the technical consent control and GA4 integration. The site currently has no public privacy or cookie-policy page in this Next.js codebase, so legal text, data-controller details, retention, and Google’s processor wording remain content that must be added separately before presenting the site as fully documented for privacy purposes.

## Validation

An automated source test proves that the root layout includes the consent controller, the supplied Measurement ID is used, and the Google script is reachable only from the granted-consent branch. Lint, test, production build, deployment inspection, and a browser request check complete the release validation.
