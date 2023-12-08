import {readFromStorage} from './storage.js';

let comboValues = [];
// let smallStritBolean;

const comboRules = {
  'oneCombination': [1],
  'twoCombination': [2],
  'threeCombination': [3],
  'fourCombination': [4],
  'fiveCombination': [5],
  'sixCombination': [6],
  'smallStritCombination': [1, 2, 3, 4, 5],
  'bigStritCombination': [2, 3, 4, 5, 6],
  'fullCombination': [6, 6, 6, 5, 5],
  'successCombination': [6, 6, 6, 6, 6],
  'pokerCombination': null,
};

function isComboOne() {
  const dicesValues = [];
  const currentTurn = readFromStorage('currentTurn');
  const dices = currentTurn.dices;
  for (const dice of dices) {
    dicesValues.push(dice.value);
  }
  return comboRules.oneCombination.every((element) => dicesValues.includes(element));
}

function calculateComboOnePoints() {
  if (isComboOne) {
    const valueToKeep = comboRules.oneCombination[0];
    const dicesValues = [];
    const currentTurn = readFromStorage('currentTurn');
    const dices = currentTurn.dices;
    for (const dice of dices) {
      dicesValues.push(dice.value);
    }
    let comboOnePointsValue = dicesValues.filter((element) => element === valueToKeep);
    comboOnePointsValue = comboOnePointsValue.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    comboValues.push({'oneCombination': comboOnePointsValue});
    return comboOnePointsValue;
  }
}

function isComboTwo() {
  const dicesValues = [];
  const currentTurn = readFromStorage('currentTurn');
  const dices = currentTurn.dices;
  for (const dice of dices) {
    dicesValues.push(dice.value);
  }
  return comboRules.twoCombination.every((element) => dicesValues.includes(element));
}

function calculateComboTwoPoints() {
  if (isComboTwo) {
    const valueToKeep = comboRules.twoCombination[0];
    const dicesValues = [];
    const currentTurn = readFromStorage('currentTurn');
    const dices = currentTurn.dices;
    for (const dice of dices) {
      dicesValues.push(dice.value);
    }
    let comboTwoPointsValue = dicesValues.filter((element) => element === valueToKeep);
    comboTwoPointsValue = comboTwoPointsValue.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    comboValues.push({'twoCombination': comboTwoPointsValue});
    return comboTwoPointsValue;
  }
}

function isComboThree() {
  const dicesValues = [];
  const currentTurn = readFromStorage('currentTurn');
  const dices = currentTurn.dices;
  for (const dice of dices) {
    dicesValues.push(dice.value);
  }
  return comboRules.threeCombination.every((element) => dicesValues.includes(element));
}

function calculateComboThreePoints() {
  if (isComboThree) {
    const valueToKeep = comboRules.threeCombination[0];
    const dicesValues = [];
    const currentTurn = readFromStorage('currentTurn');
    const dices = currentTurn.dices;
    for (const dice of dices) {
      dicesValues.push(dice.value);
    }
    let comboThreePointsValue = dicesValues.filter((element) => element === valueToKeep);
    comboThreePointsValue = comboThreePointsValue.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    comboValues.push({'threeCombination': comboThreePointsValue});
    return comboThreePointsValue;
  }
}

function isComboFour() {
  const dicesValues = [];
  const currentTurn = readFromStorage('currentTurn');
  const dices = currentTurn.dices;
  for (const dice of dices) {
    dicesValues.push(dice.value);
  }
  return comboRules.fourCombination.every((element) => dicesValues.includes(element));
}

function isComboFive() {
  const dicesValues = [];
  const currentTurn = readFromStorage('currentTurn');
  const dices = currentTurn.dices;
  for (const dice of dices) {
    dicesValues.push(dice.value);
  }
  return comboRules.fiveCombination.every((element) => dicesValues.includes(element));
}

function isComboSix() {
  const dicesValues = [];
  const currentTurn = readFromStorage('currentTurn');
  const dices = currentTurn.dices;
  for (const dice of dices) {
    dicesValues.push(dice.value);
  }
  return comboRules.sixCombination.every((element) => dicesValues.includes(element));
}

function calculateComboFourPoints() {
  if (isComboFour) {
    const valueToKeep = comboRules.fourCombination[0];
    const dicesValues = [];
    const currentTurn = readFromStorage('currentTurn');
    const dices = currentTurn.dices;
    for (const dice of dices) {
      dicesValues.push(dice.value);
    }
    let comboFourPointsValue = dicesValues.filter((element) => element === valueToKeep);
    comboFourPointsValue = comboFourPointsValue.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    comboValues.push({'fourCombination': comboFourPointsValue});
    return comboFourPointsValue;
  }
}

