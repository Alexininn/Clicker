'use strict';

const enemy1DMG = new Obser();
const enemy1 = new Enemy();
const hero = new Hero();
const takeDmg = enemy1.takeDMG.bind(enemy1);

enemy1DMG.subscribe(takeDmg);

const attackEnemy = (event) => {
  if (event.target.className === "enemy"){
    hero.attack(hero.dmg);
}
}

document.body.addEventListener("click", attackEnemy);