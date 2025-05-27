function StartCard(onStart) {
  var container = component("div");
  container.addId("startCardContainer");
  var mainDiv = component("div");
  mainDiv.addClass("startCard");

  var CardTile = component("h1");
  CardTile.addChild("CHKOBA");

  var startBtn = component("button");
  startBtn.addChild("AL3AB");
  startBtn.addId("startBtn");
  mainDiv.addChild(CardTile);
  mainDiv.addClass("startCard");
  startBtn.addEvents("click", function () {
    onStart();
    document.getElementById("startCardContainer").style.display = "none";
  });
  mainDiv.addChild(startBtn);
  var cover = component("div");
  cover.addClass("cover");
  container.addChild(cover);
  container.addChild(mainDiv);
  return container;
}
