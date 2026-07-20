import { track as vercelTrack } from "@vercel/analytics";

const IS_VERCEL_PRO = false;

export function track(eventName: string, properties?: Record<string, any>) {
  if (!IS_VERCEL_PRO) {
    // In Hobby mode, it logs safely to your local dev terminal instead of throwing errors
    if (process.env.NODE_ENV === "development") {
      console.log(`[Dormant Analytics] Event: ${eventName}`, properties);
    }
    return;
  }

  // Fires real Vercel events once PRO is activated
  vercelTrack(eventName, properties);
}
