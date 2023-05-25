var items = [
    "師大第一腿",
    "13 burger",
    "燈籠滷味",
    "小木屋鬆餅",
    "林園粗食",
    "SUBWAY",
    "PAPA RESTAURANT",
    "師大雞肉飯專賣店",
    "薩莉亞",
    "師園鹽酥雞",
    "木町",
    "三商巧福",
    "龍泉深海鮮魚湯",
    "HAWA IN POKE",
    "天曉得",
    "飯館兒",
    "漢堡王",
    "甘泉魚麵",
    "福勝亭",
    "八方雲集",
    "元日本豚骨拉麵",
    "孟紀椒麻雞大王(師大店)",
    "陳敏小吃",
    "牛老大",
    "食粥致神仙"
  ];
  
  function randomSelection() {
    var resultElement = document.getElementById("result");
    var randomIndex = Math.floor(Math.random() * items.length);
    var selectedItem = items[randomIndex];
    resultElement.textContent = "結果：" + selectedItem+" 可上滑查看地圖!";
  }

