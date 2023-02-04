// ___ CONSTANTS ___

const allVegetables = getAllVegetables();

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// ___ GLOBALS ___

// stats
let money = 50;
let mentalHealth = 100;
let avgHate = 0;

// promises
let promises = [];
let currentPromise = null;

// vegetables
let weekVegetables = [];
let currentVegetable = null;

// round
let nbDays = 0;

// ___ MAIN FUNCTIONS ___

function main() {
  document.addEventListener('DOMContentLoaded', init);
  generateWeekVegetables();
  selectCurrentVegetable();
}

function start() {
  playAudio('music.wav', 0.05);
  displayMainButtons();
  document.getElementById('complete-treadmill').classList.add("treadmill-animation-in");
}

function init() {
  updateHTML('money', money + '$');
  updateDate();
}

function endDay(idAction) {
  document.getElementById('complete-treadmill').classList.remove("treadmill-animation-in");
  document.getElementById('complete-treadmill').offsetWidth
  document.getElementById('complete-treadmill').classList.add("treadmill-animation-in");
  console.log('______________End Day______________')
  weekVegetables[currentVegetable.weekId].isPassed = true;
  checkConditionPromise(idAction);
  checkAllPromises();
  console.log('promises at end:' + JSON.stringify(promises))
  console.log(`MENTAL HEALTH ${mentalHealth} | AVGHATE ${avgHate} | MONEY ${money}`)
  if (mentalHealth <= 0 || avgHate >= 100) {
    gameOver();
  } else {
    nextDay();
  }
}

function nextDay() {
  updateHTML('money', `${money}$ | mentalHealth ${mentalHealth} | avgHate ${avgHate} | hateCurrentVegetable ${allVegetables.find(findVege).hate}`)
  nbDays++;
  updateDate();
  if (nbDays % 7 === 0) {
    generateWeekVegetables();
  }
  selectCurrentVegetable();
}

function checkAllPromises() {
  for (const promise of promises) {
    if (!promise.cond.vegetables.length) {
      setHate(promise.reward * -1)
      promise.isOver = true;
    } else {
      promise.cond.days--;
      if (promise.cond.days <= 0) {
        mentalHealth -= promise.punishment;
        promise.isOver = true;
      }
    }
  }
  promises = promises.filter(_promise => !_promise.isOver);
}

function checkConditionPromise(action) {
  console.log('______________checkConditionPromise______________');
  console.log(JSON.stringify(promises));
  for (const promise of promises) {
    if (promise.cond.action === action && promise.cond.vegetables.includes(currentVegetable.id)) {
      promise.cond.vegetables.splice(promise.cond.vegetables.indexOf(currentVegetable.id), 1);
    }
  }
  console.log(JSON.stringify(promises));
}

function gameOver() {
  console.log('GAME OVER');
}

// ___ GENERATION FUNCTIONS ___

function generateWeekVegetables() {
  console.log('______________Generate week vegetables______________')
  weekVegetables = [];
  for (let i = 0; i < 7; i++) {
    const randomVegetable = allVegetables[getRandomInt(allVegetables.length)];
    weekVegetables.push({
      id: randomVegetable.id,
      weekId: i,
      isPassed: false
    });
  }
  console.log(weekVegetables)
}

function selectCurrentVegetable() {
  const avaibleVegetables = weekVegetables.filter(_vege => _vege.isPassed == false);
  currentVegetable = avaibleVegetables[getRandomInt(avaibleVegetables.length)];
  console.log(`______________ NEW CURRENT VEGE ______________`)
  console.log(currentVegetable)
}

// ___ INTERACTION FUNCTIONS ___

function bribe() {
  setHate(-10);
  setMoney(-10);
  endDay(0)
}

function sell() {
  setHate(20);
  setMoney(10);
  endDay(1);
}

function eat() {
  setHate(20);
  mentalHealth += 10;
  endDay(2);
}

function talk() {
  currentPromise = allVegetables.find(findVege).promises.shift();
  console.log(currentPromise);
  console.log(allVegetables.find(findVege).promises)
  checkConditionPromise(3);
  displayPromiseButtons();
}

function acceptPromise() {
  promises.push(currentPromise);
  displayMainButtons();
  endDay(4);
}

function refusePromise() {
  setHate(-10);
  displayMainButtons();
  endDay(5);
}

// ____ SETTERS ___

function setHate(value) {
  console.log(`_____ SET HATE ____ : ${value}`)
  let newHate = allVegetables.find(findVege).hate;
  newHate += value;
  if (newHate < 0) {
    newHate = 0;
  } else if (newHate > 100) {
    newHate = 100;
  }
  allVegetables.find(findVege).hate = newHate;
  const sum = allVegetables.map(_vege => _vege.hate).reduce((a, b) => a + b, 0);
  avgHate = Math.round(sum / allVegetables.length);
  console.log(`NEW AVG HATE: ${avgHate}`);
}

function setMoney(value) {
  money += value;
  if (money < 0) {
    money = 0;
  }
  updateHTML('money', `${money}$ | mentalHealth ${mentalHealth} | avgHate ${avgHate} | hateCurrentVegetable ${allVegetables.find(findVege).hate}`)
}

// ___ CHANGE UI FUNCTIONS ____

function updateDate() {
  updateHTML(`date`, `Week ${Math.floor(nbDays / 7) + 1}, ${weekdays[nbDays % 7]}`)
}

function displayMainButtons() {
  updateHTML('buttons', `
    <button id="birbe" onclick="bribe()">Soudoyer</button>
    <button id="sell" onclick="sell()">Vendre</button>
    <button id="talk" onclick="talk()">Parler</button>
    <button id="eat" onclick="eat()">Manger</button>
  `);
}

function displayPromiseButtons() {
  updateHTML('buttons', `
    <button id="accept-promise" onclick="acceptPromise()">Yes</button>
    <button id="refuse-promise" onclick="refusePromise()">No</button>
  `);
}

function updateHTML(id, value) {
  document.getElementById(id).innerHTML = value;
}
 
// ___ TOOLS FUNCTION ___

function findVege(_vege) {
  return _vege.id === currentVegetable.id;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function playAudio(name, volume) {
  const audio = new Audio(`./sounds/${name}`);
  audio.volume = volume;
  audio.play();
}

// ___ CALL MAIN ___

main();