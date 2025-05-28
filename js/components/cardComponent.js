function CardComponent(card, isHidden = "", handlers,table) {
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
      return handlers.onPlay(card, handlers.player,table);
    });
  } else if (handlers.onSelect && !isHidden) {
    cardDiv.addEvents("click", function () {
      document.getElementById(card.id).classList.toggle("selected");
      return handlers.onSelect(card);
    });
  }
  return cardDiv;
}

var selectedCards = [];

function onPlay(card,player,table) {
   playCard(player, card, selectedCards, table)
   selectedCards=[]
   refreshPlayerHand(player,"player",table)
   refreshTable(table)

}
function onSelect(card) {
  var index = selectedCards.findIndex(function(element){
    return element.id === card.id})
    if(index!==-1)
      selectedCards.splice(index,1)
    else
  selectedCards.push(card)
  console.log(selectedCards)
}
