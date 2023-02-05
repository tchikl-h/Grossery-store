// ___ CONSTANTS ___

const allVegetables = getAllVegetables();

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// ___ GLOBALS ___

// stats
let money = 50;
let mentalHealth = 0;
let avgHate = 0;

// promises
let promises = [];
let currentPromise = null;

// vegetables
let weekVegetables = [];
let currentVegetable = null;
let currentStatAnim = 1;
let isTalking = false;
let pomeloActivated = false;

// round
let nbDays = 0;

// audio
let currentTalk = null;
let currentInterval = null;

// dialog
let idxDialog = 0;

// ___ MAIN FUNCTIONS ___

function main() {
  document.addEventListener('DOMContentLoaded', init);
}

async function start() {
  playAudio('music.wav', 0.05);
  displayMainButtons(true);
  document.getElementById('complete-treadmill').classList.add("treadmill-animation-in");
  hiddenBackgroundVegetable('left');
  await sleep(5000);
  playVoice();
  displayMainButtons(false);
}

function playVoice() {
  const _vege = allVegetables.find(findVege);
  if (_vege.firstAppear) {
    playAudio(`${_vege.name}-intro.mp3`, 1);
    displayDialog(_vege.intros[0]);
    _vege.firstAppear = false;
  } else {
    if (_vege.hate < 33) {
      playAudio(`${_vege.name}-nice.mp3`, 1);
      displayDialog(_vege.intros[1]);
    } else if (_vege.hate < 66) {
      playAudio(`${_vege.name}-neutral.mp3`, 1);
      displayDialog(_vege.intros[2]);
    } else {
      playAudio(`${_vege.name}-bad.mp3`, 1)
      displayDialog(_vege.intros[3]);
    }
  }
}

function init() {
  updateDate();
  generateWeekVegetables();
  selectCurrentVegetable();
  setMoney(money, true);
  setMentalHealth(50, true);
  setHate(avgHate, true);
}

async function endDay(idAction) {
  displayMainButtons(true);
  if (idAction === 1 || idAction === 2) {
    playAudio(`${allVegetables.find(findVege).name}-dead.mp3`, 1);
  } else if (idAction === 0) {
    playAudio(`${allVegetables.find(findVege).name}-money.mp3`, 1);
  }
  document.getElementById('complete-treadmill').classList.remove("treadmill-animation-in");
  document.getElementById('complete-treadmill').offsetWidth;
  document.getElementById('complete-treadmill').classList.add("treadmill-animation-out");
  checkConditionPromise(idAction);
  checkAllPromises();
  await sleep(3000);
  displayBackgroundVegetable('right')
  weekVegetables[currentVegetable.weekId].isPassed = true;
  if (mentalHealth <= 0) {
    document.getElementById('game-over-sante-mentale').style.display = 'block';
    gameOver();
  } else if (avgHate >= 80) {
    document.getElementById('game-over-rebellion').style.display = 'block';
    gameOver();
  } else {
    nextDay();
  }
}

async function nextDay() {
  updateHTML("money", `${money}$`);
  nbDays++;
  updateDate();
  if (nbDays % 7 === 0) {
    generateWeekVegetables();
  }
  selectCurrentVegetable();
  document.getElementById('between-days').style.display = 'block';
  document.getElementById('week-nb').innerHTML= `Week ${Math.floor(nbDays / 7) + 1}`;
  document.getElementById('weekday').innerHTML= weekdays[nbDays % 7];
  document.getElementById('complete-treadmill').style.left = '-150%';
  document.getElementById('complete-treadmill').classList.remove("treadmill-animation-out");
  await sleep(1500);
  while (isTalking) {
    await sleep(100);
  }
  document.getElementById('between-days').style.display = 'none';
  document.getElementById('complete-treadmill').classList.add("treadmill-animation-in");
  await sleep(4000);
  playVoice();
  displayMainButtons(false);
}

