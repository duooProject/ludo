function CardComponent(card, isHidden = "", handlers, table, currentGame) {
  var cardDiv = component("div")
    .addId(card.id)
    .addClass("card")
    .addClass(isHidden);
  var imageSource = "";
  if (isHidden) imageSource = "./media/img/chkoubaBackGround.png";
  else imageSource = card.photo;
  var img = component("img")
    .addClass("card-image")
    .addAtt({ name: "src", value: imageSource })
    .addAtt({ name: "alt", value: card.type + " " + card.number });

  cardDiv.addChild(img);
  if (handlers.onPlay) {
    cardDiv.addEvents("click", function () {
      if (handlers.player.hisTurn)
        return handlers.onPlay(card, handlers.player, table, currentGame);
    });
  } else if (handlers.onSelect && !isHidden) {
    cardDiv.addEvents("click", function () {
      if (currentGame.players[1].hisTurn) {
        document.getElementById(card.id).classList.toggle("selected");
        return handlers.onSelect(card);
      }
    });
  }
  return cardDiv;
}

var selectedCards = [];

function onPlay(card, player, table, currentGame) {
  playCard(player, card, selectedCards, table, currentGame);
  selectedCards = [];
  refreshPlayerHand(player, "player", table, currentGame);
  refreshTable(table);
  setTimeout(function(){

    var cards_playing = bot_chose_playing(currentGame.players[0].cards, table);
  playCard(
    currentGame.players[0],
    cards_playing.card,
    cards_playing.selectedCards,
    table,
    currentGame
  );
  refreshPlayerHand(currentGame.players[0], "bot", table, currentGame);
  refreshTable(table);
  },3000)
  console.log()
  if(!(currentGame.players[0].cards.length+currentGame.players[1].cards.length)&&currentGame.round){
    currentGame.round--
    currentGame.startNewRound()
  }else if(!currentGame.round){
    if(currentGame.players[0].score<currentGame.targetScore&&
    currentGame.players[1].score<currentGame.targetScore)
    currentGame.newMatch()
    else
    currentGame.restGame()
  }
  

}
function onSelect(card) {
  var index = selectedCards.findIndex(function (element) {
    return element.id === card.id;
  });
  if (index !== -1) selectedCards.splice(index, 1);
  else selectedCards.push(card);
}
