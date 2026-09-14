"use client";

import { useEffect, useState } from "react";
import {
  INITIAL_DURATION_SECONDS,
  createCountdownState,
  formatCountdown,
  getRemainingSeconds,
  normalizeCountdownState,
} from "../offer-countdown.mjs";
import { trackPurchaseClick } from "../analytics";

const storageKey = "listen6-paid-listening-offer-v1";

type CountdownState = {
  firstStartedAt: number;
  cycle: number;
  endsAt: number;
};

const isCountdownState = (value: unknown): value is CountdownState => {
  if (!value || typeof value !== "object") return false;

  const state = value as CountdownState;
  return Number.isFinite(state.firstStartedAt)
    && Number.isInteger(state.cycle)
    && state.cycle >= 0
    && Number.isFinite(state.endsAt);
};

const saveCountdownState = (state: CountdownState) => {
  window.localStorage.setItem(storageKey, JSON.stringify(state));
};

const loadCountdownState = (now: number): CountdownState => {
  try {
    const saved = window.localStorage.getItem(storageKey);
    const parsed = saved ? JSON.parse(saved) : null;

    if (isCountdownState(parsed)) {
      const normalized = normalizeCountdownState(parsed, now);
      saveCountdownState(normalized);
      return normalized;
    }
  } catch {}

  const initial = createCountdownState(now);
  saveCountdownState(initial);
  return initial;
};

export function PersistentOffer({ purchaseUrl }: { purchaseUrl: string }) {
  const [countdown, setCountdown] = useState<CountdownState | null>(null);
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const sync = () => {
      const currentTime = Date.now();
      setCountdown((current) => {
        const state = current ?? loadCountdownState(currentTime);
        const normalized = normalizeCountdownState(state, currentTime);
        if (normalized !== state || !current) saveCountdownState(normalized);
        return normalized;
      });
      setNow(currentTime);
    };

    sync();
    const interval = window.setInterval(sync, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const secondsRemaining = countdown && now
    ? getRemainingSeconds(countdown.endsAt, now)
    : INITIAL_DURATION_SECONDS;

  return <div className="final-offer">
    <div className="final-price-stack" aria-label="Limited-time price">
      <span>LIMITED-TIME PRICE</span>
      <div className="final-prices">
        <p>Original Price <s>$69.90</s></p>
        <strong>$19.90</strong>
      </div>
      <p className="save-copy">Save $50 Today</p>
    </div>

    <div className="offer-countdown" aria-live="polite">
      <span>OFFER WINDOW</span>
      <strong>{formatCountdown(secondsRemaining)}</strong>
    </div>

    <a className="buy-button" href={purchaseUrl} onClick={() => trackPurchaseClick("buy_click_final", "final")}>Get Instant Access — $19.90</a>
    <p className="offer-note">One-time payment · Instant access · No subscription</p>
  </div>;
}
