/*Create a function that can take a start point, end point,
and skip amount, to print all numbers in the range.
printRange(2, 10, 2);
2
4
6
8
*/
function printRange(startPoint, endPoint, skipAmount) {

  skipAmount = skipAmount || 1;

  for (var i = startPoint; i < endPoint; i = (i + skipAmount)) {

    console.log(i);
  }
  console.log("startPoint = " + startPoint + ". \n endPoint = " + endPoint + ". \n skipAmount =" + skipAmount);

}

printRange(2, 10, 1);
