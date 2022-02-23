/*============================================
  得到 表單 結構
============================================*/
function get_stru_form(){
  let stru = [
    {"title":"簡答",
    "name":"col_1",
    "sort":1,
    "kind":"簡答",
    "type":"文字",
    "option":"",
    "validate":"必填",
    "form_width":3,
    "default":"",
    "readme":"",
    "fun":"",
    "list_show":"true",
    "list_sort":"true",
    "list_align":"left",
    "list_width":""},
    {"title":"段落",
    "name":"col_2",
    "sort":2,
    "kind":"段落",
    "type":"文字",
    "option":"",
    "validate":"",
    "form_width":3,
    "default":"",
    "readme":"",
    "fun":"",
    "list_show":"true",
    "list_sort":"true",
    "list_align":"left",
    "list_width":""},
    {"title":"下拉選單",
    "name":"col_3",
    "sort":3,
    "kind":"下拉選單",
    "type":"文字",
    "option":"選項1,選項2,選項3",
    "validate":"",
    "form_width":3,
    "default":"選項2",
    "readme":"",
    "fun":"",
    "list_show":"true",
    "list_sort":"true",
    "list_align":"left",
    "list_width":""},
    {"title":"日期時間",
    "name":"col_4",
    "sort":4,
    "kind":"日期時間",
    "type":"文字",
    "option":"",
    "validate":"",
    "form_width":3,
    "default":"",
    "readme":"",
    "fun":"時間戳記",
    "list_show":"true",
    "list_sort":"true",
    "list_align":"left",
    "list_width":""},
    {"title":"日期",
    "name":"col_5",
    "sort":5,
    "kind":"日期",
    "type":"文字",
    "option":"",
    "validate":"",
    "form_width":3,
    "default":"",
    "readme":"",
    "fun":"",
    "list_show":"true",
    "list_sort":"true",
    "list_align":"left",
    "list_width":""},
    {"title":"時間",
    "name":"col_6",
    "sort":6,
    "kind":"時間",
    "type":"文字",
    "option":"",
    "validate":"",
    "form_width":3,
    "default":"",
    "readme":"",
    "fun":"",
    "list_show":"true",
    "list_sort":"true",
    "list_align":"left",
    "list_width":""},
    {"title":"複選",
    "name":"col_7",
    "sort":7,
    "kind":"複選",
    "type":"文字",
    "option":"選項1,選項2,選項3",
    "validate":"",
    "form_width":3,
    "default":"",
    "readme":"",
    "fun":"",
    "list_show":"true",
    "list_sort":"true",
    "list_align":"left",
    "list_width":""},
    {"title":"網頁編輯器",
    "name":"col_8",
    "sort":8,
    "kind":"網頁編輯器",
    "type":"文字",
    "option":"",
    "validate":"",
    "form_width":3,
    "default":"",
    "readme":"",
    "fun":"",
    "list_show":"true",
    "list_sort":"true",
    "list_align":"left",
    "list_width":""},
    {"title":"隱藏",
    "name":"col_9",
    "sort":9,
    "kind":"隱藏",
    "type":"文字",
    "option":"",
    "validate":"",
    "form_width":3,
    "default":"",
    "readme":"",
    "fun":"",
    "list_show":"true",
    "list_sort":"true",
    "list_align":"left",
    "list_width":""}
  ];
  //console.log(stru);
  return stru;
}

/*=====================================
  表單
=====================================*/
function form(e){

  //
  let content = Sheet.render('form', {global: global});//

  // 主樣板
  return Sheet.render('index', {content: content, menu: menu}, global['網站標題']);//bootstrap_table
}

/*=====================================
  表單
  { contextPath: '',
  parameters:
   { col_6: [ '16:52:30' ],
     op: [ 'set_form' ],
     col_8: [ '<p>wwwwww</p>\r\n' ],
     'col_7[]': [ 'option2', 'option3' ],
     col_11: [ '2022-02-22' ],
     col_4: [ '2022/02/22 16:53:01' ],
     col_22: [ '<p>wwww</p>\r\n' ],
     col_2: [ '2' ],
     col_1: [ '1' ],
     col_3: [ '選項3' ],
     col_5: [ '2022/02/22' ] },
  contentLength: 256,
  queryString: '',
  parameter:
   { col_6: '16:52:30',
     'col_7[]': 'option2',
     col_8: '<p>wwwwww</p>\r\n',
     col_2: '2',
     col_22: '<p>wwww</p>\r\n',
     col_11: '2022-02-22',
     op: 'set_form',
     col_1: '1',
     col_3: '選項3',
     col_5: '2022/02/22',
     col_4: '2022/02/22 16:53:01' },
  postData:
   { toString: [Function],
     getName: [Function],
     getBytes: [Function],
     setName: [Function],
     getContentType: [Function],
     setContentType: [Function],
     copyBlob: [Function],
     getDataAsString: [Function],
     setDataFromString: [Function],
     isGoogleType: [Function],
     getAllBlobs: [Function],
     setContentTypeFromExtension: [Function],
     setBytes: [Function],
     getAs: [Function],
     contents: 'col_1=1&col_11=2022-02-22&col_2=2&col_3=%E9%81%B8%E9%A0%853&col_4=2022%2F02%2F22+16%3A53%3A01&col_5=2022%2F02%2F22&col_6=16%3A52%3A30&col_7%5B%5D=option2&col_7%5B%5D=option3&col_8=%3Cp%3Ewwwwww%3C%2Fp%3E%0D%0A&col_22=%3Cp%3Ewwww%3C%2Fp%3E%0D%0A&op=set_form',
     length: 256,
     name: 'postData',
     type: 'application/x-www-form-urlencoded' } }
=====================================*/
function set_form(e){
  console.log(e);

  //
  let content = "";//

  // 主樣板
  return Sheet.render('index', {content: content, menu: menu}, global['網站標題']);//bootstrap_table
}

/*=====================================
  建立 表單
=====================================*/
function create_form(sheet='表單'){
  let ss,colIndex;
  // 判斷「表單」是否存在
  let ws = Sheet.getWs(sheet);
  if(ws === null){
    // 取得試算表
    ss = Sheet.getSs();
    // 建立新的工作表
    ws = ss.insertSheet();
    ws.setName(sheet);
  }
  let stru = get_stru_form();
  let title = stru.map(function(r){
    return r.title;
  });

  // 寫入標題
  for(let i in title){
    colIndex = parseInt(i) + 1;
    Sheet.setCellData(sheet, 1, colIndex, title[i], '文字');
  }
}