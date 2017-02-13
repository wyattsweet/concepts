
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
  var currentRow = rowNum + 1;

  ////////////////////
  // verticle 
  ///////////////////
  
  for (var i = currentRow; i <= 6; i++) {
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

  if (count >= 4) alert('Winner!');

  ////////////////////
  // Diagonal Right
  ///////////////////

  // diagonal up
  count = 1;
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

  // diagonal down
  currentRow = rowNum;
  for (var i = colNum - 1; i > 0; i--) {
    currentRow = currentRow + 1;
    if (currentRow > 6) break;
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

  if (count >= 4) alert('Winner!');

  ////////////////////
  // Diagonal left 
  ///////////////////

  // diagonal down 
  count = 1;
  var currentRow = rowNum;
  var colCutoff = (colNum + 3 > 7) ? 7 : colNum + 3;

  for (var i = colNum + 1; i <= colCutoff; i++) {
    currentRow = currentRow + 1;
    if (currentRow > 6) break;
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

  // diagonal up
  currentRow = rowNum;
  for (var i = colNum - 1; i > 0; i--) {
    currentRow = currentRow + 1;
    if (currentRow > 6) break;
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

  if (count >= 4) alert('Winner!');

  ////////////////////
  // Horizontal Winner
  ///////////////////

  // horizontal right
  count = 1;
  var currentRow = rowNum;
  var colCutoff = colNum + 3 > 7 ? 7 : colNum + 3; 
  for (var i = colNum + 1; i <= colCutoff; i++) {
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

  // horizontal left 
  currentRow = rowNum;
  var colCutoff = colNum - 3 > 0 ? colNum - 3 : 1;
  for (var i = colNum - 1; i >= colCutoff; i--) {
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

  if (count >= 4) alert('Winner!');
}
