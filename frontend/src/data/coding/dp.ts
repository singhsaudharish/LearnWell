import { CodingCategory } from "../../types/coding";

export const dynamicProgramming: CodingCategory = {
  title: "Dynamic Programming",

  description:
    "Practice important dynamic programming problems covering memoization, tabulation, optimization, subsequences, and decision-based problems.",

  questions: [

    // ============================================================
    // 1. CLIMBING STAIRS
    // ============================================================

    {
      id: "climbing-stairs",

      title: "Climbing Stairs",

      difficulty: "Easy",

      problem:
        "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb either 1 step or 2 steps. Return the number of distinct ways you can reach the top.",

      input:
        `n = 5`,

      output:
        `8`,

      explanation:
        "To reach step 5, you can come from step 4 or step 3. Therefore, the number of ways to reach a step is the sum of the ways to reach the previous two steps.",

      codeSolution: {

        explanation:
          "This problem follows the Fibonacci pattern. Let dp[i] represent the number of ways to reach step i. Then dp[i] = dp[i - 1] + dp[i - 2].",

        time: "O(n)",

        space: "O(1)",

        solutions: [

          {
            language: "cpp",

            code: `class Solution {

public:

    int climbStairs(int n) {

        if(n <= 2)
            return n;

        int previous2 = 1;
        int previous1 = 2;

        for(int i = 3; i <= n; i++) {

            int current =
                previous1 + previous2;

            previous2 = previous1;
            previous1 = current;
        }

        return previous1;
    }
};`
          },

          {
            language: "java",

            code: `class Solution {

    public int climbStairs(int n) {

        if(n <= 2)
            return n;

        int previous2 = 1;
        int previous1 = 2;

        for(int i = 3; i <= n; i++) {

            int current =
                previous1 + previous2;

            previous2 = previous1;
            previous1 = current;
        }

        return previous1;
    }
}`
          },

          {
            language: "python",

            code: `class Solution:

    def climbStairs(self, n):

        if n <= 2:
            return n

        previous2 = 1
        previous1 = 2

        for i in range(3, n + 1):

            current = (
                previous1 +
                previous2
            )

            previous2 = previous1
            previous1 = current

        return previous1`
          },

          {
            language: "javascript",

            code: `function climbStairs(n) {

    if(n <= 2)
        return n;

    let previous2 = 1;
    let previous1 = 2;

    for(
        let i = 3;
        i <= n;
        i++
    ) {

        const current =
            previous1 + previous2;

        previous2 = previous1;
        previous1 = current;
    }

    return previous1;
}`
          }

        ]
      }
    },


    // ============================================================
    // 2. HOUSE ROBBER
    // ============================================================

    {
      id: "house-robber",

      title: "House Robber",

      difficulty: "Medium",

      problem:
        "You are a professional robber planning to rob houses along a street. Each house contains a certain amount of money. You cannot rob two adjacent houses. Return the maximum amount of money you can rob without alerting the police.",

      input:
        `nums = [2,7,9,3,1]`,

      output:
        `12`,

      explanation:
        "The best choice is to rob houses containing 2, 9, and 1. The total is 12.",

      codeSolution: {

        explanation:
          "For every house, choose between robbing the current house plus the best result from two houses before it, or skipping the current house.",

        time: "O(n)",

        space: "O(1)",

        solutions: [

          {
            language: "cpp",

            code: `class Solution {

public:

    int rob(vector<int>& nums) {

        int previous2 = 0;
        int previous1 = 0;

        for(int money : nums) {

            int current =
                max(
                    previous1,
                    previous2 + money
                );

            previous2 = previous1;
            previous1 = current;
        }

        return previous1;
    }
};`
          },

          {
            language: "java",

            code: `class Solution {

    public int rob(int[] nums) {

        int previous2 = 0;
        int previous1 = 0;

        for(int money : nums) {

            int current =
                Math.max(
                    previous1,
                    previous2 + money
                );

            previous2 = previous1;
            previous1 = current;
        }

        return previous1;
    }
}`
          },

          {
            language: "python",

            code: `class Solution:

    def rob(self, nums):

        previous2 = 0
        previous1 = 0

        for money in nums:

            current = max(
                previous1,
                previous2 + money
            )

            previous2 = previous1
            previous1 = current

        return previous1`
          },

          {
            language: "javascript",

            code: `function rob(nums) {

    let previous2 = 0;
    let previous1 = 0;

    for(const money of nums) {

        const current = Math.max(
            previous1,
            previous2 + money
        );

        previous2 = previous1;
        previous1 = current;
    }

    return previous1;
}`
          }

        ]
      }
    },


    // ============================================================
    // 3. COIN CHANGE
    // ============================================================

    {
      id: "coin-change",

      title: "Coin Change",

      difficulty: "Medium",

      problem:
        "You are given an integer array coins representing different denominations and an integer amount representing a total amount of money. Return the fewest number of coins needed to make up that amount. If the amount cannot be made, return -1.",

      input:
        `coins = [1,2,5]
amount = 11`,

      output:
        `3`,

      explanation:
        "The minimum number of coins is 3: 5 + 5 + 1 = 11.",

      codeSolution: {

        explanation:
          "Let dp[i] represent the minimum number of coins required to make amount i. For every coin, update dp[i] using dp[i - coin] + 1.",

        time: "O(amount × number of coins)",

        space: "O(amount)",

        solutions: [

          {
            language: "cpp",

            code: `class Solution {

public:

    int coinChange(
        vector<int>& coins,
        int amount
    ) {

        vector<int> dp(
            amount + 1,
            amount + 1
        );

        dp[0] = 0;

        for(int i = 1; i <= amount; i++) {

            for(int coin : coins) {

                if(coin <= i) {

                    dp[i] =
                        min(
                            dp[i],
                            dp[i - coin] + 1
                        );
                }
            }
        }

        return
            dp[amount] > amount
            ? -1
            : dp[amount];
    }
};`
          },

          {
            language: "java",

            code: `class Solution {

    public int coinChange(
        int[] coins,
        int amount
    ) {

        int[] dp =
            new int[amount + 1];

        Arrays.fill(
            dp,
            amount + 1
        );

        dp[0] = 0;

        for(int i = 1; i <= amount; i++) {

            for(int coin : coins) {

                if(coin <= i) {

                    dp[i] =
                        Math.min(
                            dp[i],
                            dp[i - coin] + 1
                        );
                }
            }
        }

        return
            dp[amount] > amount
            ? -1
            : dp[amount];
    }
}`
          },

          {
            language: "python",

            code: `class Solution:

    def coinChange(
        self,
        coins,
        amount
    ):

        dp = [
            amount + 1
        ] * (amount + 1)

        dp[0] = 0

        for i in range(1, amount + 1):

            for coin in coins:

                if coin <= i:

                    dp[i] = min(
                        dp[i],
                        dp[i - coin] + 1
                    )

        if dp[amount] > amount:
            return -1

        return dp[amount]`
          },

          {
            language: "javascript",

            code: `function coinChange(
    coins,
    amount
) {

    const dp =
        new Array(amount + 1)
            .fill(amount + 1);

    dp[0] = 0;

    for(
        let i = 1;
        i <= amount;
        i++
    ) {

        for(const coin of coins) {

            if(coin <= i) {

                dp[i] = Math.min(
                    dp[i],
                    dp[i - coin] + 1
                );
            }
        }
    }

    return dp[amount] > amount
        ? -1
        : dp[amount];
}`
          }

        ]
      }
    },


    // ============================================================
    // 4. LONGEST INCREASING SUBSEQUENCE
    // ============================================================

    {
      id: "longest-increasing-subsequence",

      title: "Longest Increasing Subsequence",

      difficulty: "Medium",

      problem:
        "Given an integer array nums, return the length of the longest strictly increasing subsequence.",

      input:
        `nums = [10,9,2,5,3,7,101,18]`,

      output:
        `4`,

      explanation:
        "One longest increasing subsequence is [2,3,7,101], which has length 4.",

      codeSolution: {

        explanation:
          "Let dp[i] represent the length of the longest increasing subsequence ending at index i. For every previous index j, if nums[j] < nums[i], update dp[i].",

        time: "O(n²)",

        space: "O(n)",

        solutions: [

          {
            language: "cpp",

            code: `class Solution {

public:

    int lengthOfLIS(
        vector<int>& nums
    ) {

        int n = nums.size();

        vector<int> dp(
            n,
            1
        );

        int answer = 1;

        for(int i = 1; i < n; i++) {

            for(int j = 0; j < i; j++) {

                if(nums[j] < nums[i]) {

                    dp[i] =
                        max(
                            dp[i],
                            dp[j] + 1
                        );
                }
            }

            answer =
                max(
                    answer,
                    dp[i]
                );
        }

        return answer;
    }
};`
          },

          {
            language: "java",

            code: `class Solution {

    public int lengthOfLIS(
        int[] nums
    ) {

        int n =
            nums.length;

        int[] dp =
            new int[n];

        Arrays.fill(
            dp,
            1
        );

        int answer = 1;

        for(int i = 1; i < n; i++) {

            for(int j = 0; j < i; j++) {

                if(nums[j] < nums[i]) {

                    dp[i] =
                        Math.max(
                            dp[i],
                            dp[j] + 1
                        );
                }
            }

            answer =
                Math.max(
                    answer,
                    dp[i]
                );
        }

        return answer;
    }
}`
          },

          {
            language: "python",

            code: `class Solution:

    def lengthOfLIS(self, nums):

        n = len(nums)

        dp = [1] * n

        answer = 1

        for i in range(1, n):

            for j in range(i):

                if nums[j] < nums[i]:

                    dp[i] = max(
                        dp[i],
                        dp[j] + 1
                    )

            answer = max(
                answer,
                dp[i]
            )

        return answer`
          },

          {
            language: "javascript",

            code: `function lengthOfLIS(nums) {

    const n =
        nums.length;

    const dp =
        new Array(n)
            .fill(1);

    let answer = 1;

    for(
        let i = 1;
        i < n;
        i++
    ) {

        for(
            let j = 0;
            j < i;
            j++
        ) {

            if(nums[j] < nums[i]) {

                dp[i] = Math.max(
                    dp[i],
                    dp[j] + 1
                );
            }
        }

        answer = Math.max(
            answer,
            dp[i]
        );
    }

    return answer;
}`
          }

        ]
      }
    },


    // ============================================================
    // 5. LONGEST COMMON SUBSEQUENCE
    // ============================================================

    {
      id: "longest-common-subsequence",

      title: "Longest Common Subsequence",

      difficulty: "Medium",

      problem:
        "Given two strings text1 and text2, return the length of their longest common subsequence. A subsequence is a sequence that can be obtained from another sequence by deleting some or none of the elements without changing the order of the remaining elements.",

      input:
        `text1 = "abcde"
text2 = "ace"`,

      output:
        `3`,

      explanation:
        "The longest common subsequence is 'ace', which has length 3.",

      codeSolution: {

        explanation:
          "Use a two-dimensional DP table. If the current characters match, add 1 to the result for the previous diagonal state. Otherwise, take the maximum from the top or left state.",

        time: "O(m × n)",

        space: "O(m × n)",

        solutions: [

          {
            language: "cpp",

            code: `class Solution {

public:

    int longestCommonSubsequence(
        string text1,
        string text2
    ) {

        int m = text1.length();
        int n = text2.length();

        vector<vector<int>> dp(
            m + 1,
            vector<int>(n + 1, 0)
        );

        for(int i = 1; i <= m; i++) {

            for(int j = 1; j <= n; j++) {

                if(
                    text1[i - 1]
                    ==
                    text2[j - 1]
                ) {

                    dp[i][j] =
                        dp[i - 1][j - 1]
                        + 1;

                } else {

                    dp[i][j] =
                        max(
                            dp[i - 1][j],
                            dp[i][j - 1]
                        );
                }
            }
        }

        return dp[m][n];
    }
};`
          },

          {
            language: "java",

            code: `class Solution {

    public int longestCommonSubsequence(
        String text1,
        String text2
    ) {

        int m =
            text1.length();

        int n =
            text2.length();

        int[][] dp =
            new int[m + 1][n + 1];

        for(int i = 1; i <= m; i++) {

            for(int j = 1; j <= n; j++) {

                if(
                    text1.charAt(i - 1)
                    ==
                    text2.charAt(j - 1)
                ) {

                    dp[i][j] =
                        dp[i - 1][j - 1]
                        + 1;

                } else {

                    dp[i][j] =
                        Math.max(
                            dp[i - 1][j],
                            dp[i][j - 1]
                        );
                }
            }
        }

        return dp[m][n];
    }
}`
          },

          {
            language: "python",

            code: `class Solution:

    def longestCommonSubsequence(
        self,
        text1,
        text2
    ):

        m = len(text1)
        n = len(text2)

        dp = [
            [0] * (n + 1)
            for _ in range(m + 1)
        ]

        for i in range(1, m + 1):

            for j in range(1, n + 1):

                if (
                    text1[i - 1]
                    ==
                    text2[j - 1]
                ):

                    dp[i][j] = (
                        dp[i - 1][j - 1]
                        + 1
                    )

                else:

                    dp[i][j] = max(
                        dp[i - 1][j],
                        dp[i][j - 1]
                    )

        return dp[m][n]`
          },

          {
            language: "javascript",

            code: `function longestCommonSubsequence(
    text1,
    text2
) {

    const m =
        text1.length;

    const n =
        text2.length;

    const dp =
        Array.from(
            { length: m + 1 },
            () =>
                new Array(n + 1)
                    .fill(0)
        );

    for(
        let i = 1;
        i <= m;
        i++
    ) {

        for(
            let j = 1;
            j <= n;
            j++
        ) {

            if(
                text1[i - 1]
                ===
                text2[j - 1]
            ) {

                dp[i][j] =
                    dp[i - 1][j - 1]
                    + 1;

            } else {

                dp[i][j] =
                    Math.max(
                        dp[i - 1][j],
                        dp[i][j - 1]
                    );
            }
        }
    }

    return dp[m][n];
}`
          }

        ]
      }
    }

  ]
};