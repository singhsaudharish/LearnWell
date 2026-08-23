import { CodingCategory } from "../../types/coding";

export const maths: CodingCategory = {
  title: "Maths",

  description:
    "Practice important mathematical programming and number-based interview questions.",

  questions: [

    // ============================================================
    // 1. PALINDROME NUMBER
    // ============================================================

    {
      id: "palindrome-number",

      title: "Palindrome Number",

      difficulty: "Easy",

      problem:
        "Given an integer x, return true if x is a palindrome, and false otherwise. An integer is a palindrome when it reads the same forward and backward.",

      input:
        `x = 121`,

      output:
        `true`,

      explanation:
        "121 reads the same from left to right and right to left, so it is a palindrome.",

      codeSolution: {

        explanation:
          "Reverse the digits of the number and compare the reversed number with the original number. Negative numbers are not palindromes.",

        time: "O(log n)",

        space: "O(1)",

        solutions: [

          {
            language: "cpp",

            code: `class Solution {

public:

    bool isPalindrome(int x) {

        if(x < 0)
            return false;

        int original = x;
        long long reversed = 0;

        while(x > 0) {

            int digit = x % 10;

            reversed =
                reversed * 10 + digit;

            x /= 10;
        }

        return original == reversed;
    }
};`
          },

          {
            language: "java",

            code: `class Solution {

    public boolean isPalindrome(int x) {

        if(x < 0)
            return false;

        int original = x;
        long reversed = 0;

        while(x > 0) {

            int digit = x % 10;

            reversed =
                reversed * 10 + digit;

            x /= 10;
        }

        return original == reversed;
    }
}`
          },

          {
            language: "python",

            code: `class Solution:

    def isPalindrome(self, x):

        if x < 0:
            return False

        original = x
        reversed_num = 0

        while x > 0:

            digit = x % 10

            reversed_num = (
                reversed_num * 10
                + digit
            )

            x //= 10

        return original == reversed_num`
          },

          {
            language: "javascript",

            code: `function isPalindrome(x) {

    if(x < 0)
        return false;

    const original = x;
    let reversed = 0;

    while(x > 0) {

        const digit =
            x % 10;

        reversed =
            reversed * 10 + digit;

        x = Math.floor(x / 10);
    }

    return original === reversed;
}`
          }

        ]
      }
    },


    // ============================================================
    // 2. REVERSE INTEGER
    // ============================================================

    {
      id: "reverse-integer",

      title: "Reverse Integer",

      difficulty: "Medium",

      problem:
        "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range, return 0.",

      input:
        `x = 123`,

      output:
        `321`,

      explanation:
        "The digits of 123 reversed are 321.",

      codeSolution: {

        explanation:
          "Extract the last digit using modulo 10 and build the reversed number. Check for 32-bit integer overflow before adding the next digit.",

        time: "O(log n)",

        space: "O(1)",

        solutions: [

          {
            language: "cpp",

            code: `class Solution {

public:

    int reverse(int x) {

        long long result = 0;

        while(x != 0) {

            int digit = x % 10;

            result =
                result * 10 + digit;

            x /= 10;

            if(
                result > INT_MAX ||
                result < INT_MIN
            ) {

                return 0;
            }
        }

        return (int)result;
    }
};`
          },

          {
            language: "java",

            code: `class Solution {

    public int reverse(int x) {

        long result = 0;

        while(x != 0) {

            int digit = x % 10;

            result =
                result * 10 + digit;

            x /= 10;

            if(
                result > Integer.MAX_VALUE ||
                result < Integer.MIN_VALUE
            ) {

                return 0;
            }
        }

        return (int)result;
    }
}`
          },

          {
            language: "python",

            code: `class Solution:

    def reverse(self, x):

        sign = -1 if x < 0 else 1

        x = abs(x)

        reversed_num = int(
            str(x)[::-1]
        )

        reversed_num *= sign

        if (
            reversed_num <
            -(2 ** 31)
            or
            reversed_num >
            2 ** 31 - 1
        ):

            return 0

        return reversed_num`
          },

          {
            language: "javascript",

            code: `function reverse(x) {

    let sign =
        x < 0 ? -1 : 1;

    x = Math.abs(x);

    let reversed = 0;

    while(x > 0) {

        const digit =
            x % 10;

        reversed =
            reversed * 10 + digit;

        x =
            Math.floor(x / 10);
    }

    reversed *= sign;

    if(
        reversed <
            -(2 ** 31) ||
        reversed >
            2 ** 31 - 1
    ) {

        return 0;
    }

    return reversed;
}`
          }

        ]
      }
    },


    // ============================================================
    // 3. FIZZ BUZZ
    // ============================================================

    {
      id: "fizz-buzz",

      title: "Fizz Buzz",

      difficulty: "Easy",

      problem:
        "Given an integer n, return a string array where each index follows these rules: if the number is divisible by 3, return Fizz; if divisible by 5, return Buzz; if divisible by both, return FizzBuzz; otherwise return the number itself.",

      input:
        `n = 15`,

      output:
        `["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]`,

      explanation:
        "Numbers divisible by 3 are replaced with Fizz, numbers divisible by 5 with Buzz, and numbers divisible by both with FizzBuzz.",

      codeSolution: {

        explanation:
          "Loop from 1 to n and check divisibility by 3 and 5. Check divisibility by both first.",

        time: "O(n)",

        space: "O(n)",

        solutions: [

          {
            language: "cpp",

            code: `class Solution {

public:

    vector<string> fizzBuzz(int n) {

        vector<string> answer;

        for(int i = 1; i <= n; i++) {

            if(
                i % 3 == 0 &&
                i % 5 == 0
            ) {

                answer.push_back(
                    "FizzBuzz"
                );

            } else if(i % 3 == 0) {

                answer.push_back(
                    "Fizz"
                );

            } else if(i % 5 == 0) {

                answer.push_back(
                    "Buzz"
                );

            } else {

                answer.push_back(
                    to_string(i)
                );
            }
        }

        return answer;
    }
};`
          },

          {
            language: "java",

            code: `class Solution {

    public List<String> fizzBuzz(int n) {

        List<String> answer =
            new ArrayList<>();

        for(int i = 1; i <= n; i++) {

            if(
                i % 3 == 0 &&
                i % 5 == 0
            ) {

                answer.add("FizzBuzz");

            } else if(i % 3 == 0) {

                answer.add("Fizz");

            } else if(i % 5 == 0) {

                answer.add("Buzz");

            } else {

                answer.add(
                    String.valueOf(i)
                );
            }
        }

        return answer;
    }
}`
          },

          {
            language: "python",

            code: `class Solution:

    def fizzBuzz(self, n):

        answer = []

        for i in range(1, n + 1):

            if (
                i % 3 == 0
                and i % 5 == 0
            ):

                answer.append("FizzBuzz")

            elif i % 3 == 0:

                answer.append("Fizz")

            elif i % 5 == 0:

                answer.append("Buzz")

            else:

                answer.append(str(i))

        return answer`
          },

          {
            language: "javascript",

            code: `function fizzBuzz(n) {

    const answer = [];

    for(let i = 1; i <= n; i++) {

        if(
            i % 3 === 0 &&
            i % 5 === 0
        ) {

            answer.push("FizzBuzz");

        } else if(i % 3 === 0) {

            answer.push("Fizz");

        } else if(i % 5 === 0) {

            answer.push("Buzz");

        } else {

            answer.push(
                String(i)
            );
        }
    }

    return answer;
}`
          }

        ]
      }
    },


    // ============================================================
    // 4. HAPPY NUMBER
    // ============================================================

    {
      id: "happy-number",

      title: "Happy Number",

      difficulty: "Easy",

      problem:
        "Write an algorithm to determine if a number n is happy. A happy number is a number that eventually reaches 1 when repeatedly replaced by the sum of the squares of its digits.",

      input:
        `n = 19`,

      output:
        `true`,

      explanation:
        "19 → 1² + 9² = 82 → 8² + 2² = 68 → 6² + 8² = 100 → 1² + 0² + 0² = 1. Therefore, 19 is a happy number.",

      codeSolution: {

        explanation:
          "Use a set to store numbers that have already appeared. If we reach 1, the number is happy. If a number repeats, a cycle exists and the number is not happy.",

        time: "O(log n)",

        space: "O(log n)",

        solutions: [

          {
            language: "cpp",

            code: `class Solution {

public:

    int digitSquareSum(int n) {

        int sum = 0;

        while(n > 0) {

            int digit =
                n % 10;

            sum +=
                digit * digit;

            n /= 10;
        }

        return sum;
    }


    bool isHappy(int n) {

        unordered_set<int> seen;

        while(
            n != 1 &&
            !seen.count(n)
        ) {

            seen.insert(n);

            n =
                digitSquareSum(n);
        }

        return n == 1;
    }
};`
          },

          {
            language: "java",

            code: `class Solution {

    private int digitSquareSum(int n) {

        int sum = 0;

        while(n > 0) {

            int digit =
                n % 10;

            sum +=
                digit * digit;

            n /= 10;
        }

        return sum;
    }


    public boolean isHappy(int n) {

        Set<Integer> seen =
            new HashSet<>();

        while(
            n != 1 &&
            !seen.contains(n)
        ) {

            seen.add(n);

            n =
                digitSquareSum(n);
        }

        return n == 1;
    }
}`
          },

          {
            language: "python",

            code: `class Solution:

    def isHappy(self, n):

        seen = set()

        while n != 1:

            if n in seen:
                return False

            seen.add(n)

            total = 0

            while n > 0:

                digit = n % 10

                total += (
                    digit * digit
                )

                n //= 10

            n = total

        return True`
          },

          {
            language: "javascript",

            code: `function isHappy(n) {

    const seen =
        new Set();

    while(n !== 1) {

        if(seen.has(n))
            return false;

        seen.add(n);

        let sum = 0;

        while(n > 0) {

            const digit =
                n % 10;

            sum +=
                digit * digit;

            n =
                Math.floor(n / 10);
        }

        n = sum;
    }

    return true;
}`
          }

        ]
      }
    },


    // ============================================================
    // 5. POW(X, N)
    // ============================================================

    {
      id: "pow-x-n",

      title: "Pow(x, n)",

      difficulty: "Medium",

      problem:
        "Implement pow(x, n), which calculates x raised to the power n.",

      input:
        `x = 2.0
n = 10`,

      output:
        `1024.0`,

      explanation:
        "2 raised to the power 10 is 1024. Instead of multiplying x n times, binary exponentiation can reduce the number of operations.",

      codeSolution: {

        explanation:
          "Use binary exponentiation. If n is even, square x and divide n by 2. If n is odd, multiply the result by x and decrease n.",

        time: "O(log n)",

        space: "O(1)",

        solutions: [

          {
            language: "cpp",

            code: `class Solution {

public:

    double myPow(
        double x,
        int n
    ) {

        long long power = n;

        if(power < 0) {

            x = 1 / x;
            power = -power;
        }

        double result = 1.0;

        while(power > 0) {

            if(power % 2 == 1) {

                result *= x;
            }

            x *= x;

            power /= 2;
        }

        return result;
    }
};`
          },

          {
            language: "java",

            code: `class Solution {

    public double myPow(
        double x,
        int n
    ) {

        long power = n;

        if(power < 0) {

            x = 1 / x;
            power = -power;
        }

        double result = 1.0;

        while(power > 0) {

            if(power % 2 == 1) {

                result *= x;
            }

            x *= x;

            power /= 2;
        }

        return result;
    }
}`
          },

          {
            language: "python",

            code: `class Solution:

    def myPow(self, x, n):

        if n < 0:

            x = 1 / x
            n = -n

        result = 1.0

        while n > 0:

            if n % 2 == 1:

                result *= x

            x *= x

            n //= 2

        return result`
          },

          {
            language: "javascript",

            code: `function myPow(x, n) {

    if(n < 0) {

        x = 1 / x;
        n = -n;
    }

    let result = 1;

    while(n > 0) {

        if(n % 2 === 1) {

            result *= x;
        }

        x *= x;

        n = Math.floor(n / 2);
    }

    return result;
}`
          }

        ]
      }
    }

  ]
};