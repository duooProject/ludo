document.addEventListener("DOMContentLoaded", function () {
  var body = document.querySelector("body");
  var startCard = StartCard(onStartGame);
  body.appendChild(startCard.renderComponent());
});
