import {readFromStorage} from './storage.js';

const endGameModal = document.getElementById('endGameModal');
let winner = null;

function showEndGameModal() {
  endGameModal.style.display = 'flex';
  // Show the modal by adding the "show" class
  endGameModal.classList.add('show');
  winner = checkWhoIsWinner();
  consoleText([`Thanks for playing 8)`, 'Game ended', `The winner is ${winner}`], 'text', ['tomato', 'rebeccapurple', 'lightblue']);
}

function hideEndGameModal() {
  endGameModal.style.display = 'none';
}

// function([string1, string2],target id,[color1,color2])
// consoleText([`Thanks for playing 8)`, 'Game ended', `The winner is ${winner}`], 'text', ['tomato', 'rebeccapurple', 'lightblue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  let visible = true;
  const con = document.getElementById('console');
  let letterCount = 1;
  let x = 1;
  let waiting = false;
  const target = document.getElementById(id);
  target.setAttribute('style', 'color:' + colors[0]);
  window.setInterval(function() {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function() {
        const usedColor = colors.shift();
        colors.push(usedColor);
        const usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0]);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden';
      visible = false;
    } else {
      con.className = 'console-underscore';
      visible = true;
    }
  }, 400);
}

function showStartNewGameButtonSlowly() {
  const button = document.getElementById('startNewGameBtnModal');
  button.classList.remove('hidden'); // Remove the "hidden" class to show the button

  let opacity = 0;
  button.style.opacity = opacity;
  const fadeInInterval = setInterval(function() {
    opacity += 0.005; // Increase opacity gradually
    button.style.opacity = opacity;

    if (opacity >= 1) {
      clearInterval(fadeInInterval); // Stop the interval when fully visible
    }
  }, 30); // Adjust the interval duration for smoother or faster fading
}

// Call the function after a delay of 3 seconds (3000 milliseconds)
setTimeout(showStartNewGameButtonSlowly, 4000);

function checkWhoIsWinner() {
  const currentScoreTable = readFromStorage('currentScoreTable');

  // Calculate firstPlayerTotal
  let firstPlayerTotal = 0;
  for (const turn of currentScoreTable.firstPlayerTurns) {
    firstPlayerTotal += turn.dicesSum;
  }

  // Calculate secondPlayerTotal
  let secondPlayerTotal = 0;
  for (const turn of currentScoreTable.secondPlayerTurns) {
    secondPlayerTotal += turn.dicesSum;
  }

  // Update the gameResult object
  currentScoreTable.firstPlayerTotal = firstPlayerTotal;
  currentScoreTable.secondPlayerTotal = secondPlayerTotal;

  const firstPlayerScore = currentScoreTable.firstPlayerTotal;
  const secondPlayerScore = currentScoreTable.secondPlayerTotal;

  if (firstPlayerScore > secondPlayerScore) {
    winner = currentScoreTable.firstPlayer;
  } else if (secondPlayerScore > firstPlayerScore) {
    winner = currentScoreTable.secondPlayer;
  } else {
    // It's a tie
    winner = 'It\'s a tie!';
  }

  console.log(`First Player Total: ${firstPlayerTotal}`);
  console.log(`Second Player Total: ${secondPlayerTotal}`);
  console.log('call from endGameModal', currentScoreTable);
  console.log(winner);
  return winner;
}

export {showEndGameModal, hideEndGameModal, checkWhoIsWinner};

