"use strict"

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
  return {hp:divHp, div:divWrapEnemy,};
};

// Фабрика врагов первый параметр - тип врага, который совпадает с классом его Bg_image
function FabricaEnemies(type = "skeleton", hp = 50, dmg = 3, dmgPS = 3) {
  const newEnemy = new Enemy(hp, dmg, dmgPS);
  let enemyTags = createEnemyElements(type);
  newEnemy.hpBar = enemyTags.hp;
  newEnemy.wrap = enemyTags.div;
  enemyTags.hp.textContent = `${newEnemy.Curhp}/${newEnemy.maxHp}`;
  return newEnemy;
};

function FabricaPlayer(hp = 50, dmg = 4) {
  const player = new Hero(hp, dmg);
  player.hpBar = hpHero
  player.hpBar.textContent = `${player.Curhp}/${player.maxHp}`;
  return player;
}