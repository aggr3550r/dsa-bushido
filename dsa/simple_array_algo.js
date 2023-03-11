/* problem requires us to take two given arrays, arr1 and arr2 and assert whether arr2 contains exactly one occurrence of the square of each element in arr1, we then return true or false in accordance with the outcome of our assertion */
function assertRequirement(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let truthFlag = false;
  for (let i = 0; i < arr1.length; i++) {
    let frequencyIsBalanced = checkFrequency(arr1[i], arr1, arr2);

    if (frequencyIsBalanced) {
      truthFlag = true;
    } else {
      truthFlag = false;
      return truthFlag;
    }
  }
  return truthFlag;
}

function checkFrequency(element, arr1, arr2) {
  arr1 = arr1.filter((x) => x == element);
  arr2 = arr2.filter((x) => x == Math.pow(element, 2));

  return arr1.length === arr2.length;
}

console.log(assertRequirement([5, 6, 7], [25, 36, 49]));

// for a more efficient solution using hashmaps with linear time complexity

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  // initialize two frequency counters
  // one to count the frequency of occurence of the elements in arr1 and another to apply the same procedure to arr2
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // generate the data for both frequency counters
  for (let elem of arr1) {
    frequencyCounter1[elem] = (frequencyCounter1[elem] || 0) + 1;
  }
  for (let elem of arr2) {
    frequencyCounter2[elem] = (frequencyCounter2[elem] || 0) + 1;
  }

  console.log(frequencyCounter1);

  // once we have both frequency counters and we are sure they are both accurate, we assert two things

  //1. each key in frequencyCounter1 must have a corresponding square of itself in frequencyCounter2

  //2. each value in frequencyCounter1 must match the value of its corresponding squared key in frequencyCounter2

  for (let key in frequencyCounter1) {
    if (!frequencyCounter2[key ** 2]) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
      return false;
    }
  }

  return true;
}

console.log(same([5, 6, 7], [25, 36, 49]));
