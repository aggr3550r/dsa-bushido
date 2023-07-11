use crate::simple_algorithms::my_algos::{two_sum_fn, longest_substr, two_sum_optim};

mod simple_algorithms;

fn main() {
    // two_sum
    let list = vec![1, 2, 6, 8, 34, 6, 9];
    let target = 14;
    let result = two_sum_optim(list, target);
    println!("Your solution: {:?}", result);

    // longest_substr
    // let string = String::from("dvdf");
    // let result = longest_substr(string);
    // println!("Length of longest substring with non-repeating characters: {:?}", result);
}

