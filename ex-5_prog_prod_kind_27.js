
/*=====================================
  商品類別 管理
=====================================*/
function prod_kind(e){

    // 商品類別 表單
    let content = Sheet.render('prod_kind', {global: global});


    // 主樣板
    return Sheet.render('index', {content: content, menu: menu}, global['網站標題']);
  }

  /*=====================================
    寫入商品類別
    { '商品類別': '招牌', op: 'set_prod_kind' }
  =====================================*/
  function set_prod_kind(e){
    // 開始寫入工作表
    let sheet = '商品類別';
    let ws = Sheet.getWs(sheet);
    let rowIndex = ws.getLastRow() + 1;
    Sheet.setCellData(sheet, rowIndex, 1, e.parameter.商品類別, '文字');

    // 回傳訊息
    // message_show子樣板
    let content = Sheet.render('message_show', {global: global, title: '執行成功', message: '商品類別已寫入工作表', bg: 'bg-primary'});

    // 主樣板
    return Sheet.render('index', {content: content, menu: menu}, global['網站標題']);

  }