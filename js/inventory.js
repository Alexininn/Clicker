"use strict"

let inventory = [0,0,0,0];


function spawnItem(url, top = 0, left = 0) {
const estus = document.createElement("div");

  estus.classList.add("item"); 
  estus.style.backgroundImage = url;
  estus.style.top = top + "px";
  estus.style.left = left + "px";
  wrap.append(estus);
  return estus;
}
let isIt = true;
const estus = spawnItem(items[0]);

const findItem = (event) => {
  if (isIt) {
    isIt = false;
    if (event.code === "KeyH") {
      const soundHeal = new Audio(ArrMusic[2])
      soundHeal.volume = 1;
      soundHeal.play();
      estus.style.opacity = 0;
      hero.Curhp = hero.maxHp;
      let hpLeft = hero.Curhp * 100 / hero.maxHp;
      hero.hpBar.style.width = hpLeft + "%";
      hero.hpBar.textContent = `${hero.Curhp}/${hero.maxHp}`;
    }
  }
};

document.body.addEventListener("keydown", findItem);