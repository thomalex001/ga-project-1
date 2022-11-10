function init () {

console.log('js is working!')






const grid = document.querySelector('.grid');
  // const start = document.querySelector('#start');
  // const scoreDisplay = document.querySelector('#score-display')

  const width = 10;
  const gridCellCount = width * width;
  const cells = [];
  // let pikaPosition = 0;
  // let score = 0;
  // let pikaCount = 0;

  function createGrid() {
    for (let index = 0; index < gridCellCount; index++) {
      const cell = document.createElement('div');
      cell.setAttribute('data-index', index);
      cells.push(cell);
      grid.appendChild(cell);
    }
  }
  
  createGrid();
  // function addPikachu(position) {
  //   cells[position].classList.add('pika')
  // }

  // function removePikachu(position) {
    //   cells[position].classList.remove('pika');
  // }

  // function getRandomPosition() {
  //   const actualCellCount = gridCellCount - 1;
  //   return Math.floor(Math.random() * actualCellCount)
  // }
  // function incrementScore () {
  //   score += 100;
  //   scoreDisplay.innerHTML = score;
  // }

  // function endGame () {
  //   clearInterval(timer);
  //   removePikachu(pikaPosition);
  //   alert(score);
  // }
  // function startGame () {
  //   timer = setInterval(() => {
  //     if (pikaCount > 9) {
  //       endGame();
  //       return;
  //     }
  //     removePikachu(pikaPosition);
  //     pikaPosition = getRandomPosition();
  //     pikaCount++;
  //     addPikachu(pikaPosition);
  //   }, 1000)
  // }
  // function handleWhack(event) {
  //   if (event.target.classList.contains('pika')) {
  //     removePikachu(event.target.dataset.index);
  //     incrementScore();
  //   }
  // }
  


  // start.addEventListener('click', startGame);
  // cells.forEach((cell) => cell.addEventListener('click', handleWhack))









}
document.addEventListener('DOMContentLoaded', init);






















}
  document.addEventListener('DOMContentLoaded', init);
