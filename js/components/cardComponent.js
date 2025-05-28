function CardComponent(card, isHidden="", handlers={}) {
  var cardDiv = component("div")
    .addId(card.id)
    .addClass("card")
    .addClass(isHidden)

  var img = component("img")
    .addClass("card-image")
    .addAtt({ name: "src", value: card.photo })
    .addAtt({ name: "alt", value: card.type+" "+card.number });

  cardDiv.addChild(img);

  if (handlers.onPlay) {
    cardDiv.addEvents("click", () => handlers.onPlay(card, cardDiv));
  } else if (handlers.onSelect) {
    cardDiv.addEvents("click", function(){ 
        document.getElementById(card.id).classList.add("selected")
        return handlers.onSelect(card, cardDiv)
    });
  }
  return cardDiv;
}
