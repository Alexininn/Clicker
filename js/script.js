'use strict';

const wrap = document.getElementsByClassName("stage1_wrap")[0];
const tempBox = document.getElementsByClassName("temp_info")[0];
const hp1Enemy = document.getElementsByClassName("hp")[0];  // Глобальный код для всего документа (например поиск DOM элементов )
const numDmg = document.getElementsByClassName("number_dmg")[0];
const items = ["url(./images/estus.png)"];
const coordinates = [[41.5, 20], [45.1, 25], [50.2, 7], [55.2, 15], [52.6, 5], [58.6, 30]];  // x , y

function randomUntil(until = 2) {
  return Math.floor(Math.random() * until);
}