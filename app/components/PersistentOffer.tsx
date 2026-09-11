"use client";

import { useEffect, useState } from "react";
import {
  INITIAL_DURATION_SECONDS,
  createCountdownState,
  formatCountdown,
  getRemainingSeconds,
  normalizeCountdownState,
} from "../offer-countdown.mjs";

const storageKey = "listen6-paid-listening-offer-v1";

type CountdownState = {
  firstStartedAt: number;
  cycle: number;
  endsAt: number;
};

const isCountdownState = (value: unknown): value is CountdownState => {
  if (!value || typeof value !== "object") {
    return false;
  }

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
  } catch {
    window.localStorage.removeItem(storageKey);
  }

  const initial = createCountdownState(now);
  saveCountdownState(initial);
  return initial;
};

export function PersistentOffer({ purchaseUrl }: { purchaseUrl: string }) {
  const [countdown, setCountdown] = useState<CountdownState | null>(null);
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const start = () => {
      const currentTime = Date.now();
      const state = loadCountdownState(currentTime);
      setCountdown(state);
      setNow(currentTime);
    };

    const tick = () => {
      const currentTime = Date.now();
      setCountdown((current) => {
        if (!current) {
          return current;
        }

        const normalized = normalizeCountdownState(current, currentTime);
        if (normalized !== current) {
          saveCountdownState(normalized);
        }
        return normalized;
      });
      setNow(currentTime);
    };

    start();
    const interval = window.setInterval(tick, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const secondsRemaining = countdown && now
    ? getRemainingSeconds(countdown.endsAt, now)
    : INITIAL_DURATION_SECONDS;

  return <>
    <div className="offer-countdown" aria-live="polite">
      <span>LIMITED-TIME PRICE</span>
      <strong>{formatCountdown(secondsRemaining)}</strong>
    </div>

    <div className="price-row" aria-label="Price">
      <div className="price-labels">
        <span>ORIGINAL PRICE <s>$99.90</s></span>
        <span>CURRENT PRICE</span>
      </div>
      <strong>$39.90</strong>
    </div>

    <a className="buy-button" href={purchaseUrl}>Get The Paid Listening Blueprint — $39.90</a>
  </>;
}
