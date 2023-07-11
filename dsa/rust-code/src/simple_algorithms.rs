pub mod my_algos {
    use std::collections::HashMap;

    // this solution uses binary search to solve the "two sum" problem
    pub fn two_sum_fn(mut list: Vec<i32>, target: i32) -> Vec<i32> {
    
        let mut map: HashMap<i32, Vec<i32>> = Default::default();

        // if key exists in map, update it by pushing the current index into its value vector else create the key and push the current index into its value vector
        for i in 0..list.len() {
            if let Some(values) = map.get_mut(&list[i]) {
                values.push(i as i32);
            } else {
                map.insert(list[i], vec![i as i32]);
            }
        }

        list.sort();

        let mut l = 0;
        let mut r = list.len() - 1;

        let mut sum = list[l] + list[r];

        if sum == target && list.len() == 2{
            let actual_l = l as i32;
            let actual_r = r as i32;

            return vec![actual_l, actual_r];
        }

        while l < r  {

            if sum == target && l != r {

                let mut actual_l = l as i32;
                let mut actual_r = r as i32;
  
                if let Some(l_value) = map.get(&list[l]) {
                   // if current value can be doubled to give the target and current value occurs twice in the given list then an array of both occurrences qualifies as a valid two sum for the target
                    if list[l]*2 == target && l_value.len() == 2 {
                        actual_l = l_value[0];
                        actual_r = l_value[1];
                    } else if let Some(r_value) = map.get(&list[r]) {
                         actual_l = l_value[0];
                         actual_r = r_value[0];
                    }
                }
                  return vec![actual_l, actual_r]
            }

            if sum < target {
                l = l + 1;
            } else if sum > target {
                r = r - 1;
            } 

            sum = list[l] + list[r];


        }

        // We return this in the event that there is no two sum for our given target. The rationale for returning our solution in this manner is that the problem states we should not use the same index twice and so when we see that our solution is this, it indicates that there is no two sum found and it doesn't matter that we have violated a rule to prove that.
        vec![-1, -1]
    }



    pub fn longest_substr(input: String) -> i32 {
        let mut freq_count: HashMap<&str, i32> = Default::default();

        let mut str_vector: Vec<&str> = input.split("").collect();

        str_vector.remove(0);
        str_vector.pop();

        if str_vector.len() < 1 {
            return 0;
         }

        let mut l = 0;
        let mut r = 0;

        let mut max_length: usize = 0;


        while r <= str_vector.len() - 1 {

            if let Some(_value) = freq_count.get_mut(&str_vector[r]) {
                freq_count.clear();
                l += 1;
                r = l;
            } else {
                freq_count.insert(&str_vector[r], 1);
                r += 1;
            }

            let curr_length = r - l;

            max_length = std::cmp::max(max_length, curr_length);

        }

        max_length as i32

    }



    // an optimized version of the two sum algorithm implemented earlier
    pub fn two_sum_optim(list: Vec<i32>, target: i32) -> Vec<i32> {
        let mut map: HashMap<i32, i32> = Default::default();

        for i in 0..list.len() {
            let complement = target - list[i];

            if let Some(value) = map.get_mut(&complement) {
                return vec![*value, i as i32];
            } else {
                map.insert(list[i], i as i32);
            }

        }
        vec![-1, -1]
    }
}