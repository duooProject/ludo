function GameContainer() {
    var mainDiv = component("div");
    mainDiv.addId("gameContainerContainer");
    mainDiv.addClass("containerGame");


    // Create the header first row
    var row1 = component("div")
    row1.addClass("row").addClass("hg-3");
    
    
    // Create score cell
    var scoreCell = component("div");
    scoreCell.addClass("scoreCell");
    scoreCell.addId("scoreCell-bot");
    row1.addChild(scoreCell);

    //Create Bote Hand cell
    var botHandCell = component("div");
    botHandCell.addClass("row botHandCell");
    botHandCell.addId("botHandCell");
    row1.addChild(botHandCell);

    // Create empty cell
    row1.addChild(component("div").addClass("grid-cell"));



    //Create Table Row
    var tableRow = component("div");
    tableRow.addClass("row hg-6");

    //Create empty cell
    tableRow.addChild(component("div").addClass("grid-cell"));

    // Create table cell
    var tableCell = component("div");
    tableCell.addClass("grid-cell table hg-6");
    tableCell.addId("tableCell");
    tableCell.addChild(
        component("div")
        .addClass("row")
            .addChild(component("div").addClass("table-cell"))
            .addChild(component("div").addClass("table-cell"))
            .addChild(component("div").addClass("table-cell"))
        ).addChild(
        component("div")
        .addClass("row")
            .addChild(component("div").addClass("table-cell"))
            .addChild(component("div").addClass("table-cell"))
            .addChild(component("div").addClass("table-cell"))
        ).addChild(
        component("div")
        .addClass("row")
            .addChild(component("div").addClass("table-cell"))
            .addChild(component("div").addClass("table-cell"))
            .addChild(component("div").addClass("table-cell"))
        )
    tableRow.addChild(tableCell);
    
    // Create empty cell
    tableRow.addChild(component("div").addClass("grid-cell"));
    
    // Create player hand row
    var playerHandRow = component("div");
    playerHandRow.addClass("row hg-3");

    // Create empty cell 
    playerHandRow.addChild(component("div").addClass("scoreCell").addId("scoreCell-player"))   

    // Create player hand cell
    var playerHandCell = component("div");
    playerHandCell.addClass("row").addId("playerHandCell");

    playerHandRow.addChild(playerHandCell);
    // Create empty cell
    playerHandRow.addChild(component("div").addClass("grid-cell"));


    // Add all rows to the main div
    mainDiv.addChild(row1);
    mainDiv.addChild(tableRow); 
    mainDiv.addChild(playerHandRow);

    return mainDiv;
}
