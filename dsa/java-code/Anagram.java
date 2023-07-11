package dsa;
import java.util.*;


class AnagramInAction {
    public static void main(String[] args) {
        boolean anagramResult = Anagram.anagram("anagram", "margana");

        System.out.print(anagramResult);
    }
}

// implementation of anagram algo in Java(verbose as shit I know)
public class Anagram {
    public static boolean anagram(String str1, String str2) {
        if (str1.length() != str2.length()) {
            return false;
        }

        HashMap<Character, Integer> frequencyCounter1 = new HashMap<Character, Integer>();

        HashMap<Character, Integer> frequencyCounter2 = new HashMap<Character, Integer>();

        var tokenLength = str1.length();



        for(int i = 0; i < tokenLength; i++) {
            if (frequencyCounter1.containsKey(str1.charAt((i)))) {
                frequencyCounter1.put(str1.charAt(i), frequencyCounter1.get(str1.charAt(i)) +1);
            } else {
                frequencyCounter1.put(str1.charAt(i),1);
            }
        }

        for(int j = 0; j < tokenLength; j++) {
            if (frequencyCounter2.containsKey(str2.charAt((j)))) {
                frequencyCounter2.put(str2.charAt(j), frequencyCounter2.get(str2.charAt(j)) +1);
            } else {
                frequencyCounter2.put(str2.charAt(j),1);
            }
        }

        // System.out.print(frequencyCounter1);
        // System.out.print(frequencyCounter2);




        for (Map.Entry<Character, Integer> mapElement: frequencyCounter1.entrySet()) {
            if (!(frequencyCounter2.containsKey(mapElement.getKey()))) {
                return false;
            }

            if ( mapElement.getValue() != frequencyCounter2.get(mapElement.getKey())) {
                return false;
            }
        }
        return true;
    }
}
