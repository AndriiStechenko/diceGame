import {eraseDicesContainer} from './dicesDrawer.js';
import {deleteFromStorage} from './storage.js';
import {rollDice} from './actions.js';
import ComputerPlayer from '../models/computerPlayer.js';
// import {showRollDiceBtn, showEndTurnBnt} from './callbacks.js';
import {readFromStorage, saveToStorage} from '../modules/storage.js';
import Turn from '../models/turn.js';
import {calculateAmountOfPointsForCombos} from './comboRules.js';
import {cleanComboValue} from './comboRules.js';
import {setComputerTurnsInfoToScoreTable} from './scoreTableInitialization.js';

function initializeCompPlayer() {
  const computerPlayer = new ComputerPlayer;
  computerPlayer.name;
  saveToStorage('computer', computerPlayer);
}

// function setCompScoreToScoretable() {
// }

function setCompNameToTurn() {
  const existingPlayerObj = readFromStorage('computer');
  const existingTurnObj = readFromStorage('currentTurn');
  const currentTurn = new Turn;
  if (existingTurnObj) {
    currentTurn.dices = existingTurnObj.dices;
    currentTurn.setCompName(existingPlayerObj.name);
  } else {
    alert('no info');
  }
  saveToStorage('currentTurn', currentTurn);
}

function chooseBestComboOption() {
}

function compThrowingDicesActions() {
  cleanComboValue();
  eraseDicesContainer();
  deleteFromStorage('currentTurn');
  rollDice();
  setCompNameToTurn();
  chooseBestComboOption();
  alert('Compuer turn');
  calculateAmountOfPointsForCombos();

  //   ***
//   showEndTurnBnt();
//   showRollDiceBtn();
}

function compTurnTime() {
  compThrowingDicesActions();
  setComputerTurnsInfoToScoreTable();
}

export {compTurnTime, initializeCompPlayer};