function checkAllPromises() {
  for (const promise of promises) {
    if (promise.cond.steps === 0) {
      setHate(promise.reward * -1, false, promise.id_vege);
      promise.isOver = true;
      document.getElementById('promise-success').style.visibility = 'visible';
      setTimeout(() => {
        document.getElementById('promise-success').style.visibility = 'hidden';
      }, 2000);
    } else {
      promise.cond.days--;
      if (promise.cond.days <= 0) {
        setMentalHealth(promise.punishment);
        promise.isOver = true;
        document.getElementById('promise-fail').style.visibility = 'visible';
        setTimeout(() => {
          document.getElementById('promise-fail').style.visibility = 'hidden';
        }, 2000);
      }
    }
  }
  promises = promises.filter(_promise => !_promise.isOver);
}

function checkConditionPromise(action) {
  for (const promise of promises) {
    if (promise.cond.action.includes(action) && promise.cond.vegetables.includes(currentVegetable.id) && promise.cond.steps > 0) {
      promise.cond.vegetables.splice(promise.cond.vegetables.indexOf(currentVegetable.id), 1);
      promise.cond.steps -= 1;
    }
  }
}

function gameOver() {
  console.log('GAME OVER');
}

// ___ GENERATION FUNCTIONS ___

function generateWeekVegetables() {
  hiddenAllBackgroundLeft();
  weekVegetables = [];
  const vegetablesClassic = allVegetables.filter(_vege=>_vege.maxAppears>1)
  let randUniques = [getRandomInt(7), getRandomInt(7)];
  for (let i = 0; i < 7; i++) {
    const vegetableUnique = allVegetables.filter(_vege=>_vege.maxAppears===1);
    const randomVegetable = (randUniques.includes(i)) ? vegetableUnique[getRandomInt(vegetableUnique.length)] : vegetablesClassic[getRandomInt(vegetablesClassic.length)];
    if (randUniques.includes(i)) {
      allVegetables.find(_vege => _vege.id === randomVegetable.id).maxAppears = 0;
    }
    weekVegetables.push({
      id: randomVegetable.id,
      srcImg: randomVegetable.name,
      nameFR: randomVegetable.nameFR,
      weekId: i,
      isPassed: false
    });
    document.getElementById(`vegetable-background-left${i+1}`).style.visibility = 'visible';
    document.getElementById(`vegetable-background-left${i+1}`).src = `./assets/images/vegetables/${randomVegetable.name}1.png`;
  }
}

function selectCurrentVegetable() {
  const avaibleVegetables = weekVegetables.filter(_vege => _vege.isPassed == false);
  currentVegetable = avaibleVegetables[getRandomInt(avaibleVegetables.length)];
  document.getElementById('current-vegetable').src = `./assets/images/vegetables/${currentVegetable.srcImg}1.png`;
  hiddenBackgroundVegetable('left');
}

// ___ INTERACTION FUNCTIONS ___

async function bribe() {
  if (money < 20) {
    return;
  }
  displayMainButtons(true);
  document.getElementById('dialog').style.visibility = 'hidden';
  // await Promise.all([setHate(-20), setMoney(!pomeloActivated || currentVegetable.id !== 3 ? -20 : -5)]);
  if (currentVegetable.id <= 4) {
    setHate(-20);
  }
  setMoney(!pomeloActivated || currentVegetable.id !== 3 ? -20 : -5);
  endDay(0)
}

async function sell() {
  displayMainButtons(true);
  document.getElementById('dialog').style.visibility = 'hidden';
  // await Promise.all([setHate(40), setMoney(15)]);
  if (currentVegetable.id <= 4) {
    setHate(40);
    setMoney(15);
  } else {
    setMoney(30);
  }
  endDay(1);
}

async function eat() {
  displayMainButtons(true);
  document.getElementById('dialog').style.visibility = 'hidden';
  // await Promise.all([setHate(40),   setMentalHealth(15)]);
  if (currentVegetable.id <= 4) {
    setHate(40);
    setMentalHealth(15);
  } else {
    setMentalHealth(20);
  }
  endDay(2);
}

function talk() {
  console.log(JSON.stringify(allVegetables.find(findVege)))
  currentPromise = allVegetables.find(findVege).promises.shift();
  currentPromise['id_vege'] = currentVegetable.id;
  currentPromise.cond.days++;
  playAudio(currentPromise.sound, 1)
  displayDialog(currentPromise.text);
  checkConditionPromise(3);
  displayPromiseButtons();
}

