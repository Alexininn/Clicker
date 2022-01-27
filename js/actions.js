'use strict';

// Создания объектов для первого уровня
const enemy1DMG = new Obser();
const heroTakesDMG = new Obser();
const enemy1 = FabricaEnemies("skeleton", 100, 3, 3);
const hero = FabricaPlayer();  // HP , DMG
const enemySkeletontakeDmg = enemy1.takeDMG.bind(enemy1);
const playerTakeDmg = hero.takeDMG.bind(hero);

enemy1DMG.subscribe(enemySkeletontakeDmg);
heroTakesDMG.subscribe(playerTakeDmg);

const showDmg = () => {
  const newNumDmg = document.createElement("div");
  newNumDmg.classList.add("number_dmg");
  newNumDmg.textContent = hero.dmg;
  newNumDmg.style.animation = `1.5s dmg${randomUntil(2) + 1} cubic-bezier(0.4, 0, 1, 1)`;
  newNumDmg.style.bottom = coordinates[randomUntil(6)][1] + "%";
  newNumDmg.style.left = coordinates[randomUntil(6)][0] + "%";
  tempBox.append(newNumDmg);
  setTimeout(() => {tempBox.firstChild.remove()},1100);  
};

const attackEnemy = (event) => {
  if (event.target.classList.contains("enemy")){
    if (enemy1.isAlive) {
      hero.attack(hero.dmg);
      showDmg();
    }
}
};

document.body.addEventListener("click", attackEnemy);

const redScreen = () => {
  divRedScreen.classList.add("anime");
  setTimeout(() => {divRedScreen.classList.remove("anime")}, 1500);
}

const attackHero = () => {
  enemy1.attack(enemy1.dmg);
  redScreen();
};

let attackEnemy1ToHero = setInterval(attackHero, enemy1.dmgPerSec * 1000); // первый враг атакует героя раз в т n секунд

const findItem = (event) => {
  if (event.target.classList.contains("item")) {
    event.target.style.opacity = 0;
    inventory.indexOf(1);
  }
};

document.body.addEventListener("click", findItem);