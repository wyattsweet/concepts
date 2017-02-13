
$('#play').on('click', function() {
  $('#banner').css('display', 'block');

  var playerOne = true;
  $('.row1').on('click', function(e) {
    var columnClass = e.originalEvent.path[0].classList[1]; 

    var element;
    var elementClass;
    for (var i = 0; i < 6; i++) {
      
      var rowNum = 6 - i; 

      element = $('.row' + rowNum + ' .' + columnClass)
      element = element[0];
      elementClass = element.classList;
      var open = true;

      elementClass.forEach(function(element) {
        if (element == 'red' || element == 'yellow') {
          open = false;
        }
      })

      if (open) break;
    }

    if (playerOne == true) {
      $(element).addClass('red');
      checkWinner(element, playerOne);    
      playerOne = false;
    } else if (playerOne == false) {
      $(element).addClass('yellow'); 
      checkWinner(element, playerOne);    
      playerOne = true;
    }

  })
})

function checkWinner(element, playerOne) {

  var win = false;
  var col = element.classList[1];
  var colNum = parseInt(col[col.length-1]);
  var row = $(element).parent()[0].classList[0];
  var rowNum = parseInt(row[row.length-1]);

  var count = 1;
  // check verticle winner
  for (var i = rowNum; i < 6; i++) {
    var classes = $('.row' + i + ' .' + col)[0].classList;

    classes.forEach(function(className) {
      if (playerOne) {
        if (className == 'red') {
          count++;   
        }
      } else {
        if (className == 'yellow') {
          count++;
        }
      }
    })
  }

  // check diagonal winner up
  var currentRow = rowNum;
  for (var i = colNum + 1; i < 5; i++) {
    currentRow = currentRow - 1;
    if (currentRow < 1) break;
    var classes = $('.row' + currentRow + ' .col' + i)[0].classList;
    classes.forEach(function(className) {
      if (playerOne) {
        if (className == 'red') {
          count++;   
        }
      } else {
        if (className == 'yellow') {
          count++;
        }
      }
    })
  }


  // check diagonal winner down
  currentRow = rowNum;
  for (var i = colNum - 1; i > 0; i--) {
    currentRow = currentRow + 1;
    if (currentRow > 6) break;
    var classes = $('.row' + currentRow + ' .col' + i)[0].classList;
    console.log(classes);
  }

  // check horizontal right winner
  // check horizontal left winner
  

  if (count >= 4) alert('Winner!');
}