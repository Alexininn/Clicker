'use strict';

const enemy1DMG = new Obser();
const enemy1 = new Enemy();
const hero = new Hero();
const takeDmg = enemy1.takeDMG.bind(enemy1);

enemy1DMG.subscribe(takeDmg);


const attackEnemy = (event) => {
  if (event.target.className === "enemy"){
    hero.attack(hero.dmg);
    showDmg(event);
}
}

const showDmg = (event) => {
  const newNumDmg = document.createElement("div");
  newNumDmg.classList.add("number_dmg");
  newNumDmg.textContent = hero.dmg;
  newNumDmg.style.top = coordinates[randomUntil(6)][1] + "px";
  newNumDmg.style.left = coordinates[randomUntil(6)][0] + "px";
  tempBox.append(newNumDmg);
  setTimeout(() => {tempBox.firstChild.remove()},1100);  
}

document.body.addEventListener("click", attackEnemy);

const findItem = (event) => {
  if (event.target.className === "item") {
    event.target.style.opacity = 0;
    inventory.indexOf(1);
  }
} 

document.body.addEventListener("click", findItem);