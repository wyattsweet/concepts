
function fac (num) {
  if (num < 2) {
    return 1
  }

  return num * fac(num - 1);
}


module.exports = fac;
