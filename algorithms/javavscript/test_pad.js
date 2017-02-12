var n = 3,
    k = 2,
    q = 3;

var a = [1, 2, 3];

for (var i = 0; i < k; i++) {
  var swap = a[a.length - 1];
  a.unshift(swap);
  a.pop();
}

a.forEach(function(element) {
  console.log(element);
})
