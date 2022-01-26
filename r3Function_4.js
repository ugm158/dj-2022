/**
 取得標題 head
 取得資料 data
 */
 function r3Function(){
    let ss = SpreadsheetApp.getActiveSpreadsheet();
    let ws = ss.getSheetByName('工作表4');
    let head = ws.getSheetValues(1, 1, 1, ws.getLastColumn());
    console.log(head);
    let data = ws.getSheetValues(2, 1, ws.getLastRow() - 1, ws.getLastColumn());

    // console.log('個數：' + data.length,  data);

    // 請問有什麼方法，可以讓 head = ['繳費單位', '繳費日期', '繳費金額', '備註'];

  }
