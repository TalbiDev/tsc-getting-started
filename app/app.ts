/// <reference path='player.ts'/>

function startGame(): void {
  // start the game


  let playerName: string | undefined = getInputValue('playername');
  logPlayer(playerName);

  postScore(100, playerName);
  postScore(-100, playerName);

}

function logPlayer(name: string = "Multimath player"): void {
  console.log(`New game startig for player: ${name}`);

}

function getInputValue(elementID: string): string | undefined {
  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
  if (inputElement.value === '') {
    return undefined;
  } else {
    return inputElement.value;
  }
}

function postScore(score: number, playerName: string = "Multimath player"): void {
  let logger: (value: string) => void;

  if (score < 0) {
    logger = logError;
  } else {
    logger = logMessage;
  }

  const scoreElement: HTMLElement | null = document.getElementById('postedScores');
  scoreElement!.innerText = `${score} - ${playerName}`;

  logger(`Score: ${score}`)
}

document.getElementById('startGame')!.addEventListener('click', startGame);

const logMessage = (message: string) => console.log(message);
const logError = (Err: string) => console.error(Err);

let fisrtPlayer: Player = new Player();
fisrtPlayer.name = "Said";

console.log(fisrtPlayer.formatName());