async function displayDialog(message) {
  idxDialog++;
  const id = idxDialog;
  document.getElementById('dialog').style.visibility = 'visible';
  document.getElementById('dialog').innerHTML = `<b>${currentVegetable.nameFR}</b>: `;
  for (let i = 0; i < message.length && idxDialog === id; i++) {
    document.getElementById('dialog').innerHTML += message.charAt(i);
    await sleep(30);
  }
}

function acceptPromise() {
  displayMainButtons(true);
  document.getElementById('dialog').style.visibility = 'hidden';
  if (currentVegetable.id <= 4) {
    promises.push(currentPromise);
  } else {
    ptrUniqueFunctions[currentVegetable.srcImg]();
  }
  endDay(4);
}

async function refusePromise() {
  displayMainButtons(true);
  document.getElementById('dialog').style.visibility = 'hidden';
  if (currentVegetable.id <= 4) {
    setHate(-20);
  }
  endDay(5);
}

// ____ PROMISE UNIQUE ___

const ptrUniqueFunctions = {
  pomelo, orange, hollande, salad, chou, panet, melon, kiwi
};

function pomelo() {
  document.getElementById('dialog').style.visibility = 'hidden';
  pomeloActivated = true;
  endDay(3);
}

async function orange() {
  document.getElementById('dialog').style.visibility = 'hidden';
  await setHate(-20, false, 2);
  await setHate(-20, false, 3);
  await setHate(-20, false, 4);
  await setHate(60, false, 1);
  endDay(3);
}

function hollande() {
  document.getElementById('dialog').style.visibility = 'hidden';
  setMoney(Math.round(money / 2 + 0.5) * -1);
  setHate(-100, false, 4);
  endDay(3);
}

function chou() {
  document.getElementById('dialog').style.visibility = 'hidden';
  setMoney(60);
  setMentalHealth(Math.round(mentalHealth / 4 + 0.5) * -1)
  endDay(3);
}

function salad() {
  document.getElementById('dialog').style.visibility = 'hidden';
  setMoney(60);
  setMentalHealth(Math.round(mentalHealth / 4 + 0.5) * -1)
  endDay(3);
}

async function panet() {
  document.getElementById('dialog').style.visibility = 'hidden';
  await setHate(30, false, 1);
  await setHate(30, false, 2);
  await setHate(30, false, 3);
  await setHate(30, false, 4);
  setMoney(180);
  endDay(3);
}

async function melon() {
  document.getElementById('dialog').style.visibility = 'hidden';
  await setHate(-20, false, 1);
  await setHate(-20, false, 2);
  await setHate(-20, false, 3);
  await setHate(-20, false, 4);
  setMoney(-100);
  endDay(3);
}

async function kiwi() {
  document.getElementById('dialog').style.visibility = 'hidden';
  setMentalHealth(100);
  setMoney(-1000);
  endDay(3);
}

// ____ SETTERS ___

async function setHate(value, skip = false, idVegetablesTarget = null) {
  let newHate = allVegetables.find(idVegetablesTarget !== null ? _vege=>_vege.id===idVegetablesTarget : findVege).hate;
  console.log(`CURRENT HATE: ${newHate}`)
  newHate += value;
  if (newHate < 0) {
    newHate = 0;
  } else if (newHate > 100) {
    newHate = 100;
  }
  console.log(`NEW HATE ${newHate}`);
  allVegetables.find(idVegetablesTarget !== null ? _vege=>_vege.id===idVegetablesTarget : findVege).hate = newHate;
  const sum = allVegetables.filter(_vege=>_vege.maxAppears>1).map(_vege => _vege.hate).reduce((a, b) => a + b, 0);
  const newAvgHate = Math.round(sum / allVegetables.filter(_vege=>_vege.maxAppears>1).length);
  while (avgHate !== newAvgHate) {
    if (avgHate > newAvgHate) {
      avgHate--;
    } else {
      avgHate++;
    }
    updateHTML("avgHate", `${avgHate}%`);
    document.getElementById("avgHateBar").setAttribute("style", `width:${avgHate}%`);
    await sleep(skip ? 1 : 100);
  }
  console.log(`avgHate: ${avgHate}`)
}

async function setMoney(value, skip = false) {
  playAudio("money.mp3", 1);
  while (money > 0 && value != 0) {
    if (value > 0) {
      money++;
      value--;
    } else {
      money--;
      value++;
    }
    updateHTML("money", `${money}$`);
    await sleep(skip ? 1 : 100);
  }
}

