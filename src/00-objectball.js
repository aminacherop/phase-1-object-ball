function gameObject(){
    return{
        home:{
            teamName : "Broolyn Nets",
            colors : ["Black","White",],
            players :{
                "Alan Anderson":{
                    number : 0,
                    shoe: 16,
                    points: 22,
                    rebounds :12,
                    assists :12,
                    steals : 3,
                    blocks : 1,
                    slamDunks : 1
                },
                "Reggie Evans" : {
                    number : 30,
                    shoe :14,
                    points : 12,
                    rebounds :12,
                    assists:12,
                    steals :12,
                    blocks :12,
                    slamDunks :7
                },
                "Brook Lopez":{
                    number : 11,
                    shoe :17,
                    points : 17,
                    rebounds :19,
                    assists : 10,
                    steals :3,
                    blocks :1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number : 1,
                    shoe :19,
                    points : 26,
                    rebounds :12,
                    assists :6,
                    steals :3,
                    blocks :8,
                    slamDunks :5
                },
                "Jason Terry" :{
                    number : 31,
                    shoe: 15,
                    points: 19,
                    rebounds :2,
                    assists :2,
                    steals : 4,
                    blocks : 11,
                    slamDunks : 1

                }

            }
        },

        away:{
            teamName:"Charlotte Hornets",
            colors :["Turquoise, Purple"],
            players:{
                "Jeff Andrien":{
                    number : 4,
                    shoe: 18,
                    points: 10,
                    rebounds :1,
                    assists :1,
                    steals : 2,
                    blocks : 7,
                    slamDunks : 2
                },
                "Bismark Biyombo":{
                    number : 0,
                    shoe: 16,
                    points: 12,
                    rebounds :4,
                    assists :7,
                    steals : 7,
                    blocks : 15,
                    slamDunks : 10

                },
                "DeSagna Diop":{
                    number : 2,
                    shoe: 14,
                    points: 24,
                    rebounds :12,
                    assists :12,
                    steals : 4,
                    blocks : 5,
                    slamDunks : 5
                    
                },
                "Ben Gordon":{
                    number : 8,
                    shoe: 15,
                    points: 33,
                    rebounds :3,
                    assists :2,
                    steals : 1,
                    blocks : 1,
                    slamDunks : 0

                },
                "Brendan Haywood":{
                    number : 33,
                    shoe: 15,
                    points: 6,
                    rebounds :12,
                    assists :12,
                    steals : 22,
                    blocks : 5,
                    slamDunks : 12

                },

                
            }
        }
    }
}

console.log(gameObject());


function numPointsScored(playerName){
  const game  = gameObject();
  const teams = [`home`, `away`];
  for (const team of teams){
    if (playerName in game[team].players){
      return game[team].players[playerName].points;
    }
  }
  return `players "${playerName}" not found`;

}
console.log(numPointsScored("Jason Terry"));
console.log(numPointsScored("Brendan Haywood"));

function shoesize(playerName){
  const game = gameObject()
  const teams = [`home`, `away`];
  for (const team of teams){
    if (playerName in game[team].players){
      return game [team].players[playerName].shoe;
    }
  }
  return`players "${playerName}" not found`;

}

console.log(shoesize(`Mason Plumlee`));
console.log(shoesize(`Ben Gordon`));

function teamColors(teamName){
  const game = gameObject();
    if (game.home.teamName === teamName){
      return game.home.colors;
    } else if(game.away.teamName === teamName){
      return game.away.colors;
    }else{
      return `Team "${teamName} not found`;
    }
  }
  console.log(teamColors(`Broolyn Nets`));
  console.log(teamColors(`Charlotte Hornets`));

  function teamNames(){
    const game = gameObject();
    const names = [
      game.home.teamName,
      game.away.teamName,
    ];
    return names;
  }
  console.log(teamNames());

  function playerNumbers(teamName){
    const game = gameObject();
    let team;
    if(game.home.teamName === teamName){
      team = game.home;
    }else if (game.away.teamName === teamName){
      team = game.away;
    }else {
      return `Team "${teamName}" not found`;
    }
    const numbers = [];
    for (const playerName in team.players){
      numbers.push(team.players[playerName].number);
    }
    return numbers
  }
  console.log(playerNumbers(`Broolyn Nets`));
  console.log(playerNumbers(`Charlotte Hornets`));


  function playerStats (playerName){
    const game = gameObject();
    const teams = [`home`,`away`];
    for (const team of teams){
      if(playerName in game[team].players){
        return game [team].players[playerName];
      }
    }
    return `player "${playerName}" not found`;
  }
  console.log(playerStats("Brook Lopez"));

  function bigShoeRebounds(){
    const game = gameObject();
    let largestShoe = 0;
    let playerWithLargestShoe = null;
    const teams = [`home`,`away`];
    for (const team of teams ){
      const players = game[team].players;

      for (const playerName in players){
        const player = players[playerName];
        if (player.shoe > largestShoe){
          largestShoe = player.shoe;
          playerWithLargestShoe = player;
        }
      }
    }
    if (playerWithLargestShoe){
      return playerWithLargestShoe.rebounds;
    }else {
      return "no players found";
    }

  }
  console.log(bigShoeRebounds());


  function mostPointsScored(){
    const game = gameObject();
    let mostPoints = 0;
    let playerWithMostPoints = null;
    for (let player in game.home.players){
      if(game.home.players[player].points > mostPoints){
        mostPoints = game.home.players[player].points;
        playerWithMostPoints = player;
      }
    }
    for (let player in game.away.players){
      if( game.away.players[player].points > mostPoints){
        mostPoints = game.away.players[player].points;
        playerWithMostPoints = player;
      }
    }
    return playerWithMostPoints;
  }
  console.log(mostPointsScored())


  function winningTeam(){
    const game = gameObject();
    let homeTeamPoints = 0;
    let awayTeanPoints = 0;
    for (let player in game.home.players){
      homeTeamPoints += game.home.players[player].points;
    }
    for (let player in game.away.players){
      awayTeanPoints += game.away.players[player].points;
  }
  if (homeTeamPoints > awayTeanPoints){
    return game.home.teamName;
  }else{
    return game.away.teamName;
  }
}
console.log(winningTeam());

function playerWithLongestName (){
  const game =gameObject();
  let longestName = "";
  for (let player in game.home.players){
    if (player.length > longestName.length){
      longestName = player;
    }
  }
  for (let player in game.away.players){
    if(player.length > longestName.length){
      longestName = player;
    }
  }
  return longestName;
  }
  console.log(playerWithLongestName());

  function doesLongNameStealATon(){
    const game = gameObject();
    const playerWithLongest = playerWithLongestName();
    let mostSteals = 0;
    let playerWithMostSteals = null;
    for (let player in game.home.players){
      if (game.home.players[player].steals > mostSteals){
        mostSteals = game.home.players[player].steals;
        playerWithMostSteals = player;
      }
    }
    for (let player in game.away.players){
      if (game.away.players[player].steals > mostSteals){
        mostSteals = game.away.players[player].steals;
        playerWithMostSteals = player;
      }
  }
  return playerWithLongest === playerWithMostSteals;
}
console.log(doesLongNameStealATon());

  








  


