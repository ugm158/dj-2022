
/*======================================
  建立 Sheet class
======================================*/
class Sheet{
    // 建構函式
    constructor(sheet){
      this.ss = SpreadsheetApp.getActiveSpreadsheet();
      this.ws = this.ss.getSheetByName(sheet);
    }

  }