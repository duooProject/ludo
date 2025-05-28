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
    type: "trefl",
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
function bot_chose_playing(bot_hand_cards, table){
  for(var i=0;i<table.length;i++){
    for(var j =0;j<bot_hand_cards.length;j++)
      if(bot_hand_cards[j]===table[i]){
        return {card:bot_hand_cards[i],selectedCards:table[i]}
      }
  }
  return {card:bot_hand_cards[Math.floor(Math.random()*bot_hand_cards.length)],selectedCards:[]}
}

function getCards(deck) {
  for (var i = 0; i < 3; i++) {
    var cardIndex = Math.floor(Math.random() * deck.length);
    this.cards.push(deck[cardIndex]);
    deck.splice(cardIndex, 1);
  }
}
function Player(type) {
  return {
    visible: type === "human",
    cards: [],
    getCards: getCards,
    myCard: [],
    score: 0,
    hisTurn:false,
    calculateScores:calculateScores,
  };
}
function initPlayers(count) {
  this.players[0] = Player("bot");
  this.players[1] = Player("human");
  this.players[1].hisTurn=true
}
function removeCardFromHand(hand, card) {
  for (var i = 0; i < hand.length; i++) {
    if (hand[i].id === card.id) {
      hand.splice(i, 1);
      break;
    }
  }
}
function playCard(player, card, selectedTableCards, table,currentGame) {
  player.hisTurn=false
  currentGame.players.forEach(function(pl){
    if(pl.visible!==player.visible)
      pl.hisTurn=true
  })
  if (selectedTableCards.length === 0) {
    table.push(card);
    removeCardFromHand(player.cards, card);
    return;
  }

  var sumValueCard = selectedTableCards.reduce(function (sum, c) {
    return sum + c.number;
  }, 0);

  if (sumValueCard === card.number) {
    for (var i = 0; i < selectedTableCards.length; i++) {
      player.myCard.push(selectedTableCards[i]);
    }
    removeCardFromHand(player.cards, card);

    selectedTableCards.forEach((selectCard) => {
      removeCardFromHand(table, selectCard);
    });
    if (table.length === 0) {
      player.score += 1;
      prompt("ChkoooooooooooooooooooooooooooooooooooBa");
    }
  } else {
    table.push(card);
    removeCardFromHand(player.cards, card);
  }
}
function calculateScores() {
  var numberOfCards = this.myCard.length;
  var dinariCount = this.myCard.filter(
    function(card){ return card.type === "dinari"}
  ).length;
  var elHaya= this.myCard.findIndex(function(card){
    return card.type === "dinari" && card.number === 7;
  })
  var bermilaCount = this.myCard.filter(
    function(card){ return card.number ===7 || card.number === 6}
  ).length;
  if(numberOfCards> 20) {
    this.score+=1
  }
  if( dinariCount > 5) {
    this.score+=1
  }
  if( bermilaCount > 4) {
    this.score+=1
  } 
  if(elHaya !== -1) {
    this.score+=1
  }
}
function startNewRound() {

  for (var i = 0; i < this.players.length; i++) {
    this.players[i].getCards(this.deck);
  }
  refreshPlayerHand(this)
}
function newMatch() {
  this.deck = cards.slice();
  this.table = [];
  this.round = 6;
  for (var i = 0; i < 4; i++) {
    var cardIndex = Math.floor(Math.random() * this.deck.length);
    this.table.push(this.deck[cardIndex]);
    this.deck.splice(cardIndex, 1);
  }
  this.startNewRound()

}
function startGame() {
  this.initPlayers(2);
  // while (
  //   this.players[0].score < this.targetScore &&
  //  this.players[1].score < this.targetScore
  // ) {
    this.newMatch();
  // }
  if (this.players[0].score >= this.targetScore) {
    alert("Bot wins!");
  } else if (this.players[1].score >= this.targetScore) {
    alert("You win!");
  }
}
function resetGame() {
  this.initPlayers(2);
  this.deck = cards.slice();
  this.table = [];  
  this.round = 6;


}
function Game(targetScore) {
  return {
    targetScore: targetScore || 21,
    deck: cards.slice(),
    table: [],
    players: [],
    round: 6,
    startGame: startGame,
    initPlayers: initPlayers,
    startNewRound: startNewRound,
    newMatch: newMatch,
    resetGame: resetGame,
  };
}
