"use client";

import { useEffect, useRef } from "react";
import { initializeGa4, trackSalesPageView } from "../analytics";

export function AnalyticsTracker() {
  const hasTrackedPageView = useRef(false);

  useEffect(() => {
    initializeGa4();

    if (!hasTrackedPageView.current) {
      hasTrackedPageView.current = true;
      trackSalesPageView();
    }
  }, []);

  return null;
}
