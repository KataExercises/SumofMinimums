// Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.
// For Example:
// [
//   [1, 2, 3, 4, 5],       // minimum value of row is 1
//   [5, 6, 7, 8, 9],       // minimum value of row is 5
//   [20, 21, 34, 56, 100]  // minimum value of row is 20
// ]

// So, the function should return 26 because sum of minimums is as 1 + 5 + 20 = 26
// Note: You will be always given non-empty array containing Positive value

//https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript

function sumOfMinimums(arr) {
  var sum = 0; //empty array
  // your code here
  for (i = 0; i < arr.length; i++) {
    //var newArr  = [...arr[i]].sort((a,b)=> a-b);
    var newArr = [...arr[i].sort((a, b) => a - b)];
    console.log(newArr);
    sum = sum + newArr[0]; // sum = 26
  }
  return sum;
}
