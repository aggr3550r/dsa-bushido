const longestSubstring = (str) => {
  if (str.length == 1) return str;

  // create frequency counter hashmap
  // this hashmap keeps track of the number of occurences of a character while storing also the new position which a pointer must move to if it happens to find duplicate of said character within current substring
  let frequencyCounter = {};

  // this holds the largest distance of any substring in the given string so far
  let maxDist = 0;

  // this holds the first and last indices of the aforementioned substring(s)
  let maxRange = Array(2);

  // initalize two pointers to keep track of distance
  let i = 0,
    k = 0;

  // if the right counter, k, is at the end of the array and is also not duplicated in the hashmap, then we are done with our iteration
  while (!(k == str.length - 1 && !frequencyCounter[str[k]])) {
    // if a character is being duplicated;
    if (frequencyCounter[str[k]]) {
      console.log(frequencyCounter);
      // use the corresponding value in the hashmap to hold the position in the string that we want to move the left side of our window to which is k + 1

      // we don't need to explicitly use the values as counters because we don't expect them to be greater than 1
      frequencyCounter[str[k]] = k;
      console.log(frequencyCounter);

      // absolute distance between the two pointers at the point of duplication
      let dist = Math.abs(k - i);

      // recalculate maximum distance
      if (maxDist < dist) {
        maxDist = dist;

        // hold the indices that represent this distance
        maxRange = [i, k];
      }

      // the value of k + 1 created earlier to move the window accordingly
      i = frequencyCounter[str[k]];
      k = i;

      // reset frequency counter since we do not care for substrings that contain dups
      frequencyCounter = {};
    } else {
      // if there are no dups, add the character to the hashmap and assign it any value that is simply not nullish/falsy, e.g. 1
      frequencyCounter[str[k]] = 1;

      // move the right pointer
      k++;
    }
  }

  console.log(maxRange);

  // return the part of the string represented by the maxRange tracker, this is the largest substring with non-repeating chars
  return str.substring(maxRange[0], maxRange[1]++);
};

console.log(longestSubstring("pwwkwe"));
