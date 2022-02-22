// https://script.google.com/macros/s/AKfycby9bS1qyHXpz29v9l5MwCjUmnw3iOD0RCCpSY9v3b0hMB0L3-4/exec

//------------------------------------- 1. GAS全域變數的方法
var SCRIPT_PROP = PropertiesService.getScriptProperties(); // new property service
//------------------------------------- 2. 路由
var Route = {};
Route.path = function(route, callback){
  Route[route] = callback;
}
var global,menu;

/*=====================================
  Get
=====================================*/
function doGet(e) {
  // 取得全域變數
  global = get_global();
  // menu子樣板
  menu = Sheet.render('menu', {global: global});

  //--------------------------------------------------------管理員路由
  if(global['isAdmin'] === true){
    //路由 商品
    Route.path("prod", prod);//新增 => prod(e);
    //路由 商品類別
    Route.path("prod_kind", prod_kind);//新增 => prod_kind(e);
    //路由 寫入 商品類別
    Route.path("set_prod_kind", set_prod_kind);//新增 => set_prod_kind(e);
    //路由 全域變數管理
    Route.path("form_global", form_global);//新增 => form_global(e);
  }
  //路由 訂單
  Route.path("order", order);//新增 => order(e);

  //--------------------------------------------------------管理員路由 end


  if(Route[e.parameter.op]){
    return Route[e.parameter.op](e);
  } else {
    return index(e);
  }
}

/*=====================================
  Post
=====================================*/
function doPost(e) {
  // 取得全域變數
  global = get_global();
  // menu子樣板
  menu = Sheet.render('menu', {global: global});
  //--------------------------------------------------------管理員路由
  if(global['isAdmin'] === true){
    //路由 全域變數=>寫入資料
    Route.path("set_global", set_global);//新增 => set_global(e);
  }

  //路由 全域變數=>寫入資料
  Route.path("set_order", set_order);//新增 => set_order(e);
  //-----------------------------------------------------管理員路由 end


  if(Route[e.parameter.op]){
    return Route[e.parameter.op](e);
  } else {
    return index(e);
  }
}

function prod(e){

}

/*=====================================
  首頁
=====================================*/
function index(e){

  // message_show子樣板
  let content = Sheet.render('message_show', {global: global, title: '首頁執行成功', message: 'message', bg: 'bg-primary'});

  content += Sheet.render('message_show', {global: global, title: '錯誤訊息', message: '123',bg: 'bg-danger'});

  // 主樣板
  let title = e.parameter.title;
  let op = e.parameter.op;
  return Sheet.render('index', {content: content, menu: menu}, '育將電腦工作室');

}

/*=====================================
 安裝程式
=====================================*/
function setup(){
  //-------------------------------------------- 把變數存入指令碼屬性
  SCRIPT_PROP.setProperty("ssId", Sheet.getSs().getId());
  SCRIPT_PROP.setProperty("adminEmail", Session.getActiveUser().getEmail());//管理員email
  //建立 商品類別 工作表
  Sheet.createSheet('商品類別');
  //建立 商品類別 標題
  Sheet.setCellData('商品類別', 1, 1, '商品類別');

  //建立 商品 工作表
  Sheet.createSheet('商品');
  //建立 商品 標題
  Sheet.setCellData('商品', 1, 1, '商品名稱');

  //建立 訂單 工作表
  Sheet.createSheet('訂單');
  //建立 訂單 標題
  Sheet.setCellData('訂單', 1, 1, '訂單編號');

}
