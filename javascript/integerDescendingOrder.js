function descendingOrder(n) {
  n = n + "";
  var array = n.split("");
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  var result = array.reverse().join("");
  return parseInt(result);
}

var integerResult = descendingOrder(12283923892);

console.log(integerResult);
