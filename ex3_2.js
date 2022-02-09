
/*=================================================
  安裝函式
=================================================*/
function setup(){
    // 取得試算表
    let ss = Sheet.getSs();
    // 指定要處理的工作作名稱
    let sheet = '繳費通知';// 工作表1
    // 取得工作表
    let ws = Sheet.getWs(sheet);
    if(ws === null){
      // 建立工作表
      ws = ss.insertSheet();
      // 設定工作表名稱
      ws.setName(sheet);
    }

    console.log(ws);
  }
