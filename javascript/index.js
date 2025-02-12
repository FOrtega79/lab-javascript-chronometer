//const Chronometer = require("./chronometer");

const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
//const milDecElement = document.getElementById('milDec');
//const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  setInterval(() => {
    printMinutes()
    printSeconds() 
    printMilliseconds()
  }, 10);
}

function printMinutes() {
  let min = chronometer.getMinutes()
  const newmin = chronometer.computeTwoDigitNumber(min)
  minDecElement.textContent = newmin[0]
  minUniElement.textContent = newmin[1]
  return min
}

function printSeconds() {
  let sec = chronometer.getSeconds()
  const newsec = chronometer.computeTwoDigitNumber(sec)
  secDecElement.textContent = newsec[0]
  secUniElement.textContent = newsec[1]
  return sec
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.classList.remove('start')
  btnLeftElement.classList.add('stop')
  btnLeftElement.innerText ='STOP'
  chronometer.start()
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  btnLeftElement.classList.remove('stop')
  btnLeftElement.classList.add('start')
  btnLeftElement.innerText ='START'
  chronometer.stop()
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.innerText === 'START') setStopBtn()
  else setStartBtn()


  // btnLeftElement.classList.remove('start')
  // btnLeftElement.classList.add('stop')
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
