// brute force approach with time complexity of O(n^2)
const containerWithMostWater = (arr) => {
  let maxArea = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      const height = Math.min(arr[i], arr[j]);
      const width = Math.abs(j - i);

      const currentArea = width * height;
      maxArea = Math.max(currentArea, maxArea);
    }
  }
  return maxArea;
};
console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// two-pointer technique approach with time complexity of O(n)
const containerWithMostFluid = (heights) => {
  let maxArea = 0;
  let left = 0,
    right = heights.length - 1;

  while (left < right) {
    const height = Math.min(heights[left], heights[right]);
    const width = right - left;

    const currentArea = width * height;

    if (heights[left] < heights[right]) left++;
    else if (heights[left] >= heights[right]) right--;

    maxArea = Math.max(currentArea, maxArea);
  }

  return maxArea;
};

console.log(containerWithMostFluid([1, 8, 6, 2, 5, 4, 8, 3, 7]));
