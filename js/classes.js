'use strict';

class Obser {
  constructor () {
    this.observers = []
  }

  subscribe (fn) {
    this.observers.push(fn)  //  fn(param) {}
  }

  unsubscribe (fn) {
    this.observers = this.observers.filter(subscriber => subscriber !== fn)
  }

  broadcast (data) {
    this.observers.forEach(subscriber => subscriber(data))
  }
}

class Hero {
  constructor (hp = 30, dmg = 5) { 
    this.Curhp = hp;   // current hp (текущее здоровье) 
    this.maxHp = hp;    
    this.dmg = dmg;
    this.hpBar = null;

  }

  attack(dmg){
    enemy1DMG.broadcast(dmg);
  }

  takeDMG(dmg) {
    this.Curhp -= dmg;
    if (this.Curhp <= 0) {
      this.Curhp = 0;
      this.death();
    }
    let hpLeft = this.Curhp * 100 / this.maxHp;
    this.hpBar.style.width = hpLeft + "%";
    this.hpBar.textContent = `${this.Curhp}/${this.maxHp}`;
  }

  death() {
    clearInterval(attackEnemy1ToHero);
  }
};

class Enemy {
  constructor (hp, dmg, dmgPS) { 
    this.Curhp = hp;
    this.maxHp = hp; 
    this.hpBar = null; // В фабрике сюда передаем div class = "hp" который относится к врагу
    this.dmg = dmg;
    this.dmgPerSec = dmgPS;
    this.isAlive = true;
    this.wrap = null;  // В фабрике сюда передаем div class = "enemy"
  }
  
  attack(dmg) { //Метод врага атаки по герою
    heroTakesDMG.broadcast(dmg);
  }

  takeDMG(dmg) {
    this.Curhp -= dmg;
    if (this.Curhp <= 0) {
      
      this.death();
    }
    let hpLeft = this.Curhp * 100 / this.maxHp;
    this.hpBar.style.width = hpLeft + "%";
    this.hpBar.textContent = `${this.Curhp}/${this.maxHp}`;
    }

  death() {
    this.Curhp = 0;
    this.isAlive = false;
    this.wrap.classList.add("anime_death");
    clearInterval(attackEnemy1ToHero);
  }
};

