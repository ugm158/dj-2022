/**
 { contentLength: -1,
  parameters: { web: [ 'qaz' ], sn: [ '8' ], op: [ 'prod_kind' ] },
  contextPath: '',
  parameter: { sn: '8', web: 'qaz', op: 'prod_kind' },
  queryString: 'op=prod_kind&sn=8&web=qaz' }

 */
// ?op=prod&sn=3


function doGet(e) {
    let tmp = HtmlService.createTemplateFromFile('index1');
    tmp.title = e.parameter.title;
    tmp.url = 'https://script.google.com/macros/s/AKfycbyjWovJUfZUYgQBc74xElKUTS9VfXdfBJ7y1I7VMLo/dev?title=abc';

    let url = 'https://script.google.com/macros/s/AKfycbyjWovJUfZUYgQBc74xElKUTS9VfXdfBJ7y1I7VMLo/dev?title=abc';

    tmp.button = '<a href="' + url +'" class="btn btn-primary">首頁</a>'

    tmp.prod_kind = e.parameter.prod_kind;

    let title = '123';

    return tmp.evaluate().setTitle(title).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL).addMetaTag('viewport', 'width=device-width, initial-scale=1');

  }
