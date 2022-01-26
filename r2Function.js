/**
 取得日期那欄的資料，是一個二維陣列
 */
 function r2Function(){
    let ss = SpreadsheetApp.getActiveSpreadsheet();
    let ws = ss.getSheetByName('工作表4');
    let range = ws.getRange(2, 2, 12);
    let date = range.getValues();
    console.log(date);
    /**
     [  [ '2022/01/20' ],
        [ '2022/01/21' ],
        [ '2022/01/22' ],
        [ '2022/01/20' ],
        [ '2022/01/21' ],
        [ '2022/01/22' ],
        [ '2022/01/20' ],
        [ '2022/01/21' ],
        [ '2022/01/22' ],
        [ '2022/01/20' ],
        [ '2022/01/21' ],
        [ '2022/01/22' ] ]
     */

  }