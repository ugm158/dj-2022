
/*=====================================
  訂單 管理
=====================================*/
function order(e) {

    // 商品類別 表單
    let content = Sheet.render('order', {global: global});


    // 主樣板
    return Sheet.render('index', {content: content, menu: menu}, global['網站標題']);

  }

  /*=====================================
    寫入訂單
  =====================================*/
  function set_order(e){
    // 開始寫入工作表
    let sheet = '訂單';
    let ws = Sheet.getWs(sheet);
    let rowIndex = ws.getLastRow() + 1;
    Sheet.setCellData(sheet, rowIndex, 1, e.parameter.訂單編號, '文字');

    // 回傳訊息
    // message_show子樣板
    let content = Sheet.render('message_show', {global: global, title: '執行成功', message: '訂單已寫入工作表', bg: 'bg-primary'});

    // 主樣板
    return Sheet.render('index', {content: content, menu: menu}, global['網站標題']);

  }