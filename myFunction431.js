
/*=======================================
  寫入資料列
=======================================*/
function myFunction43(){
    // 寫入標題
    myFunction4();
    // 寫入資料列

    data = [
      ['王山銀行','2022/01/20',1000,'卡費'],// data[0][0]
      ['國泰銀行','2022/01/21',5000,'股票'],// data[1]
      ['聯邦銀行','2022/01/22',8000,'卡費'] // data[2]
    ];

    // setCellData(sheet, rowIndex, colIndex, value, type='')
    let sheet = '工作表4';
    let rowIndex,colIndex,type;
    for(let i in data){
      // 列指標
      rowIndex = parseInt(i) + 2;
      for(let j in data[i]){
        colIndex = parseInt(j) + 1;
        value = data[i][j];
        type = '';
        if(j == '1'){
          type = '文字';
        }
        setCellData(sheet, rowIndex, colIndex, value, type);
      }

    }


  }