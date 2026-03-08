

## Problem

The form submission to Google Sheets is failing (network status 0). The root cause:

When using `mode: "no-cors"`, the browser only allows **simple headers**. `Content-Type: application/json` is NOT a simple header, so the request gets blocked silently. The Google Apps Script never receives the data.

## Fix

**`src/lib/google-sheets.ts`** — Change the Content-Type to `text/plain` (which is allowed in no-cors mode). The Google Apps Script can still parse JSON from a text/plain body.

```typescript
await fetch(GOOGLE_SCRIPT_URL, {
  method: "POST",
  mode: "no-cors",
  headers: { "Content-Type": "text/plain" },
  body: JSON.stringify(data),
});
```

Also need to update the **Google Apps Script** to handle `text/plain` content type. The `doPost(e)` function should read from `e.postData.contents` which works regardless of content type — so the script side should already work if it was set up as provided.

This is a one-line change in one file.

