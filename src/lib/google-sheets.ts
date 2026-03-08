const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz9QzvgGNHxu-x_EUG-GFsE53OgGnjxU95Bn-63VvEs2Jwfkqr7yjTmXdPgL08IR4VRYw/exec";

interface FormSubmission {
  name: string;
  phone: string;
  email?: string;
  serviceType?: string;
  source: "quick" | "full";
}

export async function submitToGoogleSheet(data: FormSubmission): Promise<boolean> {
  try {
    // Google Apps Script שלך מאזין ל-doPost וקורא JSON.parse(e.postData.contents)
    const payload = JSON.stringify(data);

    // no-cors מחזיר תגובה opaque, אבל עדיין שולח את הבקשה בפועל
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: payload,
    });

    return true;
  } catch (error) {
    console.error("Failed to submit form:", error);
    return false;
  }
}
