function r1Function(){
    let ss = SpreadsheetApp.getActiveSpreadsheet();
    let ws = ss.getSheetByName('工作表4');
    let head = ws.getSheetValues(1, 1, 1, 4);
    let data = ws.getSheetValues(2, 1, 3, 4);
    console.log('head',head);
    console.log('data',data);
  }