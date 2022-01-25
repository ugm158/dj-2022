function rFunction(){
    let ss = SpreadsheetApp.getActiveSpreadsheet();
    let ws = ss.getSheetByName('工作表4');
    let range = ws.getRange(1, 1, 1, 4);
    let head = range.getValues();
    // console.log(head);//[ [ '繳費單位', '繳費日期', '繳費金額', '備註' ] ]
    console.log(head[0][1]);


  }