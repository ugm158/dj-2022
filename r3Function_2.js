/**
 取得標題 head
 取得資料 data
 */
 function r3Function(){
    let ss = SpreadsheetApp.getActiveSpreadsheet();
    let ws = ss.getSheetByName('工作表4');
    let head = ws.getSheetValues(1, 1, 1, ws.getLastColumn());
    // console.log(head);
    let data = ws.getSheetValues(2, 1, 12, ws.getLastColumn());
    console.log(data);

  }