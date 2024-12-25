const CustomUI = {
  titleMenu: "Update Data",
  updateLeaveData: "Update Leave Data from Employee Attendance Tracker",
  inputPrompt: {
    title: "Leave Data Update",
    prompt: "Do you want to update the latest leave data. Proceed?",
  },
};

// Automatically creates the menu when the spreadsheet opens
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu(CustomUI.titleMenu)
    .addItem(CustomUI.updateLeaveData, "menuUpdateLeaveData")
    .addToUi();
}

// Function called when "Update Leave Data" menu item is selected
function menuUpdateLeaveData() {
  const ui = SpreadsheetApp.getUi();
  const response = ui.alert(
    CustomUI.inputPrompt.title,
    CustomUI.inputPrompt.prompt,
    ui.ButtonSet.YES_NO
  );

  if (response === ui.Button.YES) {
    try {
      syncLeaveData();
      ui.alert(
        "Success",
        "Leave data has been updated successfully!",
        ui.ButtonSet.OK
      );
    } catch (e) {
      ui.alert(
        "Error",
        "Failed to update leave data. Please try again later.",
        ui.ButtonSet.OK
      );
    }
  }
}
