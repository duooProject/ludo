// function dice() {
//   return Math.floor(Math.random() * 6) + 1;
// }
// function move(chance = 0) {
//   var step = dice();
//   if (step === 6) move(chance + 1);
//   else if (chance === 3) {
//     step = 0;
//     return;
//   }
//   this.step += step;
//   this.soldirs.renderSoldier();
// }
// function killed() {
//   this.isAlive = false;
//   this.step = 0;
//   this.soldirs.renderSoldier();
// }

// function soldirs(color) {
//   return {
//     color: color,
//     step: 0,
//     isAlive: false,
//     move: move,
//     killed: killed,
//   };
// }
// function botPlayer(color) {
//   return {
//     color: color,
//     soldirs: [],
//   };
// }
// function player(color) {
//   return {
//     color: color,
//     soldirs: [],
//   };
// }
// function startGame() {
//     var colors = ["red", "blue", "green", "yellow"]
//     for (var i = 0; i < this.playerCount; i++) 
//     {
//         var playerColor = colors[i];
//         var newPlayer = player(playerColor);
//         for (var j = 0; j < 4; j++) {
//             newPlayer.soldirs.push(soldirs(playerColor));
//         }
//         this.players.push(newPlayer);

//     }
// }

// function Game(playerCount) {
//   return {
//     players: [],

//     playerCount: playerCount,
//     startGame: startGame,
//     resetGame: resetGame,
//   };
// }