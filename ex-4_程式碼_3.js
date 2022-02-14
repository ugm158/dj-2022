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
    render('index1', {title: '123', url: 'xxxx', button: 'abc', op: 'prod_kind'}, '網頁');
  }


  // {title: '123', url: 'xxxx', button: 'abc', op: 'prod_kind'}
  // 渲染網頁
  function render(file, argsObject, title=''){

    // 樣板開始
    let tmp = HtmlService.createTemplateFromFile(file);
    for(let i in argsObject){
      tmp[i] = argsObject[i];
      console.log(i, '' ,argsObject[i]);
    }
    /**
      下午1:25:43	資訊	title  123
      下午1:25:43	資訊	url  xxxx
      下午1:25:43	資訊	button  abc
      下午1:25:43	資訊	op  prod_kind
     */

    //<?= title ?>
    // tmp.title = e.parameter.title;
    // tmp.url = 'https://script.google.com/macros/s/AKfycbyjWovJUfZUYgQBc74xElKUTS9VfXdfBJ7y1I7VMLo/dev?title=abc';

    // let url = 'https://script.google.com/macros/s/AKfycbyjWovJUfZUYgQBc74xElKUTS9VfXdfBJ7y1I7VMLo/dev?title=abc';

    // tmp.button = '<a href="' + url +'" class="btn btn-primary">首頁</a>'

    // tmp.prod_kind = e.parameter.prod_kind;

    // let title = '123';

    // return tmp.evaluate().setTitle(title).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL).addMetaTag('viewport', 'width=device-width, initial-scale=1');
    // // 樣板end

  }
