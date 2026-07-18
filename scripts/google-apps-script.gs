// scripts/google-apps-script.gs
// Copy this code into Google Apps Script editor (Extensions > Apps Script)

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Honeypot check
    if (data.website && data.website.trim() !== '') {
      return createJsonResponse({"success": true}); // fake success for bots
    }

    // Rate limiting (max 5 per hour per session)
    const sessionKey = Session.getTemporaryActiveUserKey();
    if (sessionKey) {
      const cache = CacheService.getScriptCache();
      const count = parseInt(cache.get(sessionKey) || '0');
      if (count >= 5) {
        return createJsonResponse({"success": false, "error": "Rate limit exceeded"});
      }
      cache.put(sessionKey, (count + 1).toString(), 3600); // 1 hour
    }

    // Open spreadsheet (replace with your Sheet ID)
    const SHEET_ID = 'YOUR_SHEET_ID_HERE';
    const ss = SpreadsheetApp.openById(SHEET_ID);

    // Get or create sheet named 'RSVPs'
    let sheet = ss.getSheetByName('RSVPs');
    if (!sheet) {
      sheet = ss.insertSheet('RSVPs');
      sheet.appendRow(['RSVP ID', 'Name', 'Guest Count', 'Note', 'Created At', 'Updated At']);
    }

    // Find existing row by rsvpId
    const dataRange = sheet.getDataRange();
    const values = dataRange.getValues();
    let foundRow = -1;
    for (let i = 1; i < values.length; i++) {
      if (values[i][0] === data.rsvpId) {
        foundRow = i + 1;
        break;
      }
    }

    const rowData = [
      data.rsvpId,
      data.name,
      data.guestCount || '',
      data.note || '',
      data.createdAt,
      data.updatedAt
    ];

    if (foundRow > 0) {
      sheet.getRange(foundRow, 1, 1, 6).setValues([rowData]);
    } else {
      sheet.appendRow(rowData);
    }

    return createJsonResponse({"success": true});

  } catch (error) {
    return createJsonResponse({"success": false, "error": error.toString()});
  }
}

function doOptions(e) {
  // Handle CORS preflight requests
  const output = ContentService.createTextOutput('');
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}

function createJsonResponse(data) {
  const output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
