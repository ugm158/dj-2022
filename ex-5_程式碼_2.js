// https://script.google.com/macros/s/AKfycby9bS1qyHXpz29v9l5MwCjUmnw3iOD0RCCpSY9v3b0hMB0L3-4/exec


function doGet(e) {
    // menu子樣板
    let web_title = '育將電腦工作室';
    let menu = render('menu', {web_title: web_title});

    // 主樣板
    let title = e.parameter.title;
    let op = e.parameter.op;
    return render('index', {title: title, menu: menu}, '育將電腦工作室');

  }


  // {title: '123', url: 'xxxx', button: 'abc', op: 'prod_kind'}
  // 渲染網頁
  function render(file, argsObject, title=''){

    let tmp = HtmlService.createTemplateFromFile(file);
    for(let i in argsObject){
      tmp[i] = argsObject[i];
    }
    if(title){//主樣板
      return tmp.evaluate().setTitle(title).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL).addMetaTag('viewport', 'width=device-width, initial-scale=1');
    }else{//子樣板
      return tmp.evaluate().getContent();
    }


  }
