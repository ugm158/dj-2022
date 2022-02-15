
/*=====================================
  商品類別
=====================================*/
function prod_kind(e){
    // 取得全域變數
    let global = get_global();

    // menu子樣板
    let menu = Sheet.render('menu', {global: global});

    // message_show子樣板
    let content = Sheet.render('message_show', {global: global, title: '商品類別', message: '商品類別', bg: 'bg-info'});

    // 主樣板
    let title = e.parameter.title;
    let op = e.parameter.op;
    return Sheet.render('index', {content: content, menu: menu}, '育將電腦工作室');

  }