async function setMentalHealth(value, skip = false) {
  while (mentalHealth >= 0 && mentalHealth < 100 && value !== 0) {
    if (value > 0) {
      mentalHealth++;
      value--;
    } else {
      mentalHealth--;
      value++;
    }
    updateHTML("mentalHealth", `${mentalHealth}%`);
    document.getElementById("mentalHealthBar").setAttribute("style", `width:${mentalHealth}%`);
    await sleep(skip ? 1 : 100);
  }
}

// ___ CHANGE UI FUNCTIONS ____

function updateDate() {
  updateHTML(`date`, `Week ${Math.floor(nbDays / 7) + 1}, ${weekdays[nbDays % 7]}`)
}

function displayMainButtons(isDisabled) {
  updateHTML(
    "buttons",
    `
    <button class="${isDisabled || money < 20 ? 'button-disabled' : 'button'}" id="birbe" ${isDisabled || money < 20 ? '' : 'onclick="bribe()'}">Soudoyer</button>
    <button class="${isDisabled ? 'button-disabled' : 'button'}" id="birbe" ${isDisabled ? '' : 'onclick="sell()'}">Vendre</button>
    <button class="${isDisabled || !allVegetables.find(findVege).promises.length ? 'button-disabled' : 'button'}" id="birbe" ${isDisabled || !allVegetables.find(findVege).promises.length ? '' : 'onclick="talk()'}">Parler</button>
    <button class="${isDisabled ? 'button-disabled' : 'button'}" id="birbe" ${isDisabled ? '' : 'onclick="eat()'}">Manger</button>
  `);
}

function displayPromiseButtons() {
  updateHTML('buttons', `
    <button class="button" id="accept-promise" onclick="acceptPromise()">Accepter</button>
    <button class="button" id="refuse-promise" onclick="refusePromise()">Refuser</button>
  `);
}

function updateHTML(id, value) {
  document.getElementById(id).innerHTML = value;
}

function displayBackgroundVegetable(side) {
  document.getElementById(`vegetable-background-${side}${currentVegetable.weekId+1}`).style.visibility = 'visible';
  document.getElementById(`vegetable-background-${side}${currentVegetable.weekId+1}`).src = `./assets/images/vegetables/${currentVegetable.srcImg}1.png`;
}

function hiddenBackgroundVegetable(side) {
  document.getElementById(`vegetable-background-${side}${currentVegetable.weekId+1}`).style.visibility = 'hidden';
  delete document.getElementById(`vegetable-background-${side}${currentVegetable.weekId+1}`).src;
}

function hiddenAllBackgroundLeft() {
  for (let i = 1; i <= 7; i++) {
    document.getElementById(`vegetable-background-right${i}`).style.visibility = 'hidden';
    delete document.getElementById(`vegetable-background-right${i}`).src;
  }
}
 
// ___ TOOLS FUNCTION ___

function findVege(_vege) {
  return _vege.id === currentVegetable.id;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function playAudio(name, volume) {
  if (volume === 1 && currentTalk) {
    currentTalk.pause();
    if (currentInterval) {
      clearInterval(currentInterval);
      currentInterval = null;
    }
    currentStatAnim = 1;
    isTalking = false;
    document.getElementById('current-vegetable').src = `./assets/images/vegetables/${currentVegetable.srcImg}1.png`;
  }
  const audio = new Audio(`./assets/sounds/${name}`);
  audio.volume = volume;
  audio.play();
  if (volume === 1) {
    isTalking = true;
    currentInterval = setInterval(() => {
      currentStatAnim = (currentStatAnim === 1) ? 2 : 1;
      document.getElementById('current-vegetable').src = `./assets/images/vegetables/${currentVegetable.srcImg}${currentStatAnim}.png`;
    }, 200);
    audio.onended = function() {
      if (currentInterval) {
        clearInterval(currentInterval);
        currentInterval = null;
      }
      currentStatAnim = 1;
      isTalking = false;
      document.getElementById('current-vegetable').src = `./assets/images/vegetables/${currentVegetable.srcImg}1.png`;
    };
    currentTalk = audio;
  }
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ___ CALL MAIN ___

main();