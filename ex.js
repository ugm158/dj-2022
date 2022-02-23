function ex(e) {
    let a = [
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

    let b = a.map(function(r){
      return r.title;
    });
    // console.log(b);
    /**
     [ '簡答', '段落', '下拉選單', '日期時間', '日期', '時間', '複選', '網頁編輯器', '隱藏' ]
     */
    let ss,colIndex;
    let sheet = '表單';
    // 判斷「表單」是否存在
    let ws = Sheet.getWs(sheet);
    if(ws === null){
      // 取得試算表
      ss = Sheet.getSs();
      // 建立新的工作表
      ws = ss.insertSheet();
      ws.setName(sheet);
    }
    // 寫入標題
    for(let i in b){
      colIndex = parseInt(i) + 1;
      Sheet.setCellData(sheet, 1, colIndex, b[i], '文字');
    }



  }
