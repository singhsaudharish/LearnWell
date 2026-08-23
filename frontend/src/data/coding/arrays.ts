import { CodingCategory } from "../../types/coding";

export const arrays: CodingCategory = {
  title: "Arrays",

  description:
    "Practice the most frequently asked array interview questions.",

  questions: [
    {
  id: "two-sum",

  title: "Two Sum",

  difficulty: "Easy",

  problem:
    "Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target. You may assume that each input has exactly one solution, and you may not use the same element twice.",

  input: `nums = [2, 7, 11, 15]
target = 9`,

  output: `[0, 1]`,

  explanation:
    "The numbers 2 and 7 add up to 9. Their indices are 0 and 1, so the answer is [0, 1].",

  codeSolution: {
    explanation:
      "Use a Hash Map to store previously visited numbers and their indices. For each element, check if the complement (target - current number) already exists in the map.",

    time: "O(n)",

    space: "O(n)",

    solutions: [
      {
        language: "cpp",
        code: `#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {

        unordered_map<int, int> mp;

        for (int i = 0; i < nums.size(); i++) {

            int complement = target - nums[i];

            if (mp.find(complement) != mp.end()) {
                return {mp[complement], i};
            }

            mp[nums[i]] = i;
        }

        return {};
    }
};`
      },

      {
        language: "java",
        code: `import java.util.HashMap;

class Solution {

    public int[] twoSum(int[] nums, int target) {

        HashMap<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {

            int complement = target - nums[i];

            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }

            map.put(nums[i], i);
        }

        return new int[]{};
    }
}`
      },

      {
        language: "python",
        code: `class Solution:

    def twoSum(self, nums, target):

        lookup = {}

        for i, num in enumerate(nums):

            complement = target - num

            if complement in lookup:
                return [lookup[complement], i]

            lookup[num] = i`
      },

      {
        language: "javascript",
        code: `function twoSum(nums, target) {

    const map = new Map();

    for (let i = 0; i < nums.length; i++) {

        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }

    return [];
}`
      }
    ]
  }
},
{
  id: "contains-duplicate",

  title: "Contains Duplicate",

  difficulty: "Easy",

  problem:
    "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",

  input: `nums = [1, 2, 3, 1]`,

  output: `true`,

  explanation:
    "The number 1 appears twice in the array, so the answer is true.",

  codeSolution: {
    explanation:
      "Use a Hash Set to keep track of visited elements. If an element already exists in the set, a duplicate has been found.",

    time: "O(n)",

    space: "O(n)",

    solutions: [
      {
        language: "cpp",
        code: `#include <vector>
#include <unordered_set>
using namespace std;

class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {

        unordered_set<int> seen;

        for (int num : nums) {

            if (seen.count(num))
                return true;

            seen.insert(num);
        }

        return false;
    }
};`
      },

      {
        language: "java",
        code: `import java.util.HashSet;

class Solution {

    public boolean containsDuplicate(int[] nums) {

        HashSet<Integer> set = new HashSet<>();

        for (int num : nums) {

            if (set.contains(num))
                return true;

            set.add(num);
        }

        return false;
    }
}`
      },

      {
        language: "python",
        code: `class Solution:

    def containsDuplicate(self, nums):

        seen = set()

        for num in nums:

            if num in seen:
                return True

            seen.add(num)

        return False`
      },

      {
        language: "javascript",
        code: `function containsDuplicate(nums) {

    const seen = new Set();

    for (const num of nums) {

        if (seen.has(num))
            return true;

        seen.add(num);
    }

    return false;
}`
      }
    ]
  }
},
{
  id: "best-time-to-buy-and-sell-stock",

  title: "Best Time to Buy and Sell Stock",

  difficulty: "Easy",

  problem:
    "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different future day to sell that stock. Return the maximum profit you can achieve. If no profit can be achieved, return 0.",

  input: `prices = [7,1,5,3,6,4]`,

  output: `5`,

  explanation:
    "Buy on day 2 when the price is 1 and sell on day 5 when the price is 6. The maximum profit is 6 - 1 = 5.",

  codeSolution: {
    explanation:
      "Traverse the array once while keeping track of the minimum stock price seen so far. For each day, calculate the profit if the stock were sold on that day and update the maximum profit.",

    time: "O(n)",

    space: "O(1)",

    solutions: [
      {
        language: "cpp",
        code: `#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maxProfit(vector<int>& prices) {

        int minPrice = prices[0];
        int maxProfit = 0;

        for (int i = 1; i < prices.size(); i++) {

            minPrice = min(minPrice, prices[i]);

            maxProfit = max(maxProfit, prices[i] - minPrice);
        }

        return maxProfit;
    }
};`
      },

      {
        language: "java",
        code: `class Solution {

    public int maxProfit(int[] prices) {

        int minPrice = prices[0];
        int maxProfit = 0;

        for (int i = 1; i < prices.length; i++) {

            minPrice = Math.min(minPrice, prices[i]);

            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }

        return maxProfit;
    }
}`
      },

      {
        language: "python",
        code: `class Solution:

    def maxProfit(self, prices):

        min_price = prices[0]
        max_profit = 0

        for price in prices[1:]:

            min_price = min(min_price, price)

            max_profit = max(max_profit, price - min_price)

        return max_profit`
      },

      {
        language: "javascript",
        code: `function maxProfit(prices) {

    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {

        minPrice = Math.min(minPrice, prices[i]);

        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }

    return maxProfit;
}`
      }
    ]
  }
},{
  id: "maximum-subarray",

  title: "Maximum Subarray",

  difficulty: "Medium",

  problem:
    "Given an integer array nums, find the subarray with the largest sum, and return its sum.",

  input: `nums = [-2,1,-3,4,-1,2,1,-5,4]`,

  output: `6`,

  explanation:
    "The subarray [4,-1,2,1] has the largest sum: 4 + (-1) + 2 + 1 = 6.",

  codeSolution: {
    explanation:
      "Use Kadane's Algorithm. Keep track of the current subarray sum and the maximum sum found so far. If the current sum becomes negative, restart the subarray from the next element.",

    time: "O(n)",

    space: "O(1)",

    solutions: [

      {
        language: "cpp",
        code: `#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maxSubArray(vector<int>& nums) {

        int currentSum = nums[0];
        int maxSum = nums[0];

        for(int i = 1; i < nums.size(); i++) {

            currentSum = max(nums[i], currentSum + nums[i]);

            maxSum = max(maxSum, currentSum);
        }

        return maxSum;
    }
};`
      },


      {
        language: "java",
        code: `class Solution {

    public int maxSubArray(int[] nums) {

        int currentSum = nums[0];
        int maxSum = nums[0];

        for(int i = 1; i < nums.length; i++) {

            currentSum = Math.max(
                nums[i],
                currentSum + nums[i]
            );

            maxSum = Math.max(
                maxSum,
                currentSum
            );
        }

        return maxSum;
    }
}`
      },


      {
        language: "python",
        code: `class Solution:

    def maxSubArray(self, nums):

        current_sum = nums[0]
        max_sum = nums[0]

        for num in nums[1:]:

            current_sum = max(
                num,
                current_sum + num
            )

            max_sum = max(
                max_sum,
                current_sum
            )

        return max_sum`
      },


      {
        language: "javascript",
        code: `function maxSubArray(nums) {

    let currentSum = nums[0];
    let maxSum = nums[0];

    for(let i = 1; i < nums.length; i++) {

        currentSum = Math.max(
            nums[i],
            currentSum + nums[i]
        );

        maxSum = Math.max(
            maxSum,
            currentSum
        );
    }

    return maxSum;
}`
      }

    ]
  }
},{
  id: "move-zeroes",

  title: "Move Zeroes",

  difficulty: "Easy",

  problem:
    "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. The operation must be done in-place without making a copy of the array.",

  input: `nums = [0,1,0,3,12]`,

  output: `[1,3,12,0,0]`,

  explanation:
    "Move all non-zero elements to the front while keeping their original order. Then fill the remaining positions with zeroes.",

  codeSolution: {
    explanation:
      "Use the two-pointer technique. One pointer keeps track of the position where the next non-zero element should be placed. Traverse the array, move non-zero elements forward, and fill the remaining positions with zeroes.",

    time: "O(n)",

    space: "O(1)",

    solutions: [

      {
        language: "cpp",
        code: `#include <vector>
using namespace std;

class Solution {
public:
    void moveZeroes(vector<int>& nums) {

        int index = 0;

        // Move non-zero elements forward
        for(int i = 0; i < nums.size(); i++) {

            if(nums[i] != 0) {

                nums[index] = nums[i];
                index++;
            }
        }

        // Fill remaining positions with zeroes
        while(index < nums.size()) {

            nums[index] = 0;
            index++;
        }
    }
};`
      },


      {
        language: "java",
        code: `class Solution {

    public void moveZeroes(int[] nums) {

        int index = 0;

        // Move non-zero elements forward
        for(int i = 0; i < nums.length; i++) {

            if(nums[i] != 0) {

                nums[index] = nums[i];
                index++;
            }
        }

        // Fill remaining positions with zeroes
        while(index < nums.length) {

            nums[index] = 0;
            index++;
        }
    }
}`
      },


      {
        language: "python",
        code: `class Solution:

    def moveZeroes(self, nums):

        index = 0

        # Move non-zero elements forward
        for num in nums:

            if num != 0:

                nums[index] = num
                index += 1


        # Fill remaining positions with zeroes
        while index < len(nums):

            nums[index] = 0
            index += 1`
      },


      {
        language: "javascript",
        code: `function moveZeroes(nums) {

    let index = 0;

    // Move non-zero elements forward
    for(let i = 0; i < nums.length; i++) {

        if(nums[i] !== 0) {

            nums[index] = nums[i];
            index++;
        }
    }


    // Fill remaining positions with zeroes
    while(index < nums.length) {

        nums[index] = 0;
        index++;
    }
}`
      }

    ]
  }
},{
  id: "rotate-array",

  title: "Rotate Array",

  difficulty: "Medium",

  problem:
    "Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.",

  input: `nums = [1,2,3,4,5,6,7]
k = 3`,

  output: `[5,6,7,1,2,3,4]`,

  explanation:
    "Rotate the array three times to the right. The last three elements move to the beginning.",

  codeSolution: {

    explanation:
      "Use the reversal technique. First reverse the entire array, then reverse the first k elements and finally reverse the remaining elements.",

    time: "O(n)",

    space: "O(1)",

    solutions: [

      {
        language: "cpp",
        code: `#include <vector>
#include <algorithm>
using namespace std;

class Solution {

public:

    void rotate(vector<int>& nums, int k) {

        int n = nums.size();

        k = k % n;

        reverse(nums.begin(), nums.end());

        reverse(nums.begin(), nums.begin() + k);

        reverse(nums.begin() + k, nums.end());
    }
};`
      },


      {
        language: "java",
        code: `import java.util.*;

class Solution {

    public void rotate(int[] nums, int k) {

        int n = nums.length;

        k = k % n;

        reverse(nums, 0, n - 1);

        reverse(nums, 0, k - 1);

        reverse(nums, k, n - 1);
    }


    private void reverse(int[] nums, int start, int end) {

        while(start < end) {

            int temp = nums[start];

            nums[start] = nums[end];

            nums[end] = temp;

            start++;

            end--;
        }
    }
}`
      },


      {
        language: "python",
        code: `class Solution:

    def rotate(self, nums, k):

        n = len(nums)

        k = k % n

        nums.reverse()

        nums[:k] = reversed(nums[:k])

        nums[k:] = reversed(nums[k:])`
      },


      {
        language: "javascript",
        code: `function rotate(nums, k) {

    let n = nums.length;

    k = k % n;


    nums.reverse();


    let first = nums.splice(0, k).reverse();

    let second = nums.reverse();


    nums.push(...first);
    nums.push(...second);
}`
      }

    ]
  }
},{
  id: "remove-duplicates-sorted-array",

  title: "Remove Duplicates from Sorted Array",

  difficulty: "Easy",

  problem:
    "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place so that each unique element appears only once. Return the number of unique elements.",

  input: `nums = [1,1,2]`,

  output: `2

nums = [1,2]`,

  explanation:
    "The unique elements are [1,2]. The first two positions of nums should contain these values.",


  codeSolution: {

    explanation:
      "Use two pointers. One pointer scans the array, and the other stores the position of the next unique element.",

    time: "O(n)",

    space: "O(1)",


    solutions: [

      {
        language: "cpp",
        code: `#include <vector>
using namespace std;

class Solution {

public:

    int removeDuplicates(vector<int>& nums) {

        if(nums.empty())
            return 0;


        int index = 1;


        for(int i = 1; i < nums.size(); i++) {

            if(nums[i] != nums[i - 1]) {

                nums[index] = nums[i];

                index++;
            }
        }


        return index;
    }
};`
      },


      {
        language: "java",
        code: `class Solution {

    public int removeDuplicates(int[] nums) {

        if(nums.length == 0)
            return 0;


        int index = 1;


        for(int i = 1; i < nums.length; i++) {

            if(nums[i] != nums[i - 1]) {

                nums[index] = nums[i];

                index++;
            }
        }


        return index;
    }
}`
      },


      {
        language: "python",
        code: `class Solution:

    def removeDuplicates(self, nums):

        if len(nums) == 0:
            return 0


        index = 1


        for i in range(1, len(nums)):

            if nums[i] != nums[i - 1]:

                nums[index] = nums[i]

                index += 1


        return index`
      },


      {
        language: "javascript",
        code: `function removeDuplicates(nums) {

    if(nums.length === 0)
        return 0;


    let index = 1;


    for(let i = 1; i < nums.length; i++) {

        if(nums[i] !== nums[i - 1]) {

            nums[index] = nums[i];

            index++;
        }
    }


    return index;
}`
      }

    ]
  }
},{
  id: "missing-number",

  title: "Missing Number",

  difficulty: "Easy",

  problem:
    "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",

  input: `nums = [3,0,1]`,

  output: `2`,

  explanation:
    "The numbers from 0 to 3 are [0,1,2,3]. Number 2 is missing.",


  codeSolution: {

    explanation:
      "Use the XOR technique. XOR cancels out identical numbers, leaving only the missing number.",

    time: "O(n)",

    space: "O(1)",


    solutions: [

      {
        language: "cpp",
        code: `#include <vector>
using namespace std;

class Solution {

public:

    int missingNumber(vector<int>& nums) {

        int result = nums.size();


        for(int i = 0; i < nums.size(); i++) {

            result ^= i;

            result ^= nums[i];
        }


        return result;
    }
};`
      },


      {
        language: "java",
        code: `class Solution {

    public int missingNumber(int[] nums) {

        int result = nums.length;


        for(int i = 0; i < nums.length; i++) {

            result ^= i;

            result ^= nums[i];
        }


        return result;
    }
}`
      },


      {
        language: "python",
        code: `class Solution:

    def missingNumber(self, nums):

        result = len(nums)


        for i, num in enumerate(nums):

            result ^= i

            result ^= num


        return result`
      },


      {
        language: "javascript",
        code: `function missingNumber(nums) {

    let result = nums.length;


    for(let i = 0; i < nums.length; i++) {

        result ^= i;

        result ^= nums[i];
    }


    return result;
}`
      }

    ]
  }
},{
  id: "majority-element",

  title: "Majority Element",

  difficulty: "Easy",

  problem:
    "Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n/2⌋ times. You may assume that the majority element always exists in the array.",

  input: `nums = [3,2,3]`,

  output: `3`,

  explanation:
    "The number 3 appears two times out of three elements, which is more than n/2. Therefore, the majority element is 3.",


  codeSolution: {

    explanation:
      "Use the Boyer-Moore Voting Algorithm. Maintain a candidate and a counter. When the counter becomes zero, choose the current element as the new candidate.",

    time: "O(n)",

    space: "O(1)",


    solutions: [

      {
        language: "cpp",
        code: `#include <vector>
using namespace std;

class Solution {

public:

    int majorityElement(vector<int>& nums) {

        int candidate = 0;

        int count = 0;


        for(int num : nums) {

            if(count == 0) {

                candidate = num;
            }


            if(num == candidate) {

                count++;

            } else {

                count--;
            }
        }


        return candidate;
    }
};`
      },


      {
        language: "java",
        code: `class Solution {

    public int majorityElement(int[] nums) {

        int candidate = 0;

        int count = 0;


        for(int num : nums) {

            if(count == 0) {

                candidate = num;
            }


            if(num == candidate) {

                count++;

            } else {

                count--;
            }
        }


        return candidate;
    }
}`
      },


      {
        language: "python",
        code: `class Solution:

    def majorityElement(self, nums):

        candidate = 0

        count = 0


        for num in nums:

            if count == 0:

                candidate = num


            if num == candidate:

                count += 1

            else:

                count -= 1


        return candidate`
      },


      {
        language: "javascript",
        code: `function majorityElement(nums) {

    let candidate = 0;

    let count = 0;


    for(let num of nums) {

        if(count === 0) {

            candidate = num;
        }


        if(num === candidate) {

            count++;

        } else {

            count--;
        }
    }


    return candidate;
}`
      }

    ]
  }
},{
  id: "single-number",

  title: "Single Number",

  difficulty: "Easy",

  problem:
    "Given a non-empty array of integers nums, every element appears twice except for one. Find the element that appears only once.",

  input: `nums = [4,1,2,1,2]`,

  output: `4`,

  explanation:
    "The numbers 1 and 2 appear twice, while 4 appears only once.",


  codeSolution: {

    explanation:
      "Use XOR operation. The same numbers cancel each other because a ^ a = 0, leaving the number that appears only once.",

    time: "O(n)",

    space: "O(1)",


    solutions: [

      {
        language: "cpp",
        code: `#include <vector>
using namespace std;

class Solution {

public:

    int singleNumber(vector<int>& nums) {

        int result = 0;


        for(int num : nums) {

            result ^= num;
        }


        return result;
    }
};`
      },


      {
        language: "java",
        code: `class Solution {

    public int singleNumber(int[] nums) {

        int result = 0;


        for(int num : nums) {

            result ^= num;
        }


        return result;
    }
}`
      },


      {
        language: "python",
        code: `class Solution:

    def singleNumber(self, nums):

        result = 0


        for num in nums:

            result ^= num


        return result`
      },


      {
        language: "javascript",
        code: `function singleNumber(nums) {

    let result = 0;


    for(let num of nums) {

        result ^= num;
    }


    return result;
}`
      }

    ]
  }
},{
  id: "product-of-array-except-self",

  title: "Product of Array Except Self",

  difficulty: "Medium",

  problem:
    "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. The product of any prefix or suffix fits in a 32-bit integer. You must solve it without using division.",

  input: `nums = [1,2,3,4]`,

  output: `[24,12,8,6]`,

  explanation:
    "For each position, calculate the product of all numbers before and after it.",


  codeSolution: {

    explanation:
      "Use prefix and suffix products. First store the prefix product in the answer array, then multiply it with the suffix product while traversing from the right.",

    time: "O(n)",

    space: "O(1) (excluding output array)",


    solutions: [

      {
        language: "cpp",
        code: `#include <vector>
using namespace std;

class Solution {

public:

    vector<int> productExceptSelf(vector<int>& nums) {

        int n = nums.size();

        vector<int> answer(n, 1);


        int prefix = 1;


        for(int i = 0; i < n; i++) {

            answer[i] = prefix;

            prefix *= nums[i];
        }


        int suffix = 1;


        for(int i = n - 1; i >= 0; i--) {

            answer[i] *= suffix;

            suffix *= nums[i];
        }


        return answer;
    }
};`
      },


      {
        language: "java",
        code: `class Solution {

    public int[] productExceptSelf(int[] nums) {

        int n = nums.length;

        int[] answer = new int[n];


        int prefix = 1;


        for(int i = 0; i < n; i++) {

            answer[i] = prefix;

            prefix *= nums[i];
        }


        int suffix = 1;


        for(int i = n - 1; i >= 0; i--) {

            answer[i] *= suffix;

            suffix *= nums[i];
        }


        return answer;
    }
}`
      },


      {
        language: "python",
        code: `class Solution:

    def productExceptSelf(self, nums):

        n = len(nums)

        answer = [1] * n


        prefix = 1


        for i in range(n):

            answer[i] = prefix

            prefix *= nums[i]


        suffix = 1


        for i in range(n - 1, -1, -1):

            answer[i] *= suffix

            suffix *= nums[i]


        return answer`
      },


      {
        language: "javascript",
        code: `function productExceptSelf(nums) {

    let n = nums.length;

    let answer = new Array(n).fill(1);


    let prefix = 1;


    for(let i = 0; i < n; i++) {

        answer[i] = prefix;

        prefix *= nums[i];
    }


    let suffix = 1;


    for(let i = n - 1; i >= 0; i--) {

        answer[i] *= suffix;

        suffix *= nums[i];
    }


    return answer;
}`
      }

    ]
  }
},{
  id: "find-duplicate-number",

  title: "Find the Duplicate Number",

  difficulty: "Medium",

  problem:
    "Given an array nums containing n + 1 integers where each integer is in the range [1, n]. There is only one repeated number. Return the duplicate number without modifying the array and using constant extra space.",

  input: `nums = [1,3,4,2,2]`,

  output: `2`,

  explanation:
    "The number 2 appears more than once, so the duplicate number is 2.",


  codeSolution: {

    explanation:
      "Use Floyd's Cycle Detection Algorithm. Treat the array as a linked list where each value points to the next index. The duplicate creates a cycle.",

    time: "O(n)",

    space: "O(1)",


    solutions: [

      {
        language: "cpp",
        code: `#include <vector>
using namespace std;

class Solution {

public:

    int findDuplicate(vector<int>& nums) {

        int slow = nums[0];

        int fast = nums[0];


        do {

            slow = nums[slow];

            fast = nums[nums[fast]];

        } while(slow != fast);



        slow = nums[0];


        while(slow != fast) {

            slow = nums[slow];

            fast = nums[fast];
        }


        return slow;
    }
};`
      },


      {
        language: "java",
        code: `class Solution {

    public int findDuplicate(int[] nums) {

        int slow = nums[0];

        int fast = nums[0];


        do {

            slow = nums[slow];

            fast = nums[nums[fast]];

        } while(slow != fast);



        slow = nums[0];


        while(slow != fast) {

            slow = nums[slow];

            fast = nums[fast];
        }


        return slow;
    }
}`
      },


      {
        language: "python",
        code: `class Solution:

    def findDuplicate(self, nums):

        slow = nums[0]

        fast = nums[0]


        while True:

            slow = nums[slow]

            fast = nums[nums[fast]]

            if slow == fast:
                break



        slow = nums[0]


        while slow != fast:

            slow = nums[slow]

            fast = nums[fast]


        return slow`
      },


      {
        language: "javascript",
        code: `function findDuplicate(nums) {

    let slow = nums[0];

    let fast = nums[0];


    do {

        slow = nums[slow];

        fast = nums[nums[fast]];

    } while(slow !== fast);



    slow = nums[0];


    while(slow !== fast) {

        slow = nums[slow];

        fast = nums[fast];
    }


    return slow;
}`
      }

    ]
  }
},{
  id: "sort-colors",

  title: "Sort Colors",

  difficulty: "Medium",

  problem:
    "Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue. Use 0 for red, 1 for white, and 2 for blue.",

  input: `nums = [2,0,2,1,1,0]`,

  output: `[0,0,1,1,2,2]`,

  explanation:
    "Use three pointers to place 0s at the beginning, 2s at the end, and keep 1s in the middle.",


  codeSolution: {

    explanation:
      "Use the Dutch National Flag algorithm with three pointers: low, mid, and high.",

    time: "O(n)",

    space: "O(1)",


    solutions: [

      {
        language: "cpp",
        code: `#include <vector>
using namespace std;

class Solution {

public:

    void sortColors(vector<int>& nums) {

        int low = 0;

        int mid = 0;

        int high = nums.size() - 1;


        while(mid <= high) {

            if(nums[mid] == 0) {

                swap(nums[low], nums[mid]);

                low++;

                mid++;

            } else if(nums[mid] == 1) {

                mid++;

            } else {

                swap(nums[mid], nums[high]);

                high--;
            }
        }
    }
};`
      },


      {
        language: "java",
        code: `class Solution {

    public void sortColors(int[] nums) {

        int low = 0;

        int mid = 0;

        int high = nums.length - 1;


        while(mid <= high) {

            if(nums[mid] == 0) {

                int temp = nums[low];

                nums[low] = nums[mid];

                nums[mid] = temp;


                low++;

                mid++;

            } else if(nums[mid] == 1) {

                mid++;

            } else {

                int temp = nums[mid];

                nums[mid] = nums[high];

                nums[high] = temp;


                high--;
            }
        }
    }
}`
      },


      {
        language: "python",
        code: `class Solution:

    def sortColors(self, nums):

        low = 0

        mid = 0

        high = len(nums) - 1


        while mid <= high:

            if nums[mid] == 0:

                nums[low], nums[mid] = nums[mid], nums[low]

                low += 1

                mid += 1


            elif nums[mid] == 1:

                mid += 1


            else:

                nums[mid], nums[high] = nums[high], nums[mid]

                high -= 1`
      },


      {
        language: "javascript",
        code: `function sortColors(nums) {

    let low = 0;

    let mid = 0;

    let high = nums.length - 1;


    while(mid <= high) {

        if(nums[mid] === 0) {

            [nums[low], nums[mid]] =
            [nums[mid], nums[low]];

            low++;

            mid++;

        } else if(nums[mid] === 1) {

            mid++;

        } else {

            [nums[mid], nums[high]] =
            [nums[high], nums[mid]];

            high--;
        }
    }
}`
      }

    ]
  }
},{
  id: "merge-intervals",

  title: "Merge Intervals",

  difficulty: "Medium",

  problem:
    "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals and return an array of the non-overlapping intervals that cover all the intervals in the input.",

  input: `intervals = [[1,3],[2,6],[8,10],[15,18]]`,

  output: `[[1,6],[8,10],[15,18]]`,

  explanation:
    "The intervals [1,3] and [2,6] overlap, so they are merged into [1,6]. The remaining intervals do not overlap.",


  codeSolution: {

    explanation:
      "First sort intervals by their starting values. Then compare each interval with the last merged interval. If they overlap, merge them; otherwise add a new interval.",

    time: "O(n log n)",

    space: "O(n)",


    solutions: [

      {
        language: "cpp",
        code: `#include <vector>
#include <algorithm>
using namespace std;

class Solution {

public:

    vector<vector<int>> merge(vector<vector<int>>& intervals) {

        vector<vector<int>> result;


        sort(
            intervals.begin(),
            intervals.end()
        );


        for(auto interval : intervals) {

            if(result.empty() ||
               result.back()[1] < interval[0]) {

                result.push_back(interval);

            } else {

                result.back()[1] =
                max(
                    result.back()[1],
                    interval[1]
                );
            }
        }


        return result;
    }
};`
      },


      {
        language: "java",
        code: `import java.util.*;

class Solution {

    public int[][] merge(int[][] intervals) {

        Arrays.sort(
            intervals,
            (a,b) -> a[0] - b[0]
        );


        ArrayList<int[]> result = new ArrayList<>();


        for(int[] interval : intervals) {

            if(result.size() == 0 ||
               result.get(result.size()-1)[1] < interval[0]) {

                result.add(interval);

            } else {

                result.get(result.size()-1)[1] =
                Math.max(
                    result.get(result.size()-1)[1],
                    interval[1]
                );
            }
        }


        return result.toArray(new int[result.size()][]);
    }
}`
      },


      {
        language: "python",
        code: `class Solution:

    def merge(self, intervals):

        intervals.sort(
            key=lambda x: x[0]
        )


        result = []


        for interval in intervals:

            if not result or result[-1][1] < interval[0]:

                result.append(interval)

            else:

                result[-1][1] = max(
                    result[-1][1],
                    interval[1]
                )


        return result`
      },


      {
        language: "javascript",
        code: `function merge(intervals) {

    intervals.sort(
        (a,b) => a[0] - b[0]
    );


    let result = [];


    for(let interval of intervals) {

        if(
            result.length === 0 ||
            result[result.length - 1][1] < interval[0]
        ) {

            result.push(interval);

        } else {

            result[result.length - 1][1] =
            Math.max(
                result[result.length - 1][1],
                interval[1]
            );
        }
    }


    return result;
}`
      }

    ]
  }
},{
  id: "three-sum",

  title: "Three Sum",

  difficulty: "Medium",

  problem:
    "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i, j, and k are different indices and nums[i] + nums[j] + nums[k] = 0. The solution set must not contain duplicate triplets.",

  input: `nums = [-1,0,1,2,-1,-4]`,

  output: `[[-1,-1,2],[-1,0,1]]`,

  explanation:
    "After sorting the array, use two pointers to find pairs that complete the sum of three numbers to zero.",


  codeSolution: {

    explanation:
      "Sort the array first. Fix one element and use two pointers to search the remaining array for the other two elements.",

    time: "O(n²)",

    space: "O(1)",


    solutions: [

      {
        language: "cpp",
        code: `#include <vector>
#include <algorithm>
using namespace std;

class Solution {

public:

    vector<vector<int>> threeSum(vector<int>& nums) {

        vector<vector<int>> result;

        sort(nums.begin(), nums.end());


        for(int i = 0; i < nums.size(); i++) {

            if(i > 0 && nums[i] == nums[i-1])
                continue;


            int left = i + 1;

            int right = nums.size() - 1;


            while(left < right) {

                int sum = nums[i] + nums[left] + nums[right];


                if(sum == 0) {

                    result.push_back(
                        {nums[i], nums[left], nums[right]}
                    );


                    while(left < right &&
                          nums[left] == nums[left+1])
                        left++;


                    while(left < right &&
                          nums[right] == nums[right-1])
                        right--;


                    left++;

                    right--;


                } 
                else if(sum < 0) {

                    left++;

                } 
                else {

                    right--;
                }
            }
        }


        return result;
    }
};`
      },


      {
        language: "java",
        code: `import java.util.*;

class Solution {

    public List<List<Integer>> threeSum(int[] nums) {

        List<List<Integer>> result = new ArrayList<>();

        Arrays.sort(nums);


        for(int i = 0; i < nums.length; i++) {

            if(i > 0 && nums[i] == nums[i-1])
                continue;


            int left = i + 1;

            int right = nums.length - 1;


            while(left < right) {

                int sum = nums[i] + nums[left] + nums[right];


                if(sum == 0) {

                    result.add(
                        Arrays.asList(
                            nums[i],
                            nums[left],
                            nums[right]
                        )
                    );


                    while(left < right &&
                          nums[left] == nums[left+1])
                        left++;


                    while(left < right &&
                          nums[right] == nums[right-1])
                        right--;


                    left++;

                    right--;


                } 
                else if(sum < 0) {

                    left++;

                } 
                else {

                    right--;
                }
            }
        }


        return result;
    }
}`
      },


      {
        language: "python",
        code: `class Solution:

    def threeSum(self, nums):

        result = []

        nums.sort()


        for i in range(len(nums)):

            if i > 0 and nums[i] == nums[i-1]:
                continue


            left = i + 1

            right = len(nums) - 1


            while left < right:

                total = nums[i] + nums[left] + nums[right]


                if total == 0:

                    result.append(
                        [nums[i], nums[left], nums[right]]
                    )


                    while left < right and nums[left] == nums[left+1]:
                        left += 1


                    while left < right and nums[right] == nums[right-1]:
                        right -= 1


                    left += 1

                    right -= 1


                elif total < 0:

                    left += 1

                else:

                    right -= 1


        return result`
      },


      {
        language: "javascript",
        code: `function threeSum(nums) {

    let result = [];

    nums.sort((a,b)=>a-b);


    for(let i = 0; i < nums.length; i++) {

        if(i > 0 && nums[i] === nums[i-1])
            continue;


        let left = i + 1;

        let right = nums.length - 1;


        while(left < right) {

            let sum = nums[i] + nums[left] + nums[right];


            if(sum === 0) {

                result.push([
                    nums[i],
                    nums[left],
                    nums[right]
                ]);


                while(left < right &&
                      nums[left] === nums[left+1])
                    left++;


                while(left < right &&
                      nums[right] === nums[right-1])
                    right--;


                left++;

                right--;


            } 
            else if(sum < 0) {

                left++;

            } 
            else {

                right--;
            }
        }
    }


    return result;
}`
      }

    ]
  }
},{
  id: "container-with-most-water",

  title: "Container With Most Water",

  difficulty: "Medium",

  problem:
    "Given an integer array height where height[i] represents the height of a vertical line, find two lines that together with the x-axis form a container that holds the most water.",

  input: `height = [1,8,6,2,5,4,8,3,7]`,

  output: `49`,

  explanation:
    "The maximum area is created by lines at index 1 and index 8: min(8,7) × (8-1) = 49.",


  codeSolution: {

    explanation:
      "Use two pointers starting from both ends. Move the pointer with the smaller height because the smaller line limits the area.",

    time: "O(n)",

    space: "O(1)",


    solutions: [

      {
        language: "cpp",
        code: `#include <vector>
#include <algorithm>
using namespace std;

class Solution {

public:

    int maxArea(vector<int>& height) {

        int left = 0;

        int right = height.size() - 1;

        int maximum = 0;


        while(left < right) {

            int area =
            min(height[left], height[right]) *
            (right - left);


            maximum = max(maximum, area);


            if(height[left] < height[right])

                left++;

            else

                right--;
        }


        return maximum;
    }
};`
      },


      {
        language: "java",
        code: `class Solution {

    public int maxArea(int[] height) {

        int left = 0;

        int right = height.length - 1;

        int maximum = 0;


        while(left < right) {

            int area =
            Math.min(height[left], height[right])
            * (right-left);


            maximum = Math.max(maximum, area);


            if(height[left] < height[right])

                left++;

            else

                right--;
        }


        return maximum;
    }
}`
      },


      {
        language: "python",
        code: `class Solution:

    def maxArea(self, height):

        left = 0

        right = len(height)-1

        maximum = 0


        while left < right:

            area = min(
                height[left],
                height[right]
            ) * (right-left)


            maximum = max(
                maximum,
                area
            )


            if height[left] < height[right]:

                left += 1

            else:

                right -= 1


        return maximum`
      },


      {
        language: "javascript",
        code: `function maxArea(height) {

    let left = 0;

    let right = height.length - 1;

    let maximum = 0;


    while(left < right) {

        let area =
        Math.min(height[left], height[right])
        * (right-left);


        maximum = Math.max(
            maximum,
            area
        );


        if(height[left] < height[right])

            left++;

        else

            right--;
    }


    return maximum;
}`
      }

    ]
  }
},{
  id: "trapping-rain-water",

  title: "Trapping Rain Water",

  difficulty: "Hard",

  problem:
    "Given n non-negative integers representing an elevation map where the width of each bar is 1, calculate how much water it can trap after raining.",

  input: `height = [0,1,0,2,1,0,1,3,2,1,2,1]`,

  output: `6`,

  explanation:
    "Water is trapped between taller bars. The total trapped water is 6 units.",


  codeSolution: {

    explanation:
      "Use two pointers. Maintain the maximum height from both sides and calculate trapped water while moving inward.",

    time: "O(n)",

    space: "O(1)",


    solutions: [

      {
        language: "cpp",
        code: `#include <vector>
#include <algorithm>
using namespace std;

class Solution {

public:

    int trap(vector<int>& height) {

        int left = 0;

        int right = height.size() - 1;

        int leftMax = 0;

        int rightMax = 0;

        int water = 0;


        while(left < right) {

            if(height[left] <= height[right]) {

                if(height[left] >= leftMax)

                    leftMax = height[left];

                else

                    water += leftMax - height[left];


                left++;

            } else {

                if(height[right] >= rightMax)

                    rightMax = height[right];

                else

                    water += rightMax - height[right];


                right--;
            }
        }


        return water;
    }
};`
      },


      {
        language: "java",
        code: `class Solution {

    public int trap(int[] height) {

        int left = 0;

        int right = height.length - 1;

        int leftMax = 0;

        int rightMax = 0;

        int water = 0;


        while(left < right) {

            if(height[left] <= height[right]) {


                if(height[left] >= leftMax)

                    leftMax = height[left];

                else

                    water += leftMax - height[left];


                left++;


            } else {


                if(height[right] >= rightMax)

                    rightMax = height[right];

                else

                    water += rightMax - height[right];


                right--;
            }
        }


        return water;
    }
}`
      },


      {
        language: "python",
        code: `class Solution:

    def trap(self, height):

        left = 0

        right = len(height)-1

        left_max = 0

        right_max = 0

        water = 0


        while left < right:


            if height[left] <= height[right]:


                if height[left] >= left_max:

                    left_max = height[left]

                else:

                    water += left_max - height[left]


                left += 1


            else:


                if height[right] >= right_max:

                    right_max = height[right]

                else:

                    water += right_max - height[right]


                right -= 1


        return water`
      },


      {
        language: "javascript",
        code: `function trap(height) {

    let left = 0;

    let right = height.length - 1;

    let leftMax = 0;

    let rightMax = 0;

    let water = 0;


    while(left < right) {


        if(height[left] <= height[right]) {


            if(height[left] >= leftMax)

                leftMax = height[left];

            else

                water += leftMax - height[left];


            left++;


        } else {


            if(height[right] >= rightMax)

                rightMax = height[right];

            else

                water += rightMax - height[right];


            right--;
        }
    }


    return water;
}`
      }

    ]
  }
},{
  id: "longest-consecutive-sequence",

  title: "Longest Consecutive Sequence",

  difficulty: "Medium",

  problem:
    "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.",

  input: `nums = [100,4,200,1,3,2]`,

  output: `4`,

  explanation:
    "The longest consecutive sequence is [1,2,3,4], which has length 4.",


  codeSolution: {

    explanation:
      "Store all numbers in a Hash Set. Start counting only from numbers that do not have a previous consecutive number.",

    time: "O(n)",

    space: "O(n)",


    solutions: [

      {
        language: "cpp",
        code: `#include <vector>
#include <unordered_set>
#include <algorithm>
using namespace std;

class Solution {

public:

    int longestConsecutive(vector<int>& nums) {

        unordered_set<int> set(
            nums.begin(),
            nums.end()
        );


        int longest = 0;


        for(int num : set) {


            if(!set.count(num - 1)) {


                int current = num;

                int length = 1;


                while(set.count(current + 1)) {

                    current++;

                    length++;
                }


                longest = max(
                    longest,
                    length
                );
            }
        }


        return longest;
    }
};`
      },


      {
        language: "java",
        code: `import java.util.*;

class Solution {

    public int longestConsecutive(int[] nums) {

        HashSet<Integer> set = new HashSet<>();


        for(int num : nums)

            set.add(num);



        int longest = 0;


        for(int num : set) {


            if(!set.contains(num - 1)) {


                int current = num;

                int length = 1;


                while(set.contains(current + 1)) {

                    current++;

                    length++;
                }


                longest = Math.max(
                    longest,
                    length
                );
            }
        }


        return longest;
    }
}`
      },


      {
        language: "python",
        code: `class Solution:

    def longestConsecutive(self, nums):

        numbers = set(nums)

        longest = 0


        for num in numbers:


            if num - 1 not in numbers:


                current = num

                length = 1


                while current + 1 in numbers:

                    current += 1

                    length += 1


                longest = max(
                    longest,
                    length
                )


        return longest`
      },


      {
        language: "javascript",
        code: `function longestConsecutive(nums) {

    let set = new Set(nums);

    let longest = 0;


    for(let num of set) {


        if(!set.has(num - 1)) {


            let current = num;

            let length = 1;


            while(set.has(current + 1)) {

                current++;

                length++;
            }


            longest = Math.max(
                longest,
                length
            );
        }
    }


    return longest;
}`
      }

    ]
  }
},{
  id: "subarray-sum-equals-k",

  title: "Subarray Sum Equals K",

  difficulty: "Medium",

  problem:
    "Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals k.",

  input: `nums = [1,1,1]
k = 2`,

  output: `2`,

  explanation:
    "The subarrays [1,1] and [1,1] have a sum equal to 2.",


  codeSolution: {

    explanation:
      "Use prefix sum with a Hash Map. Store the frequency of previous prefix sums. If prefixSum - k exists, a subarray with sum k is found.",

    time: "O(n)",

    space: "O(n)",


    solutions: [

      {
        language: "cpp",
        code: `#include <vector>
#include <unordered_map>
using namespace std;

class Solution {

public:

    int subarraySum(vector<int>& nums, int k) {

        unordered_map<int, int> prefixCount;


        prefixCount[0] = 1;


        int prefixSum = 0;

        int count = 0;


        for(int num : nums) {

            prefixSum += num;


            if(prefixCount.find(prefixSum - k)
               != prefixCount.end()) {

                count += prefixCount[prefixSum - k];
            }


            prefixCount[prefixSum]++;
        }


        return count;
    }
};`
      },


      {
        language: "java",
        code: `import java.util.*;

class Solution {

    public int subarraySum(int[] nums, int k) {

        HashMap<Integer, Integer> map =
            new HashMap<>();


        map.put(0, 1);


        int prefixSum = 0;

        int count = 0;


        for(int num : nums) {

            prefixSum += num;


            if(map.containsKey(prefixSum - k)) {

                count += map.get(prefixSum - k);
            }


            map.put(
                prefixSum,
                map.getOrDefault(prefixSum, 0) + 1
            );
        }


        return count;
    }
}`
      },


      {
        language: "python",
        code: `class Solution:

    def subarraySum(self, nums, k):

        prefix_count = {0: 1}


        prefix_sum = 0

        count = 0


        for num in nums:

            prefix_sum += num


            if prefix_sum - k in prefix_count:

                count += prefix_count[
                    prefix_sum - k
                ]


            prefix_count[prefix_sum] = (
                prefix_count.get(prefix_sum, 0) + 1
            )


        return count`
      },


      {
        language: "javascript",
        code: `function subarraySum(nums, k) {

    let prefixCount = new Map();


    prefixCount.set(0, 1);


    let prefixSum = 0;

    let count = 0;


    for(let num of nums) {

        prefixSum += num;


        if(prefixCount.has(prefixSum - k)) {

            count += prefixCount.get(
                prefixSum - k
            );
        }


        prefixCount.set(
            prefixSum,
            (prefixCount.get(prefixSum) || 0) + 1
        );
    }


    return count;
}`
      }

    ]
  }
}
  ]
};