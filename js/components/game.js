var cards=[
  {
    id:"T7"
  }
]
function Player(){
  return {
  hand:[],
  myCard:[],
  score:0,
  }
}

function startGame() {

}

function Game(playerCount) {
  return {
    deck:[],
    table:[],
    players:[],
    round:3,
    startGame: startGame,
    resetGame: resetGame,
  };
}