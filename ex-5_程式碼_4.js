// https://script.google.com/macros/s/AKfycby9bS1qyHXpz29v9l5MwCjUmnw3iOD0RCCpSY9v3b0hMB0L3-4/exec

function doGet(e) {
    // menu子樣板
    let web_title = '育將電腦工作室';
    let menu = Sheet.render('menu', {web_title: web_title});


    // 主樣板
    let title = e.parameter.title;
    let op = e.parameter.op;
    return Sheet.render('index', {content: title, menu: menu}, '育將電腦工作室');

  }
