function myFunction3(){
    /**
      data = [
        ['王山銀行','2022/01/20',1000,'卡費'],
        ['國泰銀行','2022/01/21',5000,'股票'],
        ['聯邦銀行','2022/01/22',8000,'卡費']
      ];
     */
    let ss = SpreadsheetApp.getActiveSpreadsheet();
    let ws = ss.getSheetByName('工作表2');


    let range,colIndex;

    let row = ['王山銀行', '2022/01/20', 1000, '卡費'];
    for(let i in row){
      colIndex = parseInt(i) + 1;
      range = ws.getRange(2,colIndex);
      range.setValue(row[i]);
    }


    // range = ws.getRange(2,2);
    // range.setValue('2022/01/20');


    // range = ws.getRange(2,3);
    // range.setValue(1000);


    // range = ws.getRange(2,4);
    // range.setValue('卡費');




  }

  function myFunction2() {
    /**
     * 繳費單位	繳費日期	繳費金額	備註
     */
    let row = ['繳費單位',	'繳費日期',	'繳費金額',	'備註'];
    let ss = SpreadsheetApp.getActiveSpreadsheet();
    let ws = ss.getSheetByName('工作表2');
    /**
     *  下午1:10:00	資訊	string i= 0 row[i]= 繳費單位
        下午1:10:00	資訊	string i= 1 row[i]= 繳費日期
        下午1:10:00	資訊	string i= 2 row[i]= 繳費金額
        下午1:10:00	資訊	string i= 3 row[i]= 備註
     */
    let range,colIndex;
    for(let i in row){
      // console.log(typeof i, 'i= '+ i, 'row[i]= ' + row[i]);
      // A1
      colIndex = parseInt(i) + 1;
      range = ws.getRange(1,colIndex);
      range.setValue(row[i]);
    }

  }

  function myFunction() {
    // console.log('Hello World');
    /**
     繳費單位、繳費日期、繳費金額、備註
     */
    let ss = SpreadsheetApp.getActiveSpreadsheet();
    let ws = ss.getSheetByName('工作表1');

    // A1
    // SpreadsheetApp.getActiveSpreadsheet().getSheetByName('工作表1').getRange(1,1).setValue('繳費單位');

    // A1
    let range = ws.getRange(1,1);
    range.setValue('繳費單位');


    // B1
    range = ws.getRange(1,2);
    range.setValue('繳費日期');

    // C1
    range = ws.getRange(1,3);
    range.setValue('繳費金額');

    // D1
    range = ws.getRange(1,4);
    range.setValue('備註');

  }
