function r1Function(){
    let ss = SpreadsheetApp.getActiveSpreadsheet();
    let ws = ss.getSheetByName('工作表4');
    let head = ws.getSheetValues(1, 1, 1, 4);
    let data = ws.getSheetValues(2, 1, 3, 4);
    // console.log('head',head);
    // console.log('data',data);

    let lastRowIndex = ws.getLastRow();
    // console.log(lastRowIndex);
    let lastColIndex = ws.getLastColumn();
    // console.log(lastColIndex);
    head = ws.getSheetValues(1, 1, 1, lastColIndex);
    data = ws.getSheetValues(2, 1, lastRowIndex-1, lastColIndex);
    console.log('data',data);
  }
