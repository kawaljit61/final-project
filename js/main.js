// consoles
var consolePicture = $('#console-picture');
var consoleType = $('#console-type');
var consoles = ["ps3", "ps4",  "xbox-360", "xbox-one"];

// games
var gamePicture = $('#game-picture');
var gameType = $('#game-type');
var games = ["alien-isolation", "assassins-creed", "battlefield-4"];
var gamePrice = [12, 24, 36]

var showPrice = $('#show-price');

$.each(consoles, function(index, value){
  var options = "<option value=" + value + ">" + value + "</option>"
  consoleType.append(options)
})

$.each(games, function(index, value){
  var options = "<option value=" + value + ">" + value + "</option>"
  gameType.append(options)
})

consoleType.change(function() {
  if ($(this).val() === "ps3") {
    consolePicture.attr("class", "ps3")
    $('.xbox-games').hide();
    $('.ps-games').show();

  } else if ($(this).val() === "ps4") {
    consolePicture.attr("class", "ps4")
    $('.xbox-games').hide();
    $('.ps-games').show();

  } else if ($(this).val() === "xbox-360") {
    consolePicture.attr("class", "xbox-360")
    $('.xbox-games').show();
    $('.ps-games').hide();

  } else if ($(this).val() === "xbox-one") {
    consolePicture.attr("class", "xbox-one")
    $('.xbox-games').show();
    $('.ps-games').hide();

  } else {
    consolePicture.attr("class", "")
    $('.xbox-games').hide();
    $('.ps-games').hide();
  }
})

gameType.change(function() {
  if ($(this).val() === "alien-isolation") {
    gamePicture.attr("class", "alien-isolation")
  } else if ($(this).val() === "assassins-creed") {
    gamePicture.attr("class", "assassins-creed")
  } else if ($(this).val() === "battlefield-4") {
    gamePicture.attr("class", "battlefield-4")
  } else {
    gamePicture.attr("class", "")
  }

  calculate();
});

function calculate () {
  if (gameType.val() === "") {
    return
  } else {
    var store = gameType.val()
    var getPrice = games.indexOf(store)
    showPrice.html("The price of this game is: " + "$" + gamePrice[getPrice])
  }
}
