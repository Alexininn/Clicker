'use strict';

// Создания объектов для первого уровня

const enemy1DMG = new Obser();
const enemy2DMG = new Obser();
const heroTakesDMG = new Obser();
const stage1Observer = new Obser();

// Создам героя
const hero = FabricaPlayer(30, 9);  // HP , DMG
const playerTakeDmg = hero.takeDMG.bind(hero);


heroTakesDMG.subscribe(playerTakeDmg);


const arrayObservers = [enemy1DMG, enemy2DMG];
const showDmg = (target) => {
  const NumDmg = document.createElement("div");
  NumDmg.classList.add("number_dmg");
  NumDmg.textContent = hero.dmg;
  NumDmg.style.animation = `1.5s dmg${randomUntil(2) + 1} cubic-bezier(0.4, 0, 1, 1)`;
  NumDmg.style.left = coordinates[randomUntil(7)][0] + "%";
  NumDmg.style.bottom = coordinates[randomUntil(7)][1] + "%";
  target.append(NumDmg);
  setTimeout(() => {target.firstChild.remove()},1100);  
};

const attackEnemy = (event) => {
  if (event.target.classList.contains("enemy")){
    const target = event.target;
    if (target.getAttribute("isAlive")) {
      const i = event.target.getAttribute("number_enemy");
      hero.attack(hero.dmg, i);
      showDmg(target);
    } 
  }
};

document.body.addEventListener("click", attackEnemy);

const redScreen = () => {
  divRedScreen.classList.add("anime");
  setTimeout(() => {divRedScreen.classList.remove("anime")}, 1500);
}



