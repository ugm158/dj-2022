
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

    // 建立標題
    let row = ['繳費單位2','繳費日期2','繳費金額2','備註2'];
    // setCellData(sheet, rowIndex, colIndex, value, type='')
    let rowIndex =1;
    let colIndex,value;
    for(let i in row){
      colIndex = parseInt(i) + 1;
      value = row[i];
      Sheet.setCellData(sheet, rowIndex, colIndex, value);
    }

    console.log(ws);
  }
