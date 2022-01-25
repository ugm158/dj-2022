function myFunction() {
    // console.log('Hello World');
    let ss = SpreadsheetApp.getActiveSpreadsheet();

    let ws = ss.getSheetByName('工作表1');
    let range = ws.getRange(1,1);
    // 繳費單位	繳費日期	繳費金額	備註
    range.setValue('繳費單位');

    range = ws.getRange(1,2);
    range.setValue('繳費日期');

    range = ws.getRange(1,3);
    range.setValue('繳費金額');

    range = ws.getRange(1,4);
    range.setValue('備註');

  }

  function myFunction2() {
    // console.log('Hello World');
    let ss = SpreadsheetApp.getActiveSpreadsheet();

    let ws = ss.getSheetByName('工作表2');
    let range = ws.getRange(1,1);
    // 繳費單位	繳費日期	繳費金額	備註
    range.setValue('繳費單位');

    range = ws.getRange(1,2);
    range.setValue('繳費日期');

    range = ws.getRange(1,3);
    range.setValue('繳費金額');

    range = ws.getRange(1,4);
    range.setValue('備註');

  }

  function myFunction3() {
    // console.log('Hello World');
    let ss = SpreadsheetApp.getActiveSpreadsheet();

    let ws = ss.getSheetByName('工作表2');
    let rowData = ['繳費單位', '繳費日期', '繳費金額', '備註'];
    //----------------------------------------------------- 1. 正常迴圈
    // for(let i = 0; i < rowData.length; i++){
    //   console.log(rowData[i]);
    // }

    //----------------------------------------------------- 2. for of
    // for(let v of rowData){
    //   console.log(v);
    // }

    //----------------------------------------------------- 2. for in
    ws = ss.getSheetByName('工作表3');
    let range,colIndex;
    let rowIndex = 1;
    for(let i in rowData){
      // console.log(parseInt(i));
      // console.log(rowData[i]);
      colIndex = parseInt(i) + 1;
      range = ws.getRange(rowIndex, colIndex);
      range.setValue(rowData[i]);
    }

    // let x = 1;
    // let y = '1';
    // console.log(x + parseInt(y));

  }

  function myFunction4() {
    let ss = SpreadsheetApp.getActiveSpreadsheet();

    let ws = ss.getSheetByName('工作表4');
    let rowData = ['繳費單位', '繳費日期', '繳費金額', '備註'];

    //----------------------------------------------------- 2. for in
    // ws = ss.getSheetByName('工作表4');
    let sheet = '工作表4';
    let value,colIndex;
    let rowIndex = 1;
    for(let i in rowData){
      colIndex = parseInt(i) + 1;
      value = rowData[i];
      setCellData(sheet, rowIndex, colIndex, value);
    }

  }

  /*=======================================
    寫入資料列
  =======================================*/
  function myFunction41() {
    let sheet = '工作表4';

    // data = [
    //       ['王山銀行','2022/01/20',1000,'卡費'],
    //       ['國泰銀行','2022/01/21',5000,'股票'],
    //       ['聯邦銀行','2022/01/22',8000,'卡費']
    // ];

    let rowData = ['王山銀行','2022/01/20',1000,'卡費'];
    let rowIndex = 2;
    let colIndex,value;
    for(let i in rowData){
      // console.log(typeof i);
      // parseInt(i)
      colIndex = parseInt(i) + 1;
      value = rowData[i];
      if(i == 1){
        setCellData(sheet, rowIndex, colIndex, value, '文字');
      }else {
        setCellData(sheet, rowIndex, colIndex, value);
      }
    }


  }
