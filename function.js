/*======================================
 單一儲存格寫值
======================================*/
function setCellData(sheet, rowIndex, colIndex, value, type='') {
    let ss = SpreadsheetApp.getActiveSpreadsheet();
    let ws = ss.getSheetByName(sheet);
    let range = ws.getRange(rowIndex, colIndex);

    if(type == '文字'){
      range.setNumberFormat('@').setValue(value);
    }else {
      range.setValue(value);
    }
  }