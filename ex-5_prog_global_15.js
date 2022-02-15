
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
    postData:
     { toString: [Function],
       getName: [Function],
       getBytes: [Function],
       setName: [Function],
       getContentType: [Function],
       setContentType: [Function],
       setBytes: [Function],
       getDataAsString: [Function],
       setDataFromString: [Function],
       isGoogleType: [Function],
       getAllBlobs: [Function],
       setContentTypeFromExtension: [Function],
       copyBlob: [Function],
       getAs: [Function],
       contents: 'web_title=%E5%BE%B7%E9%8D%B5',
       length: 28,
       name: 'postData',
       type: 'application/x-www-form-urlencoded' },
    queryString: 'op=set_global',
    contextPath: '',
    parameters: { web_title: [ '德鍵' ], op: [ 'set_global' ] },
    contentLength: 28 }
  =====================================*/
  function set_global(e){
    // 取得全域變數
    let global = get_global();

    // menu子樣板
    let menu = Sheet.render('menu', {global: global});




    let content = e.parameter['網站標題'];

    // 主樣板
    return Sheet.render('index', {content: content, menu: menu}, global['網站標題']);

  }
