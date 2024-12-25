// Core data-syncing logic for updating leave data from Employee Attendance Tracker to Plan Cuti
function syncLeaveData() {
  // Spreadsheet IDs and Sheet Names
  const ATTENDANCE_TRACKER_ID = "1ftU6WlTZL9AZhS_U24Psm4h2Us-m4dOtboWr9rjLiNU"; // replace with actual file ID
  const PLAN_CUTI_ID = "1CJ1aS7bU-Dg7bQpmW5N00qBwFbuUrCkQ-riKoSBoAMg"; // replace with actual file ID
  const ATTENDANCE_SHEET_NAME = "NEW TOTAL"; // replace if different
  const PLAN_CUTI_SHEET_NAME = "NEW Talenesia"; // replace if different

  // Access the sheets in each file
  const attendanceSheet = SpreadsheetApp.openById(
    ATTENDANCE_TRACKER_ID
  ).getSheetByName(ATTENDANCE_SHEET_NAME);
  const planCutiSheet =
    SpreadsheetApp.openById(PLAN_CUTI_ID).getSheetByName(PLAN_CUTI_SHEET_NAME);

  // Get data from Employee Attendance Tracker
  const attendanceData = attendanceSheet.getDataRange().getValues();

  // Get data from Plan Cuti
  const planCutiData = planCutiSheet.getDataRange().getValues();

  // Map attendance data by Name for quick lookup
  const attendanceMap = {};
  attendanceData.slice(1).forEach((row) => {
    const name = row[1]; // Assuming 'Name' is in the second column (index 1)
    const totalCutiPengganti = row[39]; // Adjust index if needed
    const totalCutiTahunan = row[40]; // Adjust index if needed
    const totalCutiTahunanAprDes = row[41];
    const totalCutiTidakBerbayar = row[42]; // Adjust index if needed
    attendanceMap[name] = [
      totalCutiPengganti,
      totalCutiTahunan,
      totalCutiTahunanAprDes,
      totalCutiTidakBerbayar,
    ];
  });

  // Add headers for CP, CT, and CTB in the Plan Cuti sheet if they are not already present
  const headerRow = planCutiData[0]; // First row (index 0) for headers
  const cpIndex = 9; // Adjust this to the correct index for "Total Cuti Pengganti"
  const ctIndex = 10; // Adjust this to the correct index for "Total Cuti Tahunan"
  const ctADIndex = 11; // Adjust this to the correct index for "Total Cuti Tahunan Apr-Des"
  const ulIndex = 12; // Adjust this to the correct index for "Total Cuti Tidak Berbayar"

  // Check if headers exist
  if (!headerRow[cpIndex]) {
    planCutiSheet
      .getRange(3, cpIndex + 1)
      .setValue("CP") // Set header for Total Cuti Pengganti
      .setFontWeight("bold") // Make the header bold
      .setHorizontalAlignment("center"); // Center align the header
  }
  if (!headerRow[ctIndex]) {
    planCutiSheet
      .getRange(3, ctIndex + 1)
      .setValue("CT") // Set header for Total Cuti Tahunan
      .setFontWeight("bold") // Make the header bold
      .setHorizontalAlignment("center"); // Center align the header
  }
  if (!headerRow[ctADIndex]) {
    planCutiSheet
      .getRange(3, ctADIndex + 1)
      .setValue("CT Apr-Des") // Set header for Total Cuti Tahunan Apr-Des
      .setFontWeight("bold") // Make the header bold
      .setHorizontalAlignment("center"); // Center align the header
  }
  if (!headerRow[ulIndex]) {
    planCutiSheet
      .getRange(3, ulIndex + 1)
      .setValue("UL") // Set header for Total Cuti Tidak Berbayar
      .setFontWeight("bold") // Make the header bold
      .setHorizontalAlignment("center"); // Center align the header
  }

  // Update Plan Cuti with the relevant data
  for (let i = 1; i < planCutiData.length; i++) {
    const name = planCutiData[i][0]; // Assuming 'Name' is in the first column
    if (attendanceMap[name]) {
      planCutiSheet
        .getRange(i + 1, cpIndex + 1)
        .setValue(attendanceMap[name][0]) // Total Cuti Pengganti
        .setHorizontalAlignment("center"); // Center align the data
      planCutiSheet
        .getRange(i + 1, ctIndex + 1)
        .setValue(attendanceMap[name][1]) // Total Cuti Tahunan
        .setHorizontalAlignment("center"); // Center align the data
      planCutiSheet
        .getRange(i + 1, ctADIndex + 1)
        .setValue(attendanceMap[name][2]) // Total Cuti Tidak Berbayar
        .setHorizontalAlignment("center"); // Center align the data
      planCutiSheet
        .getRange(i + 1, ulIndex + 1)
        .setValue(attendanceMap[name][3]) // Total Cuti Tidak Berbayar
        .setHorizontalAlignment("center"); // Center align the data
    }
  }

  Logger.log("Leave data synced successfully!");

  /*  // Create a table after syncing data
    createTable();*/
}
