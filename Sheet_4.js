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
      let ss = this.getSs();//取得試算表
      let ws = this.getWs(sheet);// 取得工作表
      return ws.getSheetValues(1, 1, 1, ws.getLastColumn())[0];
    }

  }