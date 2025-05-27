var cards = [
  {
    id: 1,
    number: 1,
    type: "heart",
    photo: "./media/img/cards/2.png",
  },
  {
    id: 2,
    number: 1,
    type: "trefl",
    photo: "./media/img/cards/3.png",
  },
  {
    id: 3,
    number: 1,
    type: "pick",
    photo: "./media/img/cards/1.png",
  },
  {
    id: 4,
    number: 1,
    type: "dinari",
    photo: "./media/img/cards/4.png",
  },
  {
    id: 5,
    number: 2,
    type: "heart",
    photo: "./media/img/cards/38.png",
  },
  {
    id: 6,
    number: 2,
    type: "trefl",
    photo: "./media/img/cards/40.png",
  },
  {
    id: 7,
    number: 2,
    type: "pick",
    photo: "./media/img/cards/37.png",
  },
  {
    id: 8,
    number: 2,
    type: "dinari",
    photo: "./media/img/cards/39.png",
  },
  {
    id: 9,
    number: 3,
    type: "heart",
    photo: "./media/img/cards/35.png",
  },
  {
    id: 10,
    number: 3,
    type: "trefl",
    photo: "./media/img/cards/33.png",
  },
  {
    id: 11,
    number: 3,
    type: "pick",
    photo: "./media/img/cards/36.png",
  },
  {
    id: 12,
    number: 3,
    type: "dinari",
    photo: "./media/img/cards/34.png",
  },
  {
    id: 13,
    number: 4,
    type: "heart",
    photo: "./media/img/cards/32.png",
  },
  {
    id: 14,
    number: 4,
    type: "trefl",
    photo: "./media/img/cards/30.png",
  },
  {
    id: 15,
    number: 4,
    type: "pick",
    photo: "./media/img/cards/29.png",
  },
  {
    id: 16,
    number: 4,
    type: "dinari",
    photo: "./media/img/cards/31.png",
  },
  {
    id: 17,
    number: 5,
    type: "heart",
    photo: "./media/img/cards/25.png",
  },
  {
    id: 18,
    number: 5,
    type: "trefl",
    photo: "./media/img/cards/26.png",
  },
  {
    id: 19,
    number: 5,
    type: "pick",
    photo: "./media/img/cards/28.png",
  },
  {
    id: 20,
    number: 5,
    type: "dinari",
    photo: "./media/img/cards/27.png",
  },
  {
    id: 21,
    number: 6,
    type: "heart",
    photo: "./media/img/cards/21.png",
  },
  {
    id: 22,
    number: 6,
    type: "tefl",
    photo: "./media/img/cards/22.png",
  },
  {
    id: 23,
    number: 6,
    type: "pick",
    photo: "./media/img/cards/23.png",
  },
  {
    id: 24,
    number: 6,
    type: "dinari",
    photo: "./media/img/cards/24.png",
  },
  {
    id: 25,
    number: 7,
    type: "heart",
    photo: "./media/img/cards/7.png",
  },
  {
    id: 26,
    number: 7,
    type: "trefl",
    photo: "./media/img/cards/8.png",
  },
  {
    id: 27,
    number: 7,
    type: "pick",
    photo: "./media/img/cards/6.png",
  },
  {
    id: 28,
    number: 7,
    type: "dinari",
    photo: "./media/img/cards/5.png",
  },
  {
    id: 29,
    number: 8,
    type: "heart",
    photo: "./media/img/cards/48.png",
  },
  {
    id: 30,
    number: 8,
    type: "trefl",
    photo: "./media/img/cards/45.png",
  },
  {
    id: 31,
    number: 8,
    type: "pick",
    photo: "./media/img/cards/46.png",
  },
  {
    id: 32,
    number: 8,
    type: "dinari",
    photo: "./media/img/cards/47.png",
  },
  {
    id: 33,
    number: 9,
    type: "heart",
    photo: "./media/img/cards/44.png",
  },
  {
    id: 34,
    number: 9,
    type: "trefl",
    photo: "./media/img/cards/41.png",
  },
  {
    id: 35,
    number: 9,
    type: "pick",
    photo: "./media/img/cards/43.png",
  },
  {
    id: 36,
    number: 9,
    type: "dinari",
    photo: "./media/img/cards/42.png",
  },
  {
    id: 37,
    number: 10,
    type: "heart",
    photo: "./media/img/cards/49.png",
  },
  {
    id: 38,
    number: 10,
    type: "trefl",
    photo: "./media/img/cards/51.png",
  },
  {
    id: 39,
    number: 10,
    type: "pick",
    photo: "./media/img/cards/52.png",
  },
  {
    id: 40,
    number: 10,
    type: "dinari",
    photo: "./media/img/cards/50.png",
  },
];
function getCards() {
  for (var i = 0; i < 3; i++) {
    var cardIndex = Math.floor(Math.random() * this.deck.length);
    this.cards.push(this.deck[cardIndex]);
    this.deck.splice(cardIndex, 1);
  }
}
function Player(type) {
  return {
    visible: type === "human",
    cards: [],
    getCards: getCards,
    myCard: [],
    score: 0,
  };
}
function initPlayers(count) {
  this.players[0] = Player("bot");
  this.players[1] = Player("human");
  this.players[0].deck = this.deck;
  this.players[1].deck = this.deck;
}

function startNewRound() {
  for (var i = 0; i < 4; i++) {
    var cardIndex = Math.floor(Math.random() * this.deck.length);
    this.table.push(this.deck[cardIndex]);
    this.deck.splice(cardIndex, 1);
  }
  for(var i=0;i<this.players.length;i++){
    this.players[i].getCards()
  }
}

function Game() {
  return {
    deck: cards,
    table: [],
    players: [],
    round: 6,
    initPlayers: initPlayers,
    startNewRound: startNewRound,
    resetGame: resetGame,
  };
}

function startGame(playerCount) {
  var game = Game();
  game.initPlayers(2);
  for (var i = 0; i < this.round; i++) {
    startNewRound();
  }
}
