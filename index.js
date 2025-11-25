function toggleBubble(bubble) {
  var allBubbles = document.querySelectorAll('.popup');

  for (var i = 0; i < allBubbles.length; i++) {
    if (allBubbles[i] !== bubble) {
      allBubbles[i].classList.remove('show');
    }
  }

  bubble.classList.toggle('show');
}

var cashier = document.getElementById('cashier');
var kidRack = document.getElementById('kidRack');
var roundRack = document.getElementById('roundRack');

var cashierBubble = document.getElementById('cashierBubble');
var kidRackBubble = document.getElementById('kidRackBubble');
var roundRackBubble = document.getElementById('roundRackBubble');

cashier.addEventListener('click', function () {
  toggleBubble(cashierBubble);
});

kidRack.addEventListener('click', function () {
  toggleBubble(kidRackBubble);
});

roundRack.addEventListener('click', function () {
  toggleBubble(roundRackBubble);
});

document.addEventListener('click', function (event) {
  var isItem = event.target.closest('.item');
  var isPopup = event.target.closest('.popup');

  if (!isItem && !isPopup) {
    var allBubbles = document.querySelectorAll('.popup');
    for (var i = 0; i < allBubbles.length; i++) {
      allBubbles[i].classList.remove('show');
    }
  }
});
