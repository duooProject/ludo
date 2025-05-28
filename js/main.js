function onStartGame(){
  var game = Game();
  var gameContainer = GameContainer();

  
  document.body.innerHTML = ''; 
  document.body.appendChild(gameContainer.renderComponent());
}

document.addEventListener("DOMContentLoaded", function () {
  var body = document.querySelector("body");
  var startCard = StartCard(onStartGame);
 
  body.appendChild(startCard.renderComponent());
});
