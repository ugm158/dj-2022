
/**
  寫值
 */
  function r6Function(){
    // 寫入標題
    let head = ['繳費單位', '繳費日期', '繳費金額', '備註'];
    let sheet = '繳費通知';
    let rowIndex = 1;
    let type = '文字';
    let colIndex,value;
    for(let i in head){
      colIndex = parseInt(i) + 1;
      value = head[i];
      // 寫入單一儲存格
      Sheet.setCellData(sheet, rowIndex, colIndex, value, type);
    }

    // 寫入資料
    // let data = [
    //   [ '王山銀行', '2022/01/20', 1000, '卡費' ],
    //   [ '國泰銀行', '2022/01/21', 5000, '股票' ],
    //   [ '聯邦銀行', '2022/01/22', 8000, '卡費' ],
    //   [ '王山銀行', '2022/01/20', 1000, '卡費' ],
    //   [ '國泰銀行', '2022/01/21', 5000, '股票' ],
    //   [ '聯邦銀行', '2022/01/22', 8000, '卡費' ],
    //   [ '王山銀行', '2022/01/20', 1000, '卡費' ],
    //   [ '國泰銀行', '2022/01/21', 5000, '股票' ],
    //   [ '聯邦銀行', '2022/01/22', 8000, '卡費' ],
    //   [ '王山銀行', '2022/01/20', 1000, '卡費' ],
    //   [ '國泰銀行', '2022/01/21', 5000, '股票' ],
    //   [ '聯邦銀行', '2022/01/22', 8000, '卡費' ]
    // ];

    sheet = '工作表4';
    let data = Sheet.getData(sheet);

    sheet = '繳費通知';


    // Sheet.setCellData(sheet, rowIndex, colIndex, value, type);
    for(let i in data){
      rowIndex = parseInt(i) + 2;
      for(let j in data[i]){
        colIndex = parseInt(j) + 1;
        value = data[i][j];
        if(j == '1'){
          type = '文字';
        }else{
          type = '';
        }
        Sheet.setCellData(sheet, rowIndex, colIndex, value, type);
      }
    }


  }
