'use strict';

// Глобальный код для всего документа
const body = document.querySelector(".body");
const wrap = document.getElementsByClassName("stage_wrap")[0];
const hpHero = document.querySelector(".hero_hp > .hp");   
const hp1Enemy = document.querySelectorAll(".wrap_enemy > .enemy > .hp_bar > .hp")[0];  
const numDmg = document.getElementsByClassName("number_dmg")[0];
const divRedScreen = document.querySelector(" .stage_wrap > .dmg_to_hero"); 
const items = ["url(./images/estus.png)"];
const coordinates = [[0, 10], [10, 30], [20, 50], [40, 70], [60, 90], [80, 55], [90, 45]];  // x , y

function randomUntil(until = 2) {
  return Math.floor(Math.random() * until);
}


let isTrue = true;

function createFinalScreen(name, gif) {
  if (isTrue){
  isTrue = false;
  const blackScreen = document.createElement("div");
  blackScreen.classList.add("hero_dead");
  wrap.append(blackScreen);

  const youDead = document.createElement("i");
  const wrDead = document.createElement("div");
  const sunKnight = document.createElement("div");
  const back = document.createElement("a");
  sunKnight.classList.add("gif");
  sunKnight.classList.add(gif);
  youDead.classList.add("GameName");
  youDead.textContent = name;
  youDead.style.color = "#ff0000bf";
  wrDead.classList.add("name");
  back.setAttribute("href", "./index.html");
  back.classList.add("menuBtn");
  back.classList.add("back");
  back.textContent = "Вернуться в меню";
  blackScreen.append(wrDead);
  wrDead.append(youDead);
  blackScreen.append(back);
  blackScreen.append(sunKnight);
  }
};