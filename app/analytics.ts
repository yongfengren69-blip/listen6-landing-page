export const GA_MEASUREMENT_ID = "G-CQKMHD5TSB";

export const trafficSourceByPath = {
  "/": "other",
  "/tk": "tiktok",
  "/ig": "instagram",
  "/fb": "facebook",
  "/yt": "youtube",
} as const;

export type TrafficSource = (typeof trafficSourceByPath)[keyof typeof trafficSourceByPath];
export type PurchaseEventName =
  | "buy_click_hero"
  | "buy_click_opportunity"
  | "buy_click_first_client"
  | "buy_click_final";
export type ButtonPosition = "hero" | "opportunity" | "first_client" | "final";

type TrafficContext = {
  trafficSource: TrafficSource;
  entryPath: string;
};

type StoredTrafficContext = TrafficContext;

declare global {
  interface Window {
    __listen6Ga4Configured?: boolean;
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
  }
}

const trafficStorageKey = "listen6-traffic-source-v1";

const isTrafficSource = (value: unknown): value is TrafficSource =>
  typeof value === "string" && Object.values(trafficSourceByPath).includes(value as TrafficSource);

const getTrafficContext = (pathname: string): TrafficContext => {
  const normalizedPath = pathname === "" ? "/" : pathname;
  const trafficSource = trafficSourceByPath[normalizedPath as keyof typeof trafficSourceByPath] ?? "other";

  return { trafficSource, entryPath: normalizedPath };
};

const getGtag = () => {
  window.dataLayer ??= [];
  window.gtag ??= (...args: unknown[]) => window.dataLayer?.push(args);
  return window.gtag;
};

export const initializeGa4 = () => {
  getGtag();
};

export const rememberTrafficContext = (): TrafficContext => {
  const context = getTrafficContext(window.location.pathname);

  try {
    window.sessionStorage.setItem(trafficStorageKey, JSON.stringify(context));
  } catch {}

  return context;
};

const getRememberedTrafficContext = (): TrafficContext => {
  try {
    const stored = window.sessionStorage.getItem(trafficStorageKey);
    const parsed = stored ? JSON.parse(stored) as Partial<StoredTrafficContext> : null;

    if (parsed && isTrafficSource(parsed.trafficSource) && typeof parsed.entryPath === "string") {
      return { trafficSource: parsed.trafficSource, entryPath: parsed.entryPath };
    }
  } catch {}

  return rememberTrafficContext();
};

export const trackSalesPageView = () => {
  const { trafficSource, entryPath } = rememberTrafficContext();
  getGtag()("event", "sales_page_view", {
    traffic_source: trafficSource,
    entry_path: entryPath,
  });
};

export const trackPurchaseClick = (eventName: PurchaseEventName, buttonPosition: ButtonPosition) => {
  const { trafficSource } = getRememberedTrafficContext();
  getGtag()("event", eventName, {
    traffic_source: trafficSource,
    button_position: buttonPosition,
    price: 19.9,
    currency: "USD",
    transport_type: "beacon",
  });
};
