
/*============================================================
  function4
=============================================================*/
function myFunction4(){
    let row = ['繳費單位',	'繳費日期',	'繳費金額',	'備註'];
    let sheet = '工作表3';
    let rowIndex = 1;

    let colIndex,value;
    for(let i in row){
      colIndex = parseInt(i) + 1;
      value = row[i];
      insertCellData(sheet,rowIndex,colIndex,value);
    }

  }
