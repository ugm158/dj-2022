
/*=====================================
  取得全域變數
=====================================*/
function get_global() {
    let ws = Sheet.getWs('全域變數');
    let rows = ws.getSheetValues(1,1,ws.getLastRow(), ws.getLastColumn());
    let global = {};
    for(let i in rows){
      global[rows[0][0]] = rows[0][1];
    }
    global['url'] = ScriptApp.getService().getUrl();//取得網頁應用程式網址
    global['isAdmin'] = SCRIPT_PROP.getProperty("adminEmail") == Session.getActiveUser().getEmail() ? true : false;
    // console.log(global);
    return global;
  }


  /*=====================================
    全域變數 表單
  =====================================*/
  function form_global(e){
    // 取得全域變數
    let global = get_global();

    // menu子樣板
    let menu = Sheet.render('menu', {global: global});
    let content = Sheet.render('form_global', {global: global});

    // 主樣板
    return Sheet.render('index', {content: content, menu: menu}, global['網站標題']);

  }

  /*=====================================
    全域變數 寫入
    { parameter: { web_title: '德鍵', op: 'set_global' },
  =====================================*/
  function set_global(e){
    // 取得全域變數
    let global = get_global();

    // menu子樣板
    let menu = Sheet.render('menu', {global: global});

    // 寫試算表
    Sheet.setCellData('全域變數', 1, 2, e.parameter['網站標題']);

    // message_show子樣板
    let content = Sheet.render('message_show', {global: global, title: '執行成功', message: '已寫入工作表', bg: 'bg-primary'});

    // 重新撈資料
    global = get_global();
    menu = Sheet.render('menu', {global: global});


    // 主樣板
    return Sheet.render('index', {content: content, menu: menu}, global['網站標題']);

  }
