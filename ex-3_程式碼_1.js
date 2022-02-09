/*=================================================
  收到 HTTP GET Request 後的程式入口
  e 為 「eparameter」，是傳遞給函數的事件對象
=================================================*/
function doGet(e) {
    // 回傳文字
    // return ContentService.createTextOutput('郭俊良');

    // 回傳html
    // return HtmlService.createHtmlOutput('<h1>Hello world!</h1>');

    // 回傳json
    let head = ['繳費單位', '繳費日期', '繳費金額', '備註'];
    let json = JSON.stringify(head);//將資料轉json格式
    return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);//先將JSON資料轉成「純文字」，再透過setMimeType()將文字改成JSON

  }

  /*=================================================
    安裝函式
  =================================================*/
  function setup(){
    // 取得試算表
    let ss = Sheet.getSs();

    // 指定要處理的工作作名稱
    let sheet = '繳費通知';// 工作表1
    // 建立工作表
    Sheet.createSheet(sheet);

    // 建立標題
    let row = ['繳費單位','繳費日期','繳費金額','備註'];
    Sheet.setHead(sheet,row);
  }
