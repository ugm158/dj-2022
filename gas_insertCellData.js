
/*============================================================
  寫入單一儲存格
=============================================================*/
function insertCellData(sheet,rowIndex,colIndex,value,type=''){
    let ss = SpreadsheetApp.getActiveSpreadsheet();//取得試算表
    let ws = ss.getSheetByName(sheet);//取得工作表
    let range = ws.getRange(rowIndex, colIndex);//取得儲存格
    if(type == '文字'){
      range.setNumberFormat('@').setValue(value);//寫值，將儲存格格式化成文字
    }else{
      range.setValue(value);//寫值
    }
}