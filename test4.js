/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  // Your Code Here
  var number_miss;
  for (var i = 0; i < 10; i++) {
    if (numbers.indexOf(i) == -1) {
      number_miss = i;
    }
  }
  return number_miss;
}

console.log(result(numbers));
