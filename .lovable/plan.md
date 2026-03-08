

## Plan: Connect Both Forms to Google Sheets

### What We Need

Both forms (QuickContactStrip and LeadFormSection) currently only show a success message without actually sending data anywhere. We need to send the form submissions to your Google Sheet.

### Approach: Google Apps Script Web App

Since this project doesn't have Supabase/Cloud connected, the simplest approach is to use a **Google Apps Script** deployed as a web app on your Google Sheet. This creates a free, serverless endpoint that accepts POST requests and writes data directly to the sheet -- no backend needed.

### Steps

**Step 1 -- You set up a Google Apps Script (manual, ~2 minutes):**
1. Open your Google Sheet
2. Go to **Extensions > Apps Script**
3. Paste a script I'll provide that handles incoming POST requests and appends rows
4. Click **Deploy > New Deployment > Web App**, set "Anyone" access, and copy the URL

**Step 2 -- I update the code (2 files):**

| File | Change |
|------|--------|
| `src/components/QuickContactStrip.tsx` | Update `handleSubmit` to POST `{name, phone, source: "quick"}` to the Apps Script URL |
| `src/components/LeadFormSection.tsx` | Update `onSubmit` to POST `{name, phone, email, serviceType, source: "full"}` to the Apps Script URL |

Both forms will:
- Show a loading state while sending
- Show the success message on success
- Show an error toast if the request fails
- Use `fetch()` with `mode: 'no-cors'` or handle CORS via the Apps Script

### Google Apps Script Code (for you to paste)
```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(),
    data.name || "",
    data.phone || "",
    data.email || "",
    data.serviceType || "",
    data.source || ""
  ]);
  return ContentService.createTextOutput(JSON.stringify({status: "success"}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### Alternative: Lovable Cloud

If you prefer not to set up the Apps Script manually, we can enable **Lovable Cloud** and create an edge function that uses the Google Sheets API with a service account. This is more robust but requires more setup. Would you prefer this approach?

