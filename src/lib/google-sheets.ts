const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw-tItWZ_fyLh9G_tOGbMl3iGMkZL5XmKt6ibharqj6wdnZ2Sn5DPGUZn-jeCmLYhjdig/exec";

interface FormSubmission {
  name: string;
  phone: string;
  email?: string;
  serviceType?: string;
  source: "quick" | "full";
}

export async function submitToGoogleSheet(data: FormSubmission): Promise<boolean> {
  const payload = JSON.stringify(data);

  try {
    if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
      const queued = navigator.sendBeacon(
        GOOGLE_SCRIPT_URL,
        new Blob([payload], { type: "text/plain;charset=UTF-8" })
      );
      if (queued) return true;
    }

    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=UTF-8" },
      body: payload,
      keepalive: true,
    });

    // no-cors returns opaque response, so we assume success if no error thrown
    return true;
  } catch (error) {
    console.error("Failed to submit form:", error);
    return false;
  }
}
