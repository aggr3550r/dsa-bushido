const longestSubstring = (str) => {
  if (str.length == 1) return str;
  let frequencyCounter = {};

  let maxDist = 0;

  let maxRange = Array(2);

  let i = 0,
    k = 0;

  while (!(k == str.length - 1 && !frequencyCounter[str[k]])) {
    if (frequencyCounter[str[k]]) {
      frequencyCounter[str[k]] = k;
      let dist = Math.abs(k - i);
      if (maxDist < dist) {
        maxDist = dist;
        maxRange = [i, k];
      }
      i = frequencyCounter[str[k]];
      k = i;
      frequencyCounter = {};
    } else {
      frequencyCounter[str[k]] = 1;
      k++;
    }
  }

  console.log(maxDist);

  return str.substring(maxRange[0], maxRange[1]++);
};

console.log(longestSubstring("pwwkew"));
