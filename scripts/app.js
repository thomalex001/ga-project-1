function init() {
  const grid = document.querySelector('.grid');
  const startGame = document.querySelector('#start-btn');
  const restartGame = document.querySelector('#restart-btn');
  const cells = [];
  const width = 20;
  const cellCount = width * width;
  const invadersPattern = setInterval(moveInvaders, 100);
  let playerPosition = 390;
  let invaders = [9, 10, 11, 12, 13, 29, 30, 31, 32, 33];
  let shield = [321, 322, 323, 325, 326, 327, 329, 330, 332,
    333, 334, 336, 337, 338 ]
  let direction = 1;
  let goingRight = true;

  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div');
      cell.textContent = i;
      grid.appendChild(cell);
      cells.push(cell);
    }
  }
  function addPlayer() {
    cells[playerPosition].classList.add('player');
  }
  function removePlayer() {
    cells[playerPosition].classList.remove('player');
  }

  function handleKeyUp(event) {
    const x = playerPosition % width;
    removePlayer();

    switch (event.keyCode) {
      case 39:
        if (x < width - 1) playerPosition++;
        break;
      case 37:
        if (x > 0) playerPosition--;
        break;
      default:
        console.log('invalid key do nothing');
    }
    addPlayer();
  }
  function addInvaders() {
    for (let j = 0; j < invaders.length; j++) {
      cells[invaders[j]].classList.add('invaders');
    }
  }

  function removeInvaders() {
    for (let j = 0; j < invaders.length; j++) {
      cells[invaders[j]].classList.remove('invaders');
    }
  }
  function moveInvaders() {
    const leftSide = invaders[0] % width === 0;
    const rightSide = invaders[invaders.length - 1] % width === width - 1;
    removeInvaders();

    if (rightSide && goingRight) {
      for (let i = 0; i < invaders.length; i++) {
        invaders[i] += width + 1;
        direction = -1;
        goingRight = false;
      }
    }
    if (leftSide && !goingRight) {
      for (let i = 0; i < invaders.length; i++) {
        invaders[i] += width - 1;
        direction = 1;
        goingRight = true;
      }
    }

    for (let i = 0; i < invaders.length; i++) {
      invaders[i] += direction;
    }
    addInvaders();
  }

  function addShield() {
    for (let j = 0; j < shield.length; j++) {
      cells[shield[j]].classList.add('shield');
    }
  }

  function restartingGame() {
    console.log('restart button works');
    clearInterval(invadersPattern);
    removeInvaders();
  }
  
  function startingGame() {
    console.log('starting game works');
    setInterval(moveInvaders, 100)
  }
  

  createGrid(playerPosition);
  addShield();
  addPlayer();
  startGame.addEventListener('click', startingGame);
  restartGame.addEventListener('click', restartingGame);
  document.addEventListener('keyup', handleKeyUp);
  
  // if (cells[playerPosition].classList.contains('shield')) {
  //   console.log('GameOVER');
  //   clearInterval(invadersPattern);
  //   removeInvaders();
  // }
//   for (let j = 0; j < invaders.length; j++) {
//    if (cells[invaders[j]].classList.contains('shield', 'invaders')){
//    console.log('aliens at bottom')
//   }
// }

function shooting(event) {
  let ball;
  let currentBallPosition = playerPosition;
  function shootBall () {
    cells[currentBallPosition].classList.remove('ball');
    currentBallPosition -= width;
    cells[currentBallPosition].classList.add('ball');
  } 
  switch(event.keyCode) {
    case 32:
        ball = setInterval(shootBall, 100)
  }
}


document.addEventListener('keyup', shooting)



}
window.addEventListener('DOMContentLoaded', init);