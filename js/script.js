'use strict';

// Глобальный код для всего документа
const wrap = document.getElementsByClassName("stage1_wrap")[0];
const tempBox = document.getElementsByClassName("temp_info")[0];
const hpHero = document.querySelector(".hero_hp > .hp");   
const hp1Enemy = document.querySelectorAll(".wrap_enemy > .enemy > .hp_bar > .hp")[0];  
const numDmg = document.getElementsByClassName("number_dmg")[0];
const divRedScreen = document.querySelector(" .stage1_wrap > .dmg_to_hero"); 
const items = ["url(./images/estus.png)"];
const coordinates = [[41.5, 20], [45.1, 25], [50.2, 7], [55.2, 15], [52.6, 5], [58.6, 30]];  // x , y

function randomUntil(until = 2) {
  return Math.floor(Math.random() * until);
}