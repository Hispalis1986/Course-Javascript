///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app 
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Real Madrid (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Real Madrid (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Rodrygo', 'Mariano' and 'Ronaldo'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK 😀
*/

const game = {
  team1: 'Real Madrid',
  team2: 'FC Barcelona',
  players: [
    [
      'Courtois',
      'Carvajal',
      'Alaba',
      'Militao',
      'Mendy',
      'Modric',
      'tchoumonei',
      'Kross',
      'Valverde',
      'Benzema',
      'Vini Jr',
    ],
    [
      'Ter Stegen',
      'Jordi Alba',
      'Pique',
      'Eric Garcia',
      'Sergi Roberto',
      'Frenkie de Jong',
      'Pedri',
      'Gavi',
      'Raphinha',
      'Ansu Fati',
      'Lewandowski',
    ],
  ],
  score: '4:0',
  scored: ['Benzema', 'Vini Jr', 'Benzema', 'Valverde'],
  date: 'Oct 16, 2022',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1
console.log('---- Players ----');
const [players1, players2] = game.players;
console.log(players1, players2);

// 2
console.log('---- GK, Players Team 1 ----');
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3
console.log('---- All Players ----');
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4
console.log('---- Players + Suplentes ----');
const players1Final = [...players1, 'Nacho', 'Mariano', 'Hazard'];
console.log(players1Final);

// 5
console.log('---- Odds ----');
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6
console.log('---- Players Scored ----');
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored.`);
};
printGoals(...game.scored);

// 7
console.log('---- Winner ----');
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');
