/**
 * Google Apps Script — Innovative Holdings Lead Capture
 * ======================================================
 *
 * DEPLOYMENT INSTRUCTIONS
 * -----------------------
 * 1. Open Google Sheets and create a new spreadsheet.
 * 2. Name it "Innovative Holdings Leads" (or any name you prefer).
 * 3. Add these exact column headers in Row 1 (A1:N1):
 *
 *    Timestamp | Form Type | Name | Email | Company | Revenue |
 *    Primary Challenge | Message | Role | Experience |
 *    Source Page | UTM Source | UTM Medium | UTM Campaign
 *
 * 4. In the spreadsheet, click Extensions → Apps Script.
 * 5. Delete any existing code and paste this entire file.
 * 6. Click Save (Ctrl+S / Cmd+S).
 * 7. Click Deploy → New deployment.
 * 8. Select type: "Web app".
 * 9. Set:
 *      - Description: "Lead Capture v1"
 *      - Execute as: "Me"
 *      - Who has access: "Anyone"  ← required for the API route to call it
 * 10. Click Deploy and copy the Web app URL ending in /exec.
 * 11. Paste that URL into your .env.local file as GOOGLE_SCRIPT_URL.
 *
 * GOOGLE SHEET HEADERS (copy exactly into Row 1):
 *   A: Timestamp
 *   B: Form Type
 *   C: Name
 *   D: Email
 *   E: Company
 *   F: Revenue
 *   G: Primary Challenge
 *   H: Message
 *   I: Role
 *   J: Experience
 *   K: Source Page
 *   L: UTM Source
 *   M: UTM Medium
 *   N: UTM Campaign
 *
 * VERCEL SETUP
 * ------------
 * Add GOOGLE_SCRIPT_URL to your Vercel project environment variables:
 * Vercel Dashboard → Project → Settings → Environment Variables
 */

// ─── Configuration ────────────────────────────────────────────────────────────

// The name of the sheet tab to write to (default "Sheet1" or rename as needed)
var SHEET_NAME = "Leads";

// ─── POST handler ─────────────────────────────────────────────────────────────

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME);

    // Auto-create the sheet and headers if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        "Timestamp",
        "Form Type",
        "Name",
        "Email",
        "Company",
        "Revenue",
        "Primary Challenge",
        "Message",
        "Role",
        "Experience",
        "Source Page",
        "UTM Source",
        "UTM Medium",
        "UTM Campaign",
      ]);
      // Bold and freeze the header row
      sheet.getRange(1, 1, 1, 14).setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.formType || "",
      data.name || "",
      data.email || "",
      data.company || "",
      data.revenue || "",
      data.primaryChallenge || "",
      data.message || "",
      data.role || "",
      data.experience || "",
      data.sourcePage || "",
      data.utmSource || "",
      data.utmMedium || "",
      data.utmCampaign || "",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// ─── GET handler (health check) ──────────────────────────────────────────────

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ ok: true, service: "Innovative Holdings Lead Capture" })
  ).setMimeType(ContentService.MimeType.JSON);
}
