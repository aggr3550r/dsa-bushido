pub mod two_summers {
    use std::collections::HashMap;

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

        println!("Here's your hashmap: {:?}", map);

        list.sort();

        let mut l = 0;
        let mut r = list.len() - 1;

        let mut sum = list[l] + list[r];

        if sum == target && list.len() == 2{
            let actual_l = l as i32;
            let actual_r = r as i32;

            return vec![actual_l, actual_r];
        }


        println!("Your list: {} {} {}", list[l], list[r], sum);


        while l < r  {

            if sum == target && l != r {

                

                let mut actual_l = l as i32;
                let mut actual_r = r as i32;

                
                if let Some(l_value) = map.get(&list[l]) {

                    // if current value can be doubled to give the target and current value occurs twice in the given list then an array of both occurrences qualify as a valid two sum for the target
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

            println!("Here are the expected indices: {} {}", l, r);

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
}