function calculateComboFivePoints() {
  if (isComboFive) {
    const valueToKeep = comboRules.fiveCombination[0];
    const dicesValues = [];
    const currentTurn = readFromStorage('currentTurn');
    const dices = currentTurn.dices;
    for (const dice of dices) {
      dicesValues.push(dice.value);
    }
    let comboFivePointsValue = dicesValues.filter((element) => element === valueToKeep);
    comboFivePointsValue = comboFivePointsValue.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    comboValues.push({'fiveCombination': comboFivePointsValue});
    return comboFivePointsValue;
  }
}

function calculateComboSixPoints() {
  if (isComboSix) {
    const valueToKeep = comboRules.sixCombination[0];
    const dicesValues = [];
    const currentTurn = readFromStorage('currentTurn');
    const dices = currentTurn.dices;
    for (const dice of dices) {
      dicesValues.push(dice.value);
    }
    let comboSixPointsValue = dicesValues.filter((element) => element === valueToKeep);
    comboSixPointsValue = comboSixPointsValue.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    comboValues.push({'sixCombination': comboSixPointsValue});
    return comboSixPointsValue;
  }
}

function isOneOfHihghCombinations() {
  const dicesValues = [];

  const currentTurn = readFromStorage('currentTurn');
  const dices = currentTurn.dices;
  for (const dice of dices) {
    dicesValues.push(dice.value);
  }
  if (dicesValues.sort().toString() == comboRules.smallStritCombination.toString()) {
    comboValues.push({'smallStritCombination': 20});
    comboValues.push({'bigStritCombination': 0});
    comboValues.push({'fullCombination': 0});
    comboValues.push({'successCombination': 0});
  } else if (dicesValues.sort().toString() == comboRules.bigStritCombination.toString()) {
    comboValues.push({'smallStritCombination': 0});
    comboValues.push({'bigStritCombination': 25});
    comboValues.push({'fullCombination': 0});
    comboValues.push({'successCombination': 0});
  } else if (dicesValues.sort().toString() == comboRules.fullCombination.toString()) {
    comboValues.push({'smallStritCombination': 0});
    comboValues.push({'bigStritCombination': 0});
    comboValues.push({'fullCombination': 28});
    comboValues.push({'successCombination': 0});
  } else if (dicesValues.sort().toString() == comboRules.successCombination.toString()) {
    comboValues.push({'smallStritCombination': 0});
    comboValues.push({'bigStritCombination': 0});
    comboValues.push({'fullCombination': 0});
    comboValues.push({'successCombination': 30});
  } else {
    comboValues.push({'smallStritCombination': 0});
    comboValues.push({'bigStritCombination': 0});
    comboValues.push({'fullCombination': 0});
    comboValues.push({'successCombination': 0});
  }
}


function chooseBigestScoreFomCombo() {
  _checkIfComboUsed();
  const bigestScoreFromComboResalt = {combination: null, value: -1};

  comboValues.forEach((combination) => {
    const key = Object.keys(combination)[0];
    const value = combination[key];

    if (value > bigestScoreFromComboResalt.value) {
      bigestScoreFromComboResalt.value = value;
      bigestScoreFromComboResalt.combination = key;
    }
  });

  return bigestScoreFromComboResalt;
}

function cleanComboValue() {
  comboValues = [];
}

function _checkIfComboUsed() {
  const currentScoreTable = readFromStorage('currentScoreTable');
  const secondPlayerTurns = currentScoreTable.secondPlayerTurns;

  secondPlayerTurns.forEach((turn) => {
    const usedCombo = turn.usedCombo;

    // Find the index of the element in comboValues array with the same combination
    const comboIndex = comboValues.findIndex((combo) => Object.keys(combo)[0] === usedCombo);

    // If the combination is found, remove it from comboValues array
    if (comboIndex !== -1) {
      comboValues.splice(comboIndex, 1);
    }
  });

  return comboValues;
}

function calculateAmountOfPointsForCombos() {
  isComboOne();
  calculateComboOnePoints();
  isComboTwo();
  calculateComboTwoPoints();
  isComboThree();
  calculateComboThreePoints();
  isComboFour();
  calculateComboFourPoints();
  isComboFive();
  calculateComboFivePoints();
  isComboSix();
  calculateComboSixPoints();
  isOneOfHihghCombinations();
  chooseBigestScoreFomCombo();
}

export {comboRules, isComboOne, calculateComboOnePoints, calculateAmountOfPointsForCombos, chooseBigestScoreFomCombo, cleanComboValue};
