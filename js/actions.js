'use strict';

// Функция создания Элементов врага
const createEnemyElements = (type) => {
  const divWrapEnemy = document.createElement("div");
  const divHpBar = document.createElement("div");
  const divHp = document.createElement("div");
  const divEnemy = document.createElement("div");


  divWrapEnemy.classList.add("wrap_enemy");
  divHpBar.classList.add("hp_bar");
  divHp.classList.add("hp");
  divEnemy.classList.add("enemy");

  switch (type) {
    case "skeleton" : {
      divEnemy.classList.add("skeleton");
      break;
    }
  }
  divWrapEnemy.append(divHpBar);
  divHpBar.append(divHp);
  divWrapEnemy.append(divEnemy);
  wrap.append(divWrapEnemy);
  return divHp
};

function FabricaEnemies(type = "skeleton", hp = 50, dmg = 3) {
  const newEnemy = new Enemy(hp, dmg);
  let hpEnemy = createEnemyElements(type);
  newEnemy.hpBar = hpEnemy;
  hpEnemy.textContent = `${newEnemy.Curhp}/${newEnemy.maxHp}`;
  return newEnemy;
};

const enemy1DMG = new Obser();
const enemy1 = FabricaEnemies("skeleton", 200);
const hero = new Hero();
const takeDmg = enemy1.takeDMG.bind(enemy1);
enemy1DMG.subscribe(takeDmg);


const attackEnemy = (event) => {
  if (event.target.className === "enemy skeleton"){
    hero.attack(hero.dmg);
    showDmg();
}
};

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

document.body.addEventListener("click", attackEnemy);

const findItem = (event) => {
  if (event.target.className === "item") {
    event.target.style.opacity = 0;
    inventory.indexOf(1);
  }
};

document.body.addEventListener("click", findItem);