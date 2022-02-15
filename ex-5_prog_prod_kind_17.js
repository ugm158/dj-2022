function create_pord_kind(sheet='商品類別') {
    // 建立工作表
    Sheet.createSheet(sheet);
    // 設定標題
    Sheet.setCellData(sheet, 1, 1, '商品類別');
  }
