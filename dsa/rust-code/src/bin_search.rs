pub mod bin_search_algo {
    pub fn binary_search(mut list: Vec<i32>, target: i32) -> usize {

        // sort the list in preparation for binary search
        list.sort();


        let mut left = 0;

        let mut right = list.len() - 1;

        let mut mid = (left + right) / 2;


        while left <= right {

            
            if list[mid] == target {
                return mid;
            } else if list[mid] < target {
                left = mid + 1;
            } else if list[mid] > target {
                right = mid - 1;
            }


            mid = (left + right) / 2;

        }

        usize::MAX

    }
}