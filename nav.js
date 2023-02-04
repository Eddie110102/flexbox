const url = [
  "03_flexbox-display.html",
  "04_flexbox-flex-direction.html",
  "05_flexbox-justify-content.html",
  "06_flexbox-flex-wrap.html",
  "07_flexbox-align-items.html",
  "08_flexbox-align-content.html",
  "09_flexbox-flex-items.html",
];

const title = [
    "display屬性<br>彈性盒子及尺寸",
    "flex-direction屬性<br>盒子內容的出發方向",
    "justify-content屬性<br>盒子內容的對齊方式(主軸)",
    "flex-wrap屬性<br>盒子內容的換行方式",
    "align-items屬性<br>盒子內容的對齊方式(切軸)",
    "align-content屬性<br>盒子內容的對齊方式(切軸)",
    "flex-items屬性<br>盒子內容的對齊方式(切軸)",
  ];

const nav = document.getElementById('nav')
for(let i=0; i<url.length; i++){
    nav.innerHTML += `<li><a href="${url[i]}">${title[i]}</a></li>`
}