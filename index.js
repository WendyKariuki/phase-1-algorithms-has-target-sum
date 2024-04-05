function hasTargetSum(array, target) {
    // create an object to keep track of all the numbers we've seen
    const seenNumbers = {};
    // iterate over the array of numbers
    for (const number of array) {
      // for the current number, identify a complementary number that adds to our target
      // (for example: if our number is 2, and the target is 5, the complementary number is 3)
      const complement = target - number;
      // check if any of the keys in our object is the complement to the current number
      // if so, return true
      if (seenNumbers[complement]) return true;
      // save the current number as the key on our object so we can check it later against other numbers
      seenNumbers[number] = true;
    }
    // if we reach the end of the array, return false
    return false;
  }

/* 
Write a function called hasTargetSum with two arguments:
an array of integers
a target integer
conditional statement
  Write the Big O time complexity of your function here
*/


//   Add your pseudocode here
// */function hasTargetSum(array, target) {
  // iterates through the array of numbers

// }



/*
  Add written explanation of your solution here
  This function iterates through the array of numbers
  it calculate the difference between the target sum and the current number.
  executes true if conditon is met and false otherwise
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}
 


module.exports = hasTargetSum;
