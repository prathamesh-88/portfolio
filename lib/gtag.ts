import { GTagEvent } from "@/types";
export const GA_TRACKING_ID = process.env["NEXT_PUBLIC_GA4_MEASUREMENT_ID"];

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, parameters }: GTagEvent): void => {
  window.gtag("event", action, {
    ...parameters,
  });
};
