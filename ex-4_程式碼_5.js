// https://script.google.com/macros/s/AKfycbyTs4P8OJU3GhDqGWjcrSJcFAQD-rShMOnUW4IDsbwGfklDwTo/exec
/**
 { contentLength: -1,
  parameters: { web: [ 'qaz' ], sn: [ '8' ], op: [ 'prod_kind' ] },
  contextPath: '',
  parameter: { sn: '8', web: 'qaz', op: 'prod_kind' },
  queryString: 'op=prod_kind&sn=8&web=qaz' }

 */
// ?op=prod&sn=3

function doGet(e) {
    let title = e.parameter.title;
    let op = e.parameter.op;
    return render('index', {title: title, url: 'xxxx', button: 'abc', op: op});
  }


  // {title: '123', url: 'xxxx', button: 'abc', op: 'prod_kind'}
  // 渲染網頁
  function render(file, argsObject, title=''){

    let tmp = HtmlService.createTemplateFromFile(file);
    for(let i in argsObject){
      tmp[i] = argsObject[i];
    }

    return tmp.evaluate().setTitle(title).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL).addMetaTag('viewport', 'width=device-width, initial-scale=1');

  }
