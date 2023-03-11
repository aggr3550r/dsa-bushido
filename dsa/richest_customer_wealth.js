// subroutine to sum up all the elements in an array using reduce()
const sum = (arr) => {
  const initialVal = 0;
  const arrSum = arr.reduce(
    (accumulator, currValue) => accumulator + currValue,
    initialVal
  );

  return arrSum;
};

// main routine that leverages subroutine to find the subroutine that gives the highest aggregate
const findRichestCustomer = (arr) => {
  let maxSum = 0;

  arr.forEach((element) => {
    const arrSum = sum(element);
    maxSum = Math.max(arrSum, maxSum);
  });

  return maxSum;
};

console.log(
  findRichestCustomer([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
