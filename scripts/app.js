function init() {
  const grid = document.querySelector('.grid');
  const cells = [];
  const width = 11;
  const cellCount = width * width;

  let playerPosition = 115;
  let invaders = [3, 4, 5, 6, 7, 13, 14, 15, 16];

  function createGrid(startingPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div');
      cell.textContent = i;
      grid.appendChild(cell);
      cells.push(cell);
    }
    cells[startingPosition].classList.add('player');
  }

  function handleKeyUp(event) {
    cells[playerPosition].classList.remove('player');
    const x = playerPosition % width;

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
    cells[playerPosition].classList.add('player');
  }

  function invadersInitialPosition(invaders) {
    for (let j = 0; j < invaders.length; j++) {
      cells[invaders[j]].classList.add('invaders');
    }
  }

  let count = 3;
  let counter;
  function invadersMovingPattern(counter) {
    counter = setInterval(() => {
      if (count <= 6) {
        count++;
      } else {
        clearInterval(count);
      }
      console.log(count);
    }, 500);
  }

  invadersMovingPattern(counter);
  createGrid(playerPosition);
  invadersInitialPosition(invaders);
  document.addEventListener('keyup', handleKeyUp);


}
window.addEventListener('DOMContentLoaded', init);
