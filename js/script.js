'use strict';

// Глобальный код для всего документа
const body = document.querySelector(".body");
const wrap = document.getElementsByClassName("stage1_wrap")[0];
const hpHero = document.querySelector(".hero_hp > .hp");   
const hp1Enemy = document.querySelectorAll(".wrap_enemy > .enemy > .hp_bar > .hp")[0];  
const numDmg = document.getElementsByClassName("number_dmg")[0];
const divRedScreen = document.querySelector(" .stage1_wrap > .dmg_to_hero"); 
const items = ["url(./images/estus.png)"];
const coordinates = [[0, 10], [10, 30], [20, 50], [40, 70], [60, 90], [80, 55], [90, 45]];  // x , y

function randomUntil(until = 2) {
  return Math.floor(Math.random() * until);
}

let isStageEnd = 0;
