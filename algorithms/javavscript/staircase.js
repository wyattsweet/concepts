var n = 1;

for (var i = 1; i <= n; i++) {
  if (i < n) {
    var string = ' ';
  } else {
    var string = '#';
  }
  for (var a = 1; a < n; a++) {
    if (a < n - i) {
      string = string + ' ';
    } else {
      string = string + '#';
    }
  }
  console.log(string);
}

