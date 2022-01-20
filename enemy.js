'use strict';

class ObserDMG {
  constructor () {
    this.observers = []
  }

  subscribe (fn) {
    this.observers.push(fn)
  }

  unsubscribe (fn) {
    this.observers = this.observers.filter(subscriber => subscriber !== fn)
  }

  broadcast (data) {
    this.observers.forEach(subscriber => subscriber(data))
  }
}

class Enemy {
  constructor () { 
    this.hp = 5;
  }
  
  takeDMG(dmg) {
    this.hp -= dmg;
  }
  dealDMG(dmg){
    setInterval(enemysDMG.broadcast(dmg), 1000);
  }

  death(isdead) {
    if (isdead) {
      this.dealDMG()
    }
  }
}

class Hero {
  constructor () { 
    this.hp = 20;
    this.dmg = 3;
  }
  
  takeDMG(dmg) {
    this.hp -= dmg;
  }
  dealDMG(dmg){
   enemysDMG.broadcast(dmg);
  }

  death(isdead) {
    if (isdead) {
      this.dealDMG()
    }
  }
}

const enemysDMG = new ObserDMG();
const enemy1 = new Enemy();
const hero = new Hero();
const takeDmg = enemy1.takeDMG.bind(enemy1);

enemysDMG.subscribe(takeDmg);

const dealDmgToEnemy = (event) => {
  if (event.target.className === "enemy1"){
  console.log("Я нанес enemy " + hero.dmg + " Урона");
  enemysDMG.broadcast(hero.dmg);
}
}

document.body.addEventListener("click", dealDmgToEnemy);