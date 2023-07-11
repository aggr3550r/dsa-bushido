const threeSum = (array) => {
  // sort array so we can apply binary search
  const sortedArray = array.sort((a, b) => a - b);

  const target = 0;

  // use set to store valid triplets
  let resultSet = [];

  // establish adjacent pointers
  let left = 0,
    right = sortedArray.length - 1;

  // implementing binary search
  while (left < right) {
    const complement = target - (sortedArray[left] + sortedArray[right]);
    const middle = Math.ceil((left + right) / 2);
    // const triSum = sortedArray[left] + sortedArray[right] + sortedArray[middle];

    console.log(sortedArray);

    if (sortedArray[middle] == complement) {
      const setEntry = [
        sortedArray[left],
        sortedArray[right],
        sortedArray[middle],
      ];
      console.log(setEntry);
      continue;
    } else if (middle < complement) {
      left++;
    } else if (middle > complement) {
      right--;
    }
  }
  return resultSet;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
