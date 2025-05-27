var cards=[
  {
    id:1,
  },
  {
    id:2,
  },
  {
    id:3
  },
  {
    i:4
  },
]
function Player(){
  return {
  hand:[],
  myCard:[],
  score:0,
  }
}

function Deck(){
  return{

    checkDeck:checkDeck,
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