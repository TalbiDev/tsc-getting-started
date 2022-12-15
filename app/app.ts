function startGame() {
  // start the game
  var messageElement = document.getElementById('messages');
  messageElement!.innerText = 'Welcome to mutlimatch game !!';

}

document.getElementById('startGame')!.addEventListener('click', startGame);