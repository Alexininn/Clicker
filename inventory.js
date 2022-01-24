"use strict"

let inventory = [0,1,0,0];

const bluePotion = document.createElement("div");

function spawnItem(url, top = 0, left = 0) {
  bluePotion.classList.add("item"); 
  bluePotion.style.backgroundImage = items[0];
  bluePotion.style.top = top + "px";
  bluePotion.style.left = left + "px";
  wrap.append(bluePotion);
}

spawnItem(items[0]);