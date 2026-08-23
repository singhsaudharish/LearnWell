import { CodingCategory } from "../../types/coding";

export const strings: CodingCategory = {
  title: "Strings",

  description:
    "Practice the most frequently asked string interview questions.",

  questions: [
    {
  id: "valid-anagram",

  title: "Valid Anagram",

  difficulty: "Easy",

  problem:
    "Given two strings s and t, return true if t is an anagram of s, and false otherwise. An anagram is a word formed by rearranging the letters of another word using all the original letters exactly once.",

  input: `s = "anagram"
t = "nagaram"`,

  output: `true`,

  explanation:
    "Both strings contain the same characters with the same frequency, so they are valid anagrams.",


  codeSolution: {

    explanation:
      "Use a frequency map to count characters in the first string and decrease the count while checking the second string.",

    time: "O(n)",

    space: "O(1)",


    solutions: [

      {
        language: "cpp",
        code: `#include <unordered_map>
#include <string>
using namespace std;

class Solution {

public:

    bool isAnagram(string s, string t) {

        if(s.length() != t.length())
            return false;


        unordered_map<char,int> count;


        for(char ch : s)
            count[ch]++;


        for(char ch : t) {

            count[ch]--;

            if(count[ch] < 0)
                return false;
        }


        return true;
    }
};`
      },


      {
        language: "java",
        code: `import java.util.HashMap;

class Solution {

    public boolean isAnagram(String s, String t) {

        if(s.length() != t.length())
            return false;


        HashMap<Character,Integer> map =
            new HashMap<>();


        for(char ch : s.toCharArray()) {

            map.put(
                ch,
                map.getOrDefault(ch,0)+1
            );
        }


        for(char ch : t.toCharArray()) {

            if(!map.containsKey(ch))
                return false;


            map.put(
                ch,
                map.get(ch)-1
            );


            if(map.get(ch) < 0)
                return false;
        }


        return true;
    }
}`
      },


      {
        language: "python",
        code: `class Solution:

    def isAnagram(self, s, t):

        if len(s) != len(t):
            return False


        count = {}


        for ch in s:

            count[ch] = count.get(ch,0) + 1


        for ch in t:

            if ch not in count:
                return False


            count[ch] -= 1


            if count[ch] < 0:
                return False


        return True`
      },


      {
        language: "javascript",
        code: `function isAnagram(s, t) {

    if(s.length !== t.length)
        return false;


    let map = new Map();


    for(let ch of s) {

        map.set(
            ch,
            (map.get(ch) || 0) + 1
        );
    }


    for(let ch of t) {

        if(!map.has(ch))
            return false;


        map.set(
            ch,
            map.get(ch)-1
        );


        if(map.get(ch) < 0)
            return false;
    }


    return true;
}`
      }

    ]
  }
}
  ]
};