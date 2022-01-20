function myFunction() {
    // console.log('Hello World');
    /**
     繳費單位、繳費日期、繳費金額、備註
     */
    let ss = SpreadsheetApp.getActiveSpreadsheet();
    let ws = ss.getSheetByName('工作表1');
    let range = ws.getRange(1,1);
    range.setValue('繳費單位');
  }