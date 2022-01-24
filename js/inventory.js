"use strict"

let inventory = [0,1,0,0];

const estus = document.createElement("div");

function spawnItem(url, top = 0, left = 0) {
  estus.classList.add("item"); 
  estus.style.backgroundImage = items[0];
  estus.style.top = top + "px";
  estus.style.left = left + "px";
  wrap.append(estus);
}

spawnItem(items[0]);