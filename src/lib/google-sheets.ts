const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyVRDE7pHV_4v3dNLFyiRMBq2UvdGGqiutdtRUJRSmx1In3MtVpnetNrFi_kML_f_I2XQ/exec";

interface FormSubmission {
  name: string;
  phone: string;
  email?: string;
  serviceType?: string;
  source: "quick" | "full";
}

export async function submitToGoogleSheet(data: FormSubmission): Promise<boolean> {
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    // no-cors returns opaque response, so we assume success if no error thrown
    return true;
  } catch (error) {
    console.error("Failed to submit form:", error);
    return false;
  }
}
