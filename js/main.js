function onStartGame(){
  var table=component("div")
  table.addClass("gameTable")
   var body = document.querySelector("body");
   body.appendChild(table.renderComponent());
  


}

document.addEventListener("DOMContentLoaded", function () {
  var body = document.querySelector("body");
  var startCard = StartCard(onStartGame);
  body.appendChild(startCard.renderComponent());
});
