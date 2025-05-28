function onStartGame(){
  var currentGame = Game();
  currentGame.startGame()
   var gameContainer = GameContainer();
     document.body.innerHTML = ''; 
    document.body.appendChild(gameContainer.renderComponent());
   refreshGameContainer(currentGame)
 
}

document.addEventListener("DOMContentLoaded", function () {
  var body = document.querySelector("body");
  var startCard = StartCard(onStartGame);
 
  body.appendChild(startCard.renderComponent());
});
