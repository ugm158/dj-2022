/**
 class 使用
 */
 function r4Function(){
    // 調用 Sheet class
    let a = new Sheet();
    let ws = a.getWs('工作表4');
    let head = ws.getSheetValues(1, 1, 1, ws.getLastColumn())[0];
    // console.log(head);

    let b = new Sheet();
    let b_ws = b.getWs('工作表3');
    let b_head = b_ws.getSheetValues(1, 1, 1, b_ws.getLastColumn())[0];
    console.log(b_head);

  }