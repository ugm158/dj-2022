

/*======================================
  建立 Sheet class
======================================*/
class Sheet{
    // 建構函式
    constructor(){
      this.ss = SpreadsheetApp.getActiveSpreadsheet();
    }

    getWs(sheet){
      return this.ss.getSheetByName(sheet);
    }

  }