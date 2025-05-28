function refreshPlayerHand(player, playerType, table) {
  if (playerType === "player") {
    var elements = document.querySelector("#playerHandCell");
    elements.innerHTML =""
    player.cards.forEach(function (card) {
      elements.appendChild(
        CardComponent(
          card,
          "",
          { onPlay: onPlay, player: player },
          table
        ).renderComponent()
      );
    });
  } else if (playerType === "bot") {
    var elements = document.querySelector("#botHandCell");
    elements.innerHTML =""
    player.cards.forEach(function (card) {
      elements.appendChild(
        CardComponent(card, "hide", { player: player }, table).renderComponent()
      );
    });
  }
}

function refreshTable(table) {
  var elements = document.querySelectorAll("#tableCell .table-cell");
  elements.forEach(function (element) {
    element.innerHTML = "";
  });
  table.forEach(function (card, index) {
    elements[index].appendChild(
      CardComponent(card, "", { onSelect: onSelect }).renderComponent()
    );
  });
}

function refreshGameContainer(currentGame) {
  document.getElementById("scoreCell-player").innerText =
    currentGame.players[1].score;
  document.getElementById("scoreCell-bot").innerText =
    currentGame.players[0].score;
  refreshTable(currentGame.table);
  refreshPlayerHand(currentGame.players[0], "bot", currentGame.table);
  refreshPlayerHand(currentGame.players[1], "player", currentGame.table);
}
