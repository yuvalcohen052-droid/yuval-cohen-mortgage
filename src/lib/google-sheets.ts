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
    const params = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });

    const response = await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, {
      method: "GET",
    });

    return response.ok;
  } catch (error) {
    console.error("Failed to submit form:", error);
    return false;
  }
}
