"use client";

import type { ButtonPosition, PurchaseEventName } from "../analytics";
import { trackPurchaseClick } from "../analytics";

type TrackedPurchaseLinkProps = {
  children: React.ReactNode;
  className?: string;
  eventName: PurchaseEventName;
  buttonPosition: ButtonPosition;
  purchaseUrl: string;
};

export function TrackedPurchaseLink({
  children,
  className = "offer-link",
  eventName,
  buttonPosition,
  purchaseUrl,
}: TrackedPurchaseLinkProps) {
  return (
    <a
      className={className}
      href={purchaseUrl}
      onClick={() => trackPurchaseClick(eventName, buttonPosition)}
    >
      {children}
    </a>
  );
}
