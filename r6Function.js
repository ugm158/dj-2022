
/**
  寫值
 */
  function r6Function(){
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

  }