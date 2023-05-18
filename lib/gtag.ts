export const GA_TRACKING_ID = process.env["NEXT_PUBLIC_GA4_MEASUREMENT_ID"];

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (
  action: string,
  parameters: { [k: string]: any }
): void => {
  window.gtag("event", action, {
    ...parameters,
  });
};
