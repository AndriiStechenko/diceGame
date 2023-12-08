import {deleteFromStorage, readFromStorage} from './storage.js';
import {setDiceScoreToTurn} from './turnInitialization.js';
import {submitPlayersNameFormModule, playerIsKnown, changeTextInPlayerNameHolder} from './playerNameGetterModule.js';
import {showNewPlayerFormModal} from './playerNameGetterModule.js';
import {initializeScoreTable, showScoreTable, createScoreTable, setPlayerTurnsInfoToScoreTable, createResultTable, setComputerTurnsInfoToScoreTable} from './scoreTableInitialization.js';
import {rollDice} from './actions.js';
import {eraseDicesContainer, drawEmptyDices, makeDiceSectionVisible} from './dicesDrawer.js';
import {showModal, checkedWhatComboAlreadyUsed, makeUsedBtnInCauruselClickeble} from './comboCaruselModule.js';
import {showEndGameModal, hideEndGameModal, checkWhoIsWinner} from './endGameModule.js';
import {compTurnTime, initializeCompPlayer} from './computerPlayer.js';

const startGameBtn = document.getElementById('start-game-btn');
const rollDiceBtn = document.getElementById('roll-dice-btn');
const endTurnBtn = document.getElementById('end-turn-btn');
const endGameBtn = document.getElementById('end-game-btn');


function showReRollDiceBtn() {
  const reRollDiceBtn = document.getElementById('re-roll-dice-btn');
  reRollDiceBtn.style.display = '';
}

function hideReRollDiceBtn() {
  const reRollDiceBtn = document.getElementById('re-roll-dice-btn');
  reRollDiceBtn.style.display = 'none';
}

function showEndTurnBnt() {
  endTurnBtn.classList.toggle('invisible');
}

function showRollDiceBtn() {
  rollDiceBtn.classList.toggle('invisible');
}

function toggleVisebilityStartGameBtn() {
  startGameBtn.style.display = 'none';
}

function hidePlayerNameHolder() {
  const playerNameHolder = document.getElementById('page-header');
  playerNameHolder.style.display = 'none';
}

function showPlayerNameHolder() {
  const playerNameHolder = document.getElementById('page-header');
  playerNameHolder.style.display = '';
}

function showEndGameBtn() {
  endGameBtn.classList.remove('d-none');
  endGameBtn.classList.add('d-flex');
}

function hideEndGameBtn() {
  endGameBtn.classList.remove('d-flex');
  endGameBtn.classList.add('d-none');
}

function deleteScoreTableFromPage() {
  const scortableElement = document.querySelector('table');
  if (scortableElement) {
    scortableElement.parentNode.removeChild(scortableElement);
  }
}

function hideendTurnBtnAndShowRerollBtn() {
  showReRollDiceBtn();
  showEndTurnBnt();
}

function endGameBtnActions() {
  toggleVisebilityStartGameBtn();
  localStorage.clear();
  makeDiceSectionVisible();
  drawEmptyDices();
  showRollDiceBtn();
  showEndTurnBnt();
  deleteScoreTableFromPage();
  // showScoreTable();
  showPlayerNameHolder();
  changeTextInPlayerNameHolder();
  location.reload();
}

function startGameBtnActions() {
  showNewPlayerFormModal();
  const currentScoreTable = readFromStorage('currentScoreTable');
  if (currentScoreTable && currentScoreTable.firstPlayerTurns.length < 6) {
    showRollDiceBtn();
    // showEndTurnBnt();
  } else if (currentScoreTable === null) {
    showRollDiceBtn();
    // showEndTurnBnt();
  }
  makeDiceSectionVisible();
  drawEmptyDices();
  if (playerIsKnown()) {
    prepareScoreTable();
  }
  makeUsedBtnInCauruselClickeble();
  toggleVisebilityStartGameBtn();
  hidePlayerNameHolder();
  showEndGameBtn();
  initializeCompPlayer();
}

function afterRollDiceActions() {
  eraseDicesContainer();
  deleteFromStorage('currentTurn');
  rollDice();
  showModal();
  checkedWhatComboAlreadyUsed();
  showEndTurnBnt();
  showRollDiceBtn();
}

function endTurnBtnActions() {
  setDiceScoreToTurn();
  setPlayerTurnsInfoToScoreTable();
  createResultTable();
  showRollDiceBtn();
  showEndTurnBnt();
  const currentScoreTable = readFromStorage('currentScoreTable');
  if (currentScoreTable.firstPlayerTurns.length >= 6) {
    showRollDiceBtn();
    showEndTurnBnt();
    // checkWhoIsWinner();
    showEndGameModal();
  }
  compTurnTime();
  createResultTable();
  // setComputerTurnsInfoToScoreTable();
}

function startNewGameActionsFromModal() {
  hideEndGameModal();
  toggleVisebilityStartGameBtn();
  localStorage.clear();
  makeDiceSectionVisible();
  drawEmptyDices();
  showRollDiceBtn();
  showEndTurnBnt();
  deleteScoreTableFromPage();
  // showScoreTable();
  showPlayerNameHolder();
  changeTextInPlayerNameHolder();
  location.reload();
}

function afterSaveNewPlayerActions() {
  submitPlayersNameFormModule();
  prepareScoreTable();
}

function prepareScoreTable() {
  const currentScoreTable = initializeScoreTable();
  showScoreTable();
  createScoreTable(currentScoreTable);
}

// eslint-disable-next-line max-len
export {startGameBtnActions, afterSaveNewPlayerActions, afterRollDiceActions, endTurnBtnActions, showEndTurnBnt, showRollDiceBtn, makeDiceSectionVisible, prepareScoreTable, createResultTable, showScoreTable, endGameBtnActions, toggleVisebilityStartGameBtn, hideEndGameBtn, showEndGameBtn, startNewGameActionsFromModal, hideendTurnBtnAndShowRerollBtn, showReRollDiceBtn, hideReRollDiceBtn};
