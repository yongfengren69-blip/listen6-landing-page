import assert from "node:assert/strict";
import test from "node:test";
import {
  INITIAL_DURATION_SECONDS,
  REPEAT_DURATION_SECONDS,
  createCountdownState,
  formatCountdown,
  getRemainingSeconds,
  normalizeCountdownState,
} from "../app/offer-countdown.mjs";

test("starts first visits at 09:35:39 and keeps progress on refresh", () => {
  const startedAt = 1_000_000;
  const initial = createCountdownState(startedAt);
  const refreshedAt = startedAt + 1_000;
  const refreshed = normalizeCountdownState(initial, refreshedAt);

  assert.equal(formatCountdown(getRemainingSeconds(initial.endsAt, startedAt)), "09:35:39");
  assert.equal(refreshed, initial);
  assert.equal(formatCountdown(getRemainingSeconds(refreshed.endsAt, refreshedAt)), "09:35:38");
});

test("keeps the saved cycle state after closing and reopening", () => {
  const stored = createCountdownState(1_000_000);
  const reopenedAt = stored.firstStartedAt + (5 * 60 * 1000);
  const reopened = normalizeCountdownState(stored, reopenedAt);

  assert.equal(reopened, stored);
  assert.equal(reopened.firstStartedAt, stored.firstStartedAt);
  assert.equal(reopened.cycle, 0);
  assert.equal(formatCountdown(getRemainingSeconds(reopened.endsAt, reopenedAt)), "09:30:39");
});

test("moves from the initial countdown into the first repeating cycle", () => {
  const initial = createCountdownState(0);
  const firstLoop = normalizeCountdownState(initial, initial.endsAt);

  assert.equal(firstLoop.cycle, 1);
  assert.equal(formatCountdown(getRemainingSeconds(firstLoop.endsAt, initial.endsAt)), "08:16:20");
});

test("restarts every later expired cycle at 08:16:20", () => {
  const initial = createCountdownState(0);
  const firstLoop = normalizeCountdownState(initial, initial.endsAt);
  const secondLoop = normalizeCountdownState(firstLoop, firstLoop.endsAt);

  assert.equal(secondLoop.cycle, 2);
  assert.equal(formatCountdown(getRemainingSeconds(secondLoop.endsAt, firstLoop.endsAt)), "08:16:20");
  assert.equal(secondLoop.endsAt - firstLoop.endsAt, REPEAT_DURATION_SECONDS * 1000);
  assert.equal(initial.endsAt, INITIAL_DURATION_SECONDS * 1000);
});
