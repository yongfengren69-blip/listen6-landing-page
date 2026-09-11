export const INITIAL_DURATION_SECONDS = (9 * 60 * 60) + (35 * 60) + 39;
export const REPEAT_DURATION_SECONDS = (8 * 60 * 60) + (16 * 60) + 20;

export function createCountdownState(startedAt) {
  return {
    firstStartedAt: startedAt,
    cycle: 0,
    endsAt: startedAt + (INITIAL_DURATION_SECONDS * 1000),
  };
}

export function normalizeCountdownState(state, now) {
  if (state.endsAt > now) {
    return state;
  }

  const completedCycles = Math.floor((now - state.endsAt) / (REPEAT_DURATION_SECONDS * 1000)) + 1;

  return {
    ...state,
    cycle: Math.max(1, state.cycle + completedCycles),
    endsAt: state.endsAt + (completedCycles * REPEAT_DURATION_SECONDS * 1000),
  };
}

export function getRemainingSeconds(endsAt, now) {
  return Math.max(0, Math.ceil((endsAt - now) / 1000));
}

export function formatCountdown(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return [hours, minutes, remainingSeconds]
    .map((value) => String(value).padStart(2, "0"))
    .join(":");
}
