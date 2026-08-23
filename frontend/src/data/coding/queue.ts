import { CodingCategory } from "../../types/coding";

export const queue: CodingCategory = {
  title: "Queue",

  description:
    "Practice important queue, deque, circular queue, and sliding window interview questions.",

  questions: [

    // ============================================================
    // 1. IMPLEMENT QUEUE USING STACKS
    // ============================================================

    {
      id: "implement-queue-using-stacks",

      title: "Implement Queue Using Stacks",

      difficulty: "Easy",

      problem:
        "Implement a first in first out (FIFO) queue using only two stacks. The queue should support push, pop, peek, and empty operations.",

      input:
        `push(1)
push(2)
peek()
pop()`,

      output:
        `1`,

      explanation:
        "A queue removes elements in the same order they were inserted. Two stacks can simulate this behavior by using one stack for incoming elements and another stack for outgoing elements.",

      codeSolution: {

        explanation:
          "Use an input stack and an output stack. When the output stack is empty, move all elements from the input stack to the output stack. This reverses their order and gives FIFO behavior.",

        time: "Amortized O(1) per operation",

        space: "O(n)",

        solutions: [

          {
            language: "cpp",

            code: `class MyQueue {

private:

    stack<int> input;
    stack<int> output;

    void transfer() {

        if(output.empty()) {

            while(!input.empty()) {

                output.push(
                    input.top()
                );

                input.pop();
            }
        }
    }

public:

    void push(int x) {

        input.push(x);
    }

    int pop() {

        transfer();

        int value =
            output.top();

        output.pop();

        return value;
    }

    int peek() {

        transfer();

        return output.top();
    }

    bool empty() {

        return
            input.empty() &&
            output.empty();
    }
};`
          },

          {
            language: "java",

            code: `class MyQueue {

    Stack<Integer> input =
        new Stack<>();

    Stack<Integer> output =
        new Stack<>();

    private void transfer() {

        if(output.isEmpty()) {

            while(!input.isEmpty()) {

                output.push(
                    input.pop()
                );
            }
        }
    }

    public void push(int x) {

        input.push(x);
    }

    public int pop() {

        transfer();

        return output.pop();
    }

    public int peek() {

        transfer();

        return output.peek();
    }

    public boolean empty() {

        return
            input.isEmpty() &&
            output.isEmpty();
    }
}`
          },

          {
            language: "python",

            code: `class MyQueue:

    def __init__(self):

        self.input = []
        self.output = []

    def transfer(self):

        if not self.output:

            while self.input:

                self.output.append(
                    self.input.pop()
                )

    def push(self, x):

        self.input.append(x)

    def pop(self):

        self.transfer()

        return self.output.pop()

    def peek(self):

        self.transfer()

        return self.output[-1]

    def empty(self):

        return (
            not self.input
            and
            not self.output
        )`
          },

          {
            language: "javascript",

            code: `class MyQueue {

    constructor() {

        this.input = [];
        this.output = [];
    }

    transfer() {

        if(this.output.length === 0) {

            while(this.input.length > 0) {

                this.output.push(
                    this.input.pop()
                );
            }
        }
    }

    push(x) {

        this.input.push(x);
    }

    pop() {

        this.transfer();

        return this.output.pop();
    }

    peek() {

        this.transfer();

        return this.output[
            this.output.length - 1
        ];
    }

    empty() {

        return (
            this.input.length === 0 &&
            this.output.length === 0
        );
    }
}`
          }

        ]
      }
    },


    // ============================================================
    // 2. IMPLEMENT STACK USING QUEUES
    // ============================================================

    {
      id: "implement-stack-using-queues",

      title: "Implement Stack Using Queues",

      difficulty: "Easy",

      problem:
        "Implement a last in first out (LIFO) stack using only queues. The stack should support push, pop, top, and empty operations.",

      input:
        `push(1)
push(2)
top()
pop()`,

      output:
        `2`,

      explanation:
        "A stack removes the most recently inserted element. By rotating the queue after every push, the newest element can be placed at the front.",

      codeSolution: {

        explanation:
          "Use one queue. After adding a new element, rotate all previous elements behind it. This makes the newest element the front of the queue.",

        time: "Push O(n), Pop O(1)",

        space: "O(n)",

        solutions: [

          {
            language: "cpp",

            code: `class MyStack {

private:

    queue<int> q;

public:

    void push(int x) {

        q.push(x);

        int size =
            q.size();

        for(int i = 0; i < size - 1; i++) {

            q.push(
                q.front()
            );

            q.pop();
        }
    }

    int pop() {

        int value =
            q.front();

        q.pop();

        return value;
    }

    int top() {

        return q.front();
    }

    bool empty() {

        return q.empty();
    }
};`
          },

          {
            language: "java",

            code: `class MyStack {

    Queue<Integer> q =
        new LinkedList<>();

    public void push(int x) {

        q.offer(x);

        int size =
            q.size();

        for(int i = 0; i < size - 1; i++) {

            q.offer(
                q.poll()
            );
        }
    }

    public int pop() {

        return q.poll();
    }

    public int top() {

        return q.peek();
    }

    public boolean empty() {

        return q.isEmpty();
    }
}`
          },

          {
            language: "python",

            code: `class MyStack:

    def __init__(self):

        self.q = deque()

    def push(self, x):

        self.q.append(x)

        for _ in range(
            len(self.q) - 1
        ):

            self.q.append(
                self.q.popleft()
            )

    def pop(self):

        return self.q.popleft()

    def top(self):

        return self.q[0]

    def empty(self):

        return len(self.q) == 0`
          },

          {
            language: "javascript",

            code: `class MyStack {

    constructor() {

        this.q = [];
    }

    push(x) {

        this.q.push(x);

        const size =
            this.q.length;

        for(
            let i = 0;
            i < size - 1;
            i++
        ) {

            this.q.push(
                this.q.shift()
            );
        }
    }

    pop() {

        return this.q.shift();
    }

    top() {

        return this.q[0];
    }

    empty() {

        return this.q.length === 0;
    }
}`
          }

        ]
      }
    },


    // ============================================================
    // 3. NUMBER OF RECENT CALLS
    // ============================================================

    {
      id: "number-of-recent-calls",

      title: "Number of Recent Calls",

      difficulty: "Easy",

      problem:
        "You have a RecentCounter class that counts the number of recent requests within a given time range. Implement the ping method, which returns the number of requests that have happened in the inclusive range [t - 3000, t].",

      input:
        `ping(1)
ping(100)
ping(3001)
ping(3002)`,

      output:
        `[1,2,3,3]`,

      explanation:
        "Maintain a queue of request times. For every new request, remove all timestamps that are older than t - 3000.",

      codeSolution: {

        explanation:
          "Use a queue to store timestamps. Add every new timestamp and remove timestamps that fall outside the last 3000 milliseconds.",

        time: "O(n) total",

        space: "O(n)",

        solutions: [

          {
            language: "cpp",

            code: `class RecentCounter {

private:

    queue<int> q;

public:

    int ping(int t) {

        q.push(t);

        while(
            q.front() < t - 3000
        ) {

            q.pop();
        }

        return q.size();
    }
};`
          },

          {
            language: "java",

            code: `class RecentCounter {

    Queue<Integer> q =
        new LinkedList<>();

    public int ping(int t) {

        q.offer(t);

        while(
            q.peek() < t - 3000
        ) {

            q.poll();
        }

        return q.size();
    }
}`
          },

          {
            language: "python",

            code: `class RecentCounter:

    def __init__(self):

        self.q = deque()

    def ping(self, t):

        self.q.append(t)

        while self.q[0] < t - 3000:

            self.q.popleft()

        return len(self.q)`
          },

          {
            language: "javascript",

            code: `class RecentCounter {

    constructor() {

        this.q = [];
        this.front = 0;
    }

    ping(t) {

        this.q.push(t);

        while(
            this.q[this.front]
            < t - 3000
        ) {

            this.front++;
        }

        return (
            this.q.length -
            this.front
        );
    }
}`
          }

        ]
      }
    },


    // ============================================================
    // 4. DESIGN CIRCULAR QUEUE
    // ============================================================

    {
      id: "design-circular-queue",

      title: "Design Circular Queue",

      difficulty: "Medium",

      problem:
        "Design a circular queue with a fixed size. The queue should support enQueue, deQueue, Front, Rear, isEmpty, and isFull operations.",

      input:
        `MyCircularQueue queue(3)

enQueue(1)
enQueue(2)
enQueue(3)
Rear()`,

      output:
        `3`,

      explanation:
        "A circular queue reuses empty spaces at the beginning of the underlying array after elements are removed.",

      codeSolution: {

        explanation:
          "Use an array with front, rear, and size variables. Circular indexing is achieved using (index + 1) % capacity.",

        time: "O(1) per operation",

        space: "O(k)",

        solutions: [

          {
            language: "cpp",

            code: `class MyCircularQueue {

private:

    vector<int> data;

    int frontIndex;
    int size;
    int capacity;

public:

    MyCircularQueue(int k) {

        capacity = k;

        data.resize(k);

        frontIndex = 0;
        size = 0;
    }

    bool enQueue(int value) {

        if(isFull())
            return false;

        int rearIndex =
            (frontIndex + size)
            % capacity;

        data[rearIndex] =
            value;

        size++;

        return true;
    }

    bool deQueue() {

        if(isEmpty())
            return false;

        frontIndex =
            (frontIndex + 1)
            % capacity;

        size--;

        return true;
    }

    int Front() {

        if(isEmpty())
            return -1;

        return data[frontIndex];
    }

    int Rear() {

        if(isEmpty())
            return -1;

        int index =
            (frontIndex + size - 1)
            % capacity;

        return data[index];
    }

    bool isEmpty() {

        return size == 0;
    }

    bool isFull() {

        return size == capacity;
    }
};`
          },

          {
            language: "java",

            code: `class MyCircularQueue {

    private int[] data;

    private int front;
    private int size;
    private int capacity;

    public MyCircularQueue(int k) {

        capacity = k;

        data =
            new int[k];

        front = 0;
        size = 0;
    }

    public boolean enQueue(int value) {

        if(isFull())
            return false;

        int rear =
            (front + size)
            % capacity;

        data[rear] =
            value;

        size++;

        return true;
    }

    public boolean deQueue() {

        if(isEmpty())
            return false;

        front =
            (front + 1)
            % capacity;

        size--;

        return true;
    }

    public int Front() {

        if(isEmpty())
            return -1;

        return data[front];
    }

    public int Rear() {

        if(isEmpty())
            return -1;

        int index =
            (front + size - 1)
            % capacity;

        return data[index];
    }

    public boolean isEmpty() {

        return size == 0;
    }

    public boolean isFull() {

        return size == capacity;
    }
}`
          },

          {
            language: "python",

            code: `class MyCircularQueue:

    def __init__(self, k):

        self.data = [0] * k

        self.front = 0
        self.size = 0
        self.capacity = k

    def enQueue(self, value):

        if self.isFull():
            return False

        rear = (
            self.front +
            self.size
        ) % self.capacity

        self.data[rear] = value

        self.size += 1

        return True

    def deQueue(self):

        if self.isEmpty():
            return False

        self.front = (
            self.front + 1
        ) % self.capacity

        self.size -= 1

        return True

    def Front(self):

        if self.isEmpty():
            return -1

        return self.data[self.front]

    def Rear(self):

        if self.isEmpty():
            return -1

        index = (
            self.front +
            self.size - 1
        ) % self.capacity

        return self.data[index]

    def isEmpty(self):

        return self.size == 0

    def isFull(self):

        return self.size == self.capacity`
          },

          {
            language: "javascript",

            code: `class MyCircularQueue {

    constructor(k) {

        this.data =
            new Array(k);

        this.front = 0;
        this.size = 0;
        this.capacity = k;
    }

    enQueue(value) {

        if(this.isFull())
            return false;

        const rear =
            (
                this.front +
                this.size
            ) % this.capacity;

        this.data[rear] =
            value;

        this.size++;

        return true;
    }

    deQueue() {

        if(this.isEmpty())
            return false;

        this.front =
            (
                this.front + 1
            ) % this.capacity;

        this.size--;

        return true;
    }

    Front() {

        if(this.isEmpty())
            return -1;

        return this.data[
            this.front
        ];
    }

    Rear() {

        if(this.isEmpty())
            return -1;

        const index =
            (
                this.front +
                this.size - 1
            ) % this.capacity;

        return this.data[index];
    }

    isEmpty() {

        return this.size === 0;
    }

    isFull() {

        return (
            this.size ===
            this.capacity
        );
    }
}`
          }

        ]
      }
    },


    // ============================================================
    // 5. SLIDING WINDOW MAXIMUM
    // ============================================================

    {
      id: "sliding-window-maximum",

      title: "Sliding Window Maximum",

      difficulty: "Hard",

      problem:
        "Given an array of integers nums and an integer k, return the maximum value in each sliding window of size k.",

      input:
        `nums = [1,3,-1,-3,5,3,6,7]
k = 3`,

      output:
        `[3,3,5,5,6,7]`,

      explanation:
        "For every window of size 3, return the largest element. A monotonic deque keeps potential maximum elements in decreasing order.",

      codeSolution: {

        explanation:
          "Maintain a deque containing indices of elements in decreasing order of value. Remove indices outside the current window and remove smaller values from the back.",

        time: "O(n)",

        space: "O(k)",

        solutions: [

          {
            language: "cpp",

            code: `class Solution {

public:

    vector<int> maxSlidingWindow(
        vector<int>& nums,
        int k
    ) {

        deque<int> dq;

        vector<int> answer;

        for(int i = 0; i < nums.size(); i++) {

            while(
                !dq.empty() &&
                dq.front() <= i - k
            ) {

                dq.pop_front();
            }

            while(
                !dq.empty() &&
                nums[dq.back()] <= nums[i]
            ) {

                dq.pop_back();
            }

            dq.push_back(i);

            if(i >= k - 1) {

                answer.push_back(
                    nums[dq.front()]
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

    public int[] maxSlidingWindow(
        int[] nums,
        int k
    ) {

        Deque<Integer> dq =
            new ArrayDeque<>();

        int[] answer =
            new int[
                nums.length - k + 1
            ];

        int index = 0;

        for(int i = 0; i < nums.length; i++) {

            while(
                !dq.isEmpty() &&
                dq.peekFirst() <= i - k
            ) {

                dq.pollFirst();
            }

            while(
                !dq.isEmpty() &&
                nums[dq.peekLast()]
                    <= nums[i]
            ) {

                dq.pollLast();
            }

            dq.offerLast(i);

            if(i >= k - 1) {

                answer[index++] =
                    nums[dq.peekFirst()];
            }
        }

        return answer;
    }
}`
          },

          {
            language: "python",

            code: `class Solution:

    def maxSlidingWindow(
        self,
        nums,
        k
    ):

        dq = deque()

        answer = []

        for i in range(len(nums)):

            while (
                dq and
                dq[0] <= i - k
            ):

                dq.popleft()

            while (
                dq and
                nums[dq[-1]]
                <= nums[i]
            ):

                dq.pop()

            dq.append(i)

            if i >= k - 1:

                answer.append(
                    nums[dq[0]]
                )

        return answer`
          },

          {
            language: "javascript",

            code: `function maxSlidingWindow(
    nums,
    k
) {

    const dq = [];

    const answer = [];

    for(
        let i = 0;
        i < nums.length;
        i++
    ) {

        while(
            dq.length > 0 &&
            dq[0] <= i - k
        ) {

            dq.shift();
        }

        while(
            dq.length > 0 &&
            nums[
                dq[dq.length - 1]
            ] <= nums[i]
        ) {

            dq.pop();
        }

        dq.push(i);

        if(i >= k - 1) {

            answer.push(
                nums[dq[0]]
            );
        }
    }

    return answer;
}`
          }

        ]
      }
    }

  ]
};