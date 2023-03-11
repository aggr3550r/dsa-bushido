// iterative soln
const runningSum = (arr) => {
  let running_sum = 0;

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + running_sum;
    running_sum = arr[i];
  }

  return arr;
};

console.log(runningSum([3, 1, 2, 10, 1]));

// possible recursive soln?

const runningSumRecursive = (arr) => {};
