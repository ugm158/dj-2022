
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

  }
