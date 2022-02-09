
/*======================================
  建立 Sheet class
======================================*/
class Sheet{
    //取得試算表
    static getSs(){
      return SpreadsheetApp.getActiveSpreadsheet();
    }

    // 取得工作表
    static getWs(sheet){
      return this.getSs().getSheetByName(sheet);
      // return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet);
    }

    // 取得標題
    static getHead(sheet){
      let ws = this.getWs(sheet);// 取得工作表
      return ws.getSheetValues(1, 1, 1, ws.getLastColumn())[0];
    }

    // 取得工作表資料
    static getData(sheet){
      return this.getWs(sheet).getSheetValues(2, 1, this.getWs(sheet).getLastRow() - 1, this.getWs(sheet).getLastColumn());
    }

    /*======================================
    單一儲存格 寫值
    sheet : 工作表
    rowIndex ： 列指標
    colIndex ： 欄指標
    value ： 值
    type ： 型別
    ======================================*/
    static setCellData(sheet, rowIndex, colIndex, value, type='') {
      let ws = this.getWs(sheet);
      let range = ws.getRange(rowIndex, colIndex);

      if(type == '文字'){
        range.setNumberFormat('@').setValue(value);
      }else {
        range.setValue(value);
      }
    }

    // 建立工作表
    static createSheet(sheet){
      let ws = this.getWs(sheet);
      if(ws === null){
        // 建立工作表
        ws = this.getSs().insertSheet();
        // 設定工作表名稱
        ws.setName(sheet);
      }
    }
  }
