function createTable() {
  const ATTENDANCE_TRACKER_ID = "1ftU6WlTZL9AZhS_U24Psm4h2Us-m4dOtboWr9rjLiNU"; // replace with actual file ID
  const PLAN_CUTI_ID = "1CJ1aS7bU-Dg7bQpmW5N00qBwFbuUrCkQ-riKoSBoAMg"; // replace with actual file ID
  const PLAN_CUTI_SHEET_NAME = "NEW Talenesia"; // replace if different

  // Access the Plan Cuti sheet
  const planCutiSheet =
    SpreadsheetApp.openById(PLAN_CUTI_ID).getSheetByName(PLAN_CUTI_SHEET_NAME);

  // Determine the range for the table (Assuming data starts from row 3 and includes headers)
  const lastRow = planCutiSheet.getLastRow();
  const lastColumn = planCutiSheet.getLastColumn();
  const range = planCutiSheet.getRange(3, 1, lastRow - 2, lastColumn); // Starting from row 3

  // Apply borders
  range.setBorder(true, true, true, true, true, true);

  // Optionally set the background color for the header row
  planCutiSheet.getRange(3, 1, 1, lastColumn).setBackground("#f0f0f0"); // Light gray background

  // Auto resize columns to fit content
  for (let i = 1; i <= lastColumn; i++) {
    planCutiSheet.autoResizeColumn(i);
  }

  // Optionally add a filter to the table
  planCutiSheet.getRange(3, 1, lastRow - 2, lastColumn).createFilter();
}
