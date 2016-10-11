// games list
var games = [
  {
    name: 'alien-isolation',
    os: 'xbox',
    model: 'xbox-one',
    price: 29.90
  },
  {
    name: 'assassins-creed',
    os: 'xbox',
    model: 'xbox-one',
    price: 49.90
  },
  {
    name: 'battlefield-4',
    os: 'ps',
    model: 'ps4',
    price: 39.90
  },
  {
    name: 'call-of-duty',
    os: 'ps',
    model: 'ps4',
    price: 45.00
  },
  {
    name: 'fifa-15',
    os: 'ps',
    model: 'ps4',
    price: 49.00
  },
  {
    name: 'just-dance-2015',
    os: 'xbox',
    model: 'xbox-one',
    price: 37.00
  },
  {
    name: 'sports-champions',
    os: 'ps',
    model: 'ps3',
    price: 9.90
  },
  {
    name: 'two-souls',
    os: 'ps',
    model: 'ps3',
    price: 15.90
  },
  {
    name: 'mafia-2',
    os: 'xbox',
    model: 'xbox-360',
    price: 15.90
  },
  {
    name: 'guitar-hero',
    os: 'xbox',
    model: 'xbox-360',
    price: 5.90
  }
]

// consoles list
var consoles = [
  {
    model: 'ps3',
    price: 100
  },
  {
    model: 'ps4',
    price: 200
  },
  {
    model: 'xbox-360',
    price: 300
  },
  {
    model: 'xbox-one',
    price: 400
  },
]

// consoles
var consolePicture = $('#console-picture');
var consoleType = $('#console-type');

// games
var gamePicture = $('#game-picture');
var gameType = $('#game-type');

// price
var showPrice = $('#show-price');

for (var i = 0; i < consoles.length; i++) {
  var options = "<option value=" + consoles[i].model + ">" + consoles[i].model + "</option>"
  consoleType.append(options)
}

function selectGames (model) {
  gameType.html("<option>Select a Game</option>")
  for (var i = 0; i < games.length; i++) {
    if (model === games[i].model) {
      var options = "<option value=" + games[i].name + ">" + games[i].name + "</option>"
      gameType.append(options)
    }
  }
}

consoleType.change(function() {
  if ($(this).val() === $(this).val()) {
    consolePicture.attr("class", $(this).val())
    selectGames($(this).val())
} else {
    consolePicture.attr("class", "")
  }
})

gameType.change(function() {
  if ($(this).val() === $(this).val()) {
    gamePicture.attr("class", $(this).val())
  } else {
    gamePicture.attr("class", "")
  }
  calculate();
});

function calculate () {
  if (gameType.val() === "") {
    return
  } else {
    var model = consoleType.val()
    var game = gameType.val()
    var result = addition(findModelPrice(model), findGamePrice(game))
    showPrice.html("The price of both is: $" + result)
  }
}

function addition(x, y) {
  return (x + y).toFixed(2);
}

function findModelPrice(model) {
  for (var i = 0; i < consoles.length; i++) {
    if (model === consoles[i].model) {
      var getModelPrice = parseFloat(consoles[i].price).toFixed(2)
      return parseFloat(getModelPrice)
    }
  }
}

function findGamePrice(game) {
  for (var i = 0; i < games.length; i++) {
    if (game === games[i].name) {
      var getGamePrice = parseFloat(games[i].price).toFixed(2)
      return parseFloat(getGamePrice)
    }
  }
}
