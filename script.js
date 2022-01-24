'use strict';

const wrap = document.getElementsByClassName("stage1_wrap")[0];
const tempBox = document.getElementsByClassName("temp_info")[0];
const hp1Enemy = document.getElementsByClassName("hp")[0];  // Глобальный код для всего документа (например поиск DOM элементов )
const numDmg = document.getElementsByClassName("number_dmg")[0];
const items = ["url(./images/PotionRed.png)"];
const coordinates = [[610, 500], [593, 520], [580, 540], [924, 555], [940, 525], [931, 505]];  // x , y

function randomUntil(until = 2) {
  return Math.floor(Math.random() * until);
}