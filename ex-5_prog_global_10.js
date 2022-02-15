/*=====================================
  取得全域變數
  上午9:48:54	資訊	[ [ '網站標題', '育將電腦工作室' ] ]
  上午9:48:54	資訊	網站標題
  上午9:48:54	資訊	育將電腦工作室
=====================================*/
function get_global() {
    let ws = Sheet.getWs('全域變數');
    let rows = ws.getSheetValues(1,1,ws.getLastRow(), ws.getLastColumn());
    let global = {};
    for(let i in rows){
      global[rows[0][0]] = rows[0][1];
    }
    global['url'] = ScriptApp.getService().getUrl();//取得網頁應用程式網址
    global['isAdmin'] = SCRIPT_PROP.getProperty("adminEmail") == Session.getActiveUser().getEmail() ? true : false;
    // console.log(global);
    return global;
  }
