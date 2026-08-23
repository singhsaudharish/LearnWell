import { CodingCategory } from "../../types/coding";

export const stack: CodingCategory = {
  title: "Stack",

  description:
    "Practice important stack and monotonic stack interview questions from beginner to intermediate level.",

  questions: [

    // ============================================================
    // 1. VALID PARENTHESES
    // ============================================================

    {
      id: "valid-parentheses",

      title: "Valid Parentheses",

      difficulty: "Easy",

      problem:
        "Given a string s containing only the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if every opening bracket has a corresponding closing bracket of the same type and brackets are closed in the correct order.",

      input:
        `s = "({[]})"`,

      output:
        `true`,

      explanation:
        "Use a stack to store opening brackets. Whenever a closing bracket appears, check whether it matches the most recent opening bracket.",

      codeSolution: {

        explanation:
          "Push every opening bracket onto the stack. For a closing bracket, compare it with the top of the stack. If they do not match, the string is invalid.",

        time: "O(n)",

        space: "O(n)",

        solutions: [

          {
            language: "cpp",

            code: `class Solution {

public:

    bool isValid(string s) {

        stack<char> st;

        for(char ch : s) {

            if(
                ch == '(' ||
                ch == '{' ||
                ch == '['
            ) {

                st.push(ch);

            } else {

                if(st.empty())
                    return false;

                char top = st.top();
                st.pop();

                if(
                    (ch == ')' && top != '(') ||
                    (ch == '}' && top != '{') ||
                    (ch == ']' && top != '[')
                ) {

                    return false;
                }
            }
        }

        return st.empty();
    }
};`
          },

          {
            language: "java",

            code: `class Solution {

    public boolean isValid(String s) {

        Stack<Character> stack =
            new Stack<>();

        for(char ch : s.toCharArray()) {

            if(
                ch == '(' ||
                ch == '{' ||
                ch == '['
            ) {

                stack.push(ch);

            } else {

                if(stack.isEmpty())
                    return false;

                char top =
                    stack.pop();

                if(
                    (ch == ')' && top != '(') ||
                    (ch == '}' && top != '{') ||
                    (ch == ']' && top != '[')
                ) {

                    return false;
                }
            }
        }

        return stack.isEmpty();
    }
}`
          },

          {
            language: "python",

            code: `class Solution:

    def isValid(self, s):

        stack = []

        pairs = {
            ')': '(',
            '}': '{',
            ']': '['
        }

        for ch in s:

            if ch in '({[':

                stack.append(ch)

            else:

                if not stack:
                    return False

                if stack.pop() != pairs[ch]:
                    return False

        return not stack`
          },

          {
            language: "javascript",

            code: `function isValid(s) {

    const stack = [];

    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for(const ch of s) {

        if(
            ch === '(' ||
            ch === '{' ||
            ch === '['
        ) {

            stack.push(ch);

        } else {

            if(stack.length === 0)
                return false;

            if(
                stack.pop() !== pairs[ch]
            ) {

                return false;
            }
        }
    }

    return stack.length === 0;
}`
          }

        ]
      }
    },


    // ============================================================
    // 2. MIN STACK
    // ============================================================

    {
      id: "min-stack",

      title: "Min Stack",

      difficulty: "Medium",

      problem:
        "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",

      input:
        `push(5)
push(3)
push(7)
getMin()`,

      output:
        `3`,

      explanation:
        "The minimum element currently present in the stack is 3.",

      codeSolution: {

        explanation:
          "Maintain two stacks. The first stores all values, while the second stores the minimum value at every level.",

        time: "O(1) per operation",

        space: "O(n)",

        solutions: [

          {
            language: "cpp",

            code: `class MinStack {

private:

    stack<int> st;
    stack<int> minSt;

public:

    void push(int val) {

        st.push(val);

        if(
            minSt.empty() ||
            val <= minSt.top()
        ) {

            minSt.push(val);
        }
    }

    void pop() {

        if(st.top() == minSt.top())
            minSt.pop();

        st.pop();
    }

    int top() {

        return st.top();
    }

    int getMin() {

        return minSt.top();
    }
};`
          },

          {
            language: "java",

            code: `class MinStack {

    Stack<Integer> stack =
        new Stack<>();

    Stack<Integer> minStack =
        new Stack<>();

    public void push(int val) {

        stack.push(val);

        if(
            minStack.isEmpty() ||
            val <= minStack.peek()
        ) {

            minStack.push(val);
        }
    }

    public void pop() {

        if(
            stack.peek().equals(
                minStack.peek()
            )
        ) {

            minStack.pop();
        }

        stack.pop();
    }

    public int top() {

        return stack.peek();
    }

    public int getMin() {

        return minStack.peek();
    }
}`
          },

          {
            language: "python",

            code: `class MinStack:

    def __init__(self):

        self.stack = []
        self.minStack = []

    def push(self, val):

        self.stack.append(val)

        if (
            not self.minStack
            or val <= self.minStack[-1]
        ):

            self.minStack.append(val)

    def pop(self):

        if (
            self.stack[-1]
            == self.minStack[-1]
        ):

            self.minStack.pop()

        self.stack.pop()

    def top(self):

        return self.stack[-1]

    def getMin(self):

        return self.minStack[-1]`
          },

          {
            language: "javascript",

            code: `class MinStack {

    constructor() {

        this.stack = [];
        this.minStack = [];
    }

    push(val) {

        this.stack.push(val);

        if(
            this.minStack.length === 0 ||
            val <= this.minStack[
                this.minStack.length - 1
            ]
        ) {

            this.minStack.push(val);
        }
    }

    pop() {

        if(
            this.stack[
                this.stack.length - 1
            ] ===
            this.minStack[
                this.minStack.length - 1
            ]
        ) {

            this.minStack.pop();
        }

        this.stack.pop();
    }

    top() {

        return this.stack[
            this.stack.length - 1
        ];
    }

    getMin() {

        return this.minStack[
            this.minStack.length - 1
        ];
    }
}`
          }

        ]
      }
    },


    // ============================================================
    // 3. EVALUATE REVERSE POLISH NOTATION
    // ============================================================

    {
      id: "evaluate-reverse-polish-notation",

      title: "Evaluate Reverse Polish Notation",

      difficulty: "Medium",

      problem:
        "Evaluate the value of an arithmetic expression in Reverse Polish Notation. Valid operators are +, -, *, and /. Each operand may be an integer or another expression.",

      input:
        `tokens = ["2","1","+","3","*"]`,

      output:
        `9`,

      explanation:
        "First calculate 2 + 1 = 3. Then calculate 3 × 3 = 9.",

      codeSolution: {

        explanation:
          "Use a stack to store numbers. When an operator appears, pop the top two numbers, apply the operator, and push the result back onto the stack.",

        time: "O(n)",

        space: "O(n)",

        solutions: [

          {
            language: "cpp",

            code: `class Solution {

public:

    int evalRPN(
        vector<string>& tokens
    ) {

        stack<int> st;

        for(string token : tokens) {

            if(
                token == "+" ||
                token == "-" ||
                token == "*" ||
                token == "/"
            ) {

                int b = st.top();
                st.pop();

                int a = st.top();
                st.pop();

                if(token == "+")
                    st.push(a + b);

                else if(token == "-")
                    st.push(a - b);

                else if(token == "*")
                    st.push(a * b);

                else
                    st.push(a / b);

            } else {

                st.push(
                    stoi(token)
                );
            }
        }

        return st.top();
    }
};`
          },

          {
            language: "java",

            code: `class Solution {

    public int evalRPN(
        String[] tokens
    ) {

        Stack<Integer> stack =
            new Stack<>();

        for(String token : tokens) {

            if(
                token.equals("+") ||
                token.equals("-") ||
                token.equals("*") ||
                token.equals("/")
            ) {

                int b = stack.pop();
                int a = stack.pop();

                switch(token) {

                    case "+":
                        stack.push(a + b);
                        break;

                    case "-":
                        stack.push(a - b);
                        break;

                    case "*":
                        stack.push(a * b);
                        break;

                    case "/":
                        stack.push(a / b);
                        break;
                }

            } else {

                stack.push(
                    Integer.parseInt(token)
                );
            }
        }

        return stack.peek();
    }
}`
          },

          {
            language: "python",

            code: `class Solution:

    def evalRPN(self, tokens):

        stack = []

        for token in tokens:

            if token in "+-*/":

                b = stack.pop()
                a = stack.pop()

                if token == "+":
                    result = a + b

                elif token == "-":
                    result = a - b

                elif token == "*":
                    result = a * b

                else:
                    result = int(a / b)

                stack.append(result)

            else:

                stack.append(
                    int(token)
                )

        return stack[-1]`
          },

          {
            language: "javascript",

            code: `function evalRPN(tokens) {

    const stack = [];

    for(const token of tokens) {

        if(
            token === "+" ||
            token === "-" ||
            token === "*" ||
            token === "/"
        ) {

            const b = stack.pop();
            const a = stack.pop();

            let result;

            if(token === "+")
                result = a + b;

            else if(token === "-")
                result = a - b;

            else if(token === "*")
                result = a * b;

            else
                result =
                    Math.trunc(a / b);

            stack.push(result);

        } else {

            stack.push(
                Number(token)
            );
        }
    }

    return stack.pop();
}`
          }

        ]
      }
    },


    // ============================================================
    // 4. DAILY TEMPERATURES
    // ============================================================

    {
      id: "daily-temperatures",

      title: "Daily Temperatures",

      difficulty: "Medium",

      problem:
        "Given an array of daily temperatures, return an array where answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, return 0.",

      input:
        `temperatures = [73,74,75,71,69,72,76,73]`,

      output:
        `[1,1,4,2,1,1,0,0]`,

      explanation:
        "For each temperature, find the next day with a higher temperature. A monotonic decreasing stack allows us to solve this efficiently.",

      codeSolution: {

        explanation:
          "Maintain a stack of indices whose temperatures are waiting for a warmer day. When the current temperature is greater than the temperature at the top index, resolve that index.",

        time: "O(n)",

        space: "O(n)",

        solutions: [

          {
            language: "cpp",

            code: `class Solution {

public:

    vector<int> dailyTemperatures(
        vector<int>& temperatures
    ) {

        int n =
            temperatures.size();

        vector<int> answer(n, 0);

        stack<int> st;

        for(int i = 0; i < n; i++) {

            while(
                !st.empty() &&
                temperatures[i] >
                temperatures[st.top()]
            ) {

                int previous =
                    st.top();

                st.pop();

                answer[previous] =
                    i - previous;
            }

            st.push(i);
        }

        return answer;
    }
};`
          },

          {
            language: "java",

            code: `class Solution {

    public int[] dailyTemperatures(
        int[] temperatures
    ) {

        int n =
            temperatures.length;

        int[] answer =
            new int[n];

        Stack<Integer> stack =
            new Stack<>();

        for(int i = 0; i < n; i++) {

            while(
                !stack.isEmpty() &&
                temperatures[i] >
                temperatures[stack.peek()]
            ) {

                int previous =
                    stack.pop();

                answer[previous] =
                    i - previous;
            }

            stack.push(i);
        }

        return answer;
    }
}`
          },

          {
            language: "python",

            code: `class Solution:

    def dailyTemperatures(
        self,
        temperatures
    ):

        answer = [0] * len(
            temperatures
        )

        stack = []

        for i, temperature in enumerate(
            temperatures
        ):

            while (
                stack and
                temperature >
                temperatures[stack[-1]]
            ):

                previous =
                    stack.pop()

                answer[previous] =
                    i - previous

            stack.append(i)

        return answer`
          },

          {
            language: "javascript",

            code: `function dailyTemperatures(
    temperatures
) {

    const answer =
        new Array(
            temperatures.length
        ).fill(0);

    const stack = [];

    for(
        let i = 0;
        i < temperatures.length;
        i++
    ) {

        while(
            stack.length > 0 &&
            temperatures[i] >
            temperatures[
                stack[stack.length - 1]
            ]
        ) {

            const previous =
                stack.pop();

            answer[previous] =
                i - previous;
        }

        stack.push(i);
    }

    return answer;
}`
          }

        ]
      }
    },


    // ============================================================
    // 5. NEXT GREATER ELEMENT I
    // ============================================================

    {
      id: "next-greater-element",

      title: "Next Greater Element I",

      difficulty: "Medium",

      problem:
        "Given two arrays nums1 and nums2 where nums1 is a subset of nums2, find the next greater element for every element in nums1. The next greater element of an element x is the first element to its right in nums2 that is greater than x.",

      input:
        `nums1 = [4,1,2]
nums2 = [1,3,4,2]`,

      output:
        `[-1,3,-1]`,

      explanation:
        "For 4 there is no greater element to its right. For 1 the next greater element is 3. For 2 there is no greater element.",

      codeSolution: {

        explanation:
          "Use a monotonic decreasing stack while processing nums2. Store the next greater element of each number in a hash map and then use that map to answer nums1.",

        time: "O(n + m)",

        space: "O(n)",

        solutions: [

          {
            language: "cpp",

            code: `class Solution {

public:

    vector<int> nextGreaterElement(
        vector<int>& nums1,
        vector<int>& nums2
    ) {

        unordered_map<int, int> next;
        stack<int> st;

        for(int num : nums2) {

            while(
                !st.empty() &&
                num > st.top()
            ) {

                next[st.top()] =
                    num;

                st.pop();
            }

            st.push(num);
        }

        vector<int> answer;

        for(int num : nums1) {

            if(next.count(num))
                answer.push_back(
                    next[num]
                );

            else
                answer.push_back(-1);
        }

        return answer;
    }
};`
          },

          {
            language: "java",

            code: `class Solution {

    public int[] nextGreaterElement(
        int[] nums1,
        int[] nums2
    ) {

        Map<Integer, Integer> map =
            new HashMap<>();

        Stack<Integer> stack =
            new Stack<>();

        for(int num : nums2) {

            while(
                !stack.isEmpty() &&
                num > stack.peek()
            ) {

                map.put(
                    stack.pop(),
                    num
                );
            }

            stack.push(num);
        }

        int[] answer =
            new int[nums1.length];

        for(int i = 0; i < nums1.length; i++) {

            answer[i] =
                map.getOrDefault(
                    nums1[i],
                    -1
                );
        }

        return answer;
    }
}`
          },

          {
            language: "python",

            code: `class Solution:

    def nextGreaterElement(
        self,
        nums1,
        nums2
    ):

        stack = []
        next_greater = {}

        for num in nums2:

            while (
                stack and
                num > stack[-1]
            ):

                previous = stack.pop()

                next_greater[previous] =
                    num

            stack.append(num)

        return [
            next_greater.get(
                num,
                -1
            )
            for num in nums1
        ]`
          },

          {
            language: "javascript",

            code: `function nextGreaterElement(
    nums1,
    nums2
) {

    const stack = [];
    const map = new Map();

    for(const num of nums2) {

        while(
            stack.length > 0 &&
            num >
            stack[stack.length - 1]
        ) {

            map.set(
                stack.pop(),
                num
            );
        }

        stack.push(num);
    }

    return nums1.map(
        num =>
            map.has(num)
                ? map.get(num)
                : -1
    );
}`
          }

        ]
      }
    }

  ]
};