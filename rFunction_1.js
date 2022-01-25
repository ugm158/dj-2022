function rFunction(){
    let ss = SpreadsheetApp.getActiveSpreadsheet();
    let ws = ss.getSheetByName('工作表4');
    let range = ws.getRange(1, 1, 1, 4);
    let head = range.getValues();
    // console.log(head);//[ [ '繳費單位', '繳費日期', '繳費金額', '備註' ] ]

    range = ws.getRange(2, 1, 3, 4);
    let data = range.getValues();
    console.log(data);


  }