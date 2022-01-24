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
  }

  attack(dmg){
   enemy1DMG.broadcast(dmg);
  }
}

class Enemy {
  constructor (hp, dmg) { 
    this.Curhp = hp;
    this.maxHp = hp; 
    this.hpBar = null;
    this.dmg = dmg;
    
  }
  
  takeDMG(dmg) {
    this.Curhp -= dmg;
    if (this.Curhp <= 0) {
      this.Curhp = 0;
    }
    let hpLeft = this.Curhp * 100 / this.maxHp;
    this.hpBar.style.width = hpLeft + "%";
    this.hpBar.textContent = `${this.Curhp}/${this.maxHp}`;
    }

  death(isdead) {
    
  }
}

