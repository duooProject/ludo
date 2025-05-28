function refreshPlayerHand(cards, player) {
  if (player === "player") {
    var elements = document.querySelectorAll("#playerHandCell");
    cards.forEach(function (card) {
      elements.appendChild(CardComponent(card, "", onclick).renderComponent());
    });
  } else if (player === "bot") {
    var elements = document.querySelectorAll("#botHandCell");
    cards.forEach(function (card) {
      elements.appendChild(CardComponent(card, "hide").renderComponent());
    });
  }
}

function refreshTable(table) {
  var elements = document.querySelectorAll("#tableCell .table-cell");
  elements.forEach(function (element) {
    element.innerHTML = "";
  });
  table.forEach(function (card, index) {
    elements[index].innerHTML = cardComponent(card);
  });
}

function refreshGameContainer(currentGame) {
  document.getElementById("scoreCell-player").innerText =
    currentGame.players[1].score;
  document.getElementById("scoreCell-bot").innerText =
    currentGame.players[0].score;
  refreshTable(currentGame.table);
  refreshPlayerHand(currentGame.players[0], "bot");
  refreshPlayerHand(currentGame.players[1], "player");
}
