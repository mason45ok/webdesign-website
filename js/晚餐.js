var items = [
    "大台北早餐",
    "師大美而美",
    "劉媽媽飯糰",
    "福來早餐古亭店",
    "龍泉深海鮮魚湯",
    "貳樓餐廳師大店",
    "温州街蘿蔔絲餅達人",
    "貓圖咖啡CAT",
    "亞米廚房",
    "阿婆早餐",
    "桔梗三明治",
    "新鮮豆漿",
    "活力飯糰",
    "男子漢早餐店"
  ];
  
  function randomSelection() {
    var resultElement = document.getElementById("result");
    var randomIndex = Math.floor(Math.random() * items.length);
    var selectedItem = items[randomIndex];
    resultElement.textContent = "結果：" + selectedItem;
  }

