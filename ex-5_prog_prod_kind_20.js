
/*=====================================
  商品類別
=====================================*/
function prod_kind(e){
    // 取得全域變數
    let global = get_global();

    // menu子樣板
    let menu = Sheet.render('menu', {global: global});

    let content = Sheet.render('prod_kind', {global: global});


    // 主樣板
    return Sheet.render('index', {content: content, menu: menu}, global['網站標題']);

  }

  /*=====================================
    寫入商品類別
  =====================================*/
  function set_prod_kind(e){
    // 取得全域變數
    let global = get_global();

    // menu子樣板
    let menu = Sheet.render('menu', {global: global});

    console.log(e.parameter);

    let content = '';

    // 主樣板
    return Sheet.render('index', {content: content, menu: menu}, global['網站標題']);

  }