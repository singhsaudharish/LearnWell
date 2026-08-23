export const dsaContent = {
  title: "Data Structures & Algorithms",
  description:
    "Learn Data Structures and Algorithms from beginner to advanced with theory, examples, and practice questions.",

  sections: [
    {
      title: "Introduction to Data Structures and Algorithms",
      content: `
Data Structures and Algorithms (DSA) are the foundation of efficient programming.

A Data Structure is a way of organizing and storing data efficiently.

An Algorithm is a step-by-step procedure used to solve a problem.

Learning DSA helps you:

• Improve problem-solving skills
• Write optimized programs
• Crack coding interviews
• Build efficient software
• Understand how applications work internally
      `,
    },

    {
      title: "Why Learn DSA?",
      content: `
Advantages of DSA:

• Faster programs
• Better memory management
• Improved coding skills
• Efficient searching and sorting
• Required for software engineering interviews
• Used in operating systems, databases, networking, and AI

Popular companies that ask DSA questions:

• Google
• Microsoft
• Amazon
• Meta
• Apple
• Netflix
• Adobe
      `,
    },

    {
      title: "Types of Data Structures",
      content: `
Data Structures are mainly divided into two categories.

Linear Data Structures

• Array
• Linked List
• Stack
• Queue

Non-Linear Data Structures

• Tree
• Graph
• Heap
• Trie
      `,
    },

    {
      title: "Algorithm Characteristics",
      content: `
A good algorithm should have the following properties:

• Correctness
• Efficiency
• Simplicity
• Finiteness
• Definiteness
• Input
• Output

Algorithms should solve problems in minimum time using minimum memory.
      `,
    },

    {
      title: "Time Complexity",
      content: `
Time Complexity measures how much time an algorithm takes as the input size increases.

Common Time Complexities:

O(1)      Constant
O(log n) Logarithmic
O(n)      Linear
O(n log n)
O(n²)
O(2ⁿ)
O(n!)

Smaller time complexity means faster execution.
      `,
    },

    {
      title: "Space Complexity",
      content: `
Space Complexity measures the amount of memory used by an algorithm.

Examples:

O(1)
Constant memory

O(n)
Extra memory proportional to input size

Efficient programs should optimize both time and memory.
      `,
    },

    {
      title: "Big-O Notation",
      content: `
Big-O Notation describes the worst-case performance of an algorithm.

Examples:

Accessing an array element
O(1)

Linear Search
O(n)

Binary Search
O(log n)

Bubble Sort
O(n²)

Merge Sort
O(n log n)
      `,
    },

    {
      title: "Arrays",
      content: `
An Array stores multiple elements of the same type in contiguous memory locations.

Advantages

• Fast access
• Easy traversal
• Efficient memory usage

Disadvantages

• Fixed size
• Costly insertion and deletion
      `,
      code: `#include <iostream>

using namespace std;

int main()
{
    int numbers[5] = {10,20,30,40,50};

    for(int i=0;i<5;i++)
    {
        cout << numbers[i] << " ";
    }

    return 0;
}`,
      language: "cpp",
      output: "10 20 30 40 50",
      tip: "Array indexing always starts from 0.",
    },

    {
      title: "Searching Algorithms",
      content: `
Searching means finding a particular element from a collection.

Two popular searching algorithms are:

• Linear Search
• Binary Search

Binary Search is much faster but requires the array to be sorted.
      `,
    },

    {
      title: "Linear Search",
      content: `
Linear Search checks every element one by one until the target element is found.

Time Complexity

Best Case
O(1)

Worst Case
O(n)
      `,
      code: `#include <iostream>

using namespace std;

int main()
{
    int arr[5]={10,20,30,40,50};

    int target=40;

    for(int i=0;i<5;i++)
    {
        if(arr[i]==target)
        {
            cout<<"Element Found";
            return 0;
        }
    }

    cout<<"Element Not Found";
}`,
      language: "cpp",
      output: "Element Found",
    },

    {
      title: "Binary Search",
      content: `
Binary Search works only on sorted arrays.

It repeatedly divides the search space into two halves.

Time Complexity

Best Case
O(1)

Worst Case
O(log n)
      `,
      code: `#include <iostream>

using namespace std;

int main()
{
    int arr[]={10,20,30,40,50};

    int low=0;
    int high=4;
    int target=30;

    while(low<=high)
    {
        int mid=(low+high)/2;

        if(arr[mid]==target)
        {
            cout<<"Found";
            return 0;
        }

        if(arr[mid]<target)
            low=mid+1;
        else
            high=mid-1;
    }

    cout<<"Not Found";
}`,
      language: "cpp",
      output: "Found",
      tip: "Binary Search is much faster than Linear Search for large sorted datasets.",
    },
        {
      title: "Bubble Sort",
      content: `
Bubble Sort repeatedly compares adjacent elements and swaps them if they are in the wrong order.

Time Complexity

Best Case: O(n)
Average Case: O(n²)
Worst Case: O(n²)

It is easy to understand but inefficient for large datasets.
      `,
      code: `#include <iostream>

using namespace std;

int main()
{
    int arr[5]={5,4,3,2,1};

    for(int i=0;i<5;i++)
    {
        for(int j=0;j<4-i;j++)
        {
            if(arr[j]>arr[j+1])
            {
                swap(arr[j],arr[j+1]);
            }
        }
    }

    for(int i=0;i<5;i++)
        cout<<arr[i]<<" ";

    return 0;
}`,
      language: "cpp",
      output: "1 2 3 4 5",
      tip: "Bubble Sort is mainly used for learning purposes.",
    },

    {
      title: "Selection Sort",
      content: `
Selection Sort repeatedly selects the smallest element and places it in the correct position.

Time Complexity

Best: O(n²)
Average: O(n²)
Worst: O(n²)
      `,
      code: `#include <iostream>

using namespace std;

int main()
{
    int arr[]={64,25,12,22,11};
    int n=5;

    for(int i=0;i<n-1;i++)
    {
        int min=i;

        for(int j=i+1;j<n;j++)
        {
            if(arr[j]<arr[min])
                min=j;
        }

        swap(arr[i],arr[min]);
    }

    for(int i=0;i<n;i++)
        cout<<arr[i]<<" ";

    return 0;
}`,
      language: "cpp",
      output: "11 12 22 25 64",
    },

    {
      title: "Insertion Sort",
      content: `
Insertion Sort builds the sorted array one element at a time.

It performs efficiently for nearly sorted arrays.
      `,
      code: `#include <iostream>

using namespace std;

int main()
{
    int arr[]={9,5,1,4,3};
    int n=5;

    for(int i=1;i<n;i++)
    {
        int key=arr[i];
        int j=i-1;

        while(j>=0 && arr[j]>key)
        {
            arr[j+1]=arr[j];
            j--;
        }

        arr[j+1]=key;
    }

    for(int i=0;i<n;i++)
        cout<<arr[i]<<" ";

    return 0;
}`,
      language: "cpp",
      output: "1 3 4 5 9",
    },

    {
      title: "Merge Sort",
      content: `
Merge Sort follows the Divide and Conquer technique.

Time Complexity

Best: O(n log n)
Average: O(n log n)
Worst: O(n log n)

Space Complexity

O(n)
      `,
      tip: "Merge Sort is stable and works well for large datasets.",
    },

    {
      title: "Quick Sort",
      content: `
Quick Sort also follows Divide and Conquer.

Average Complexity

O(n log n)

Worst Case

O(n²)

It is one of the fastest sorting algorithms in practice.
      `,
      tip: "Choosing a good pivot greatly improves Quick Sort performance.",
    },

    {
      title: "Linked List",
      content: `
A Linked List is a linear data structure where each node contains:

• Data
• Pointer to the next node

Advantages

• Dynamic size
• Easy insertion
• Easy deletion

Disadvantages

• Sequential access
• Extra memory for pointers
      `,
    },

    {
      title: "Types of Linked Lists",
      content: `
Types

• Singly Linked List
• Doubly Linked List
• Circular Linked List
• Circular Doubly Linked List

Each has different advantages depending on the application.
      `,
    },

    {
      title: "Stack",
      content: `
A Stack follows the LIFO (Last In First Out) principle.

Operations

• Push
• Pop
• Peek
• isEmpty

Applications

• Function calls
• Undo operation
• Expression evaluation
• Browser history
      `,
      code: `#include <iostream>
#include <stack>

using namespace std;

int main()
{
    stack<int> s;

    s.push(10);
    s.push(20);
    s.push(30);

    cout<<s.top();

    return 0;
}`,
      language: "cpp",
      output: "30",
    },

    {
      title: "Queue",
      content: `
Queue follows FIFO (First In First Out).

Operations

• Enqueue
• Dequeue
• Front
• Rear

Applications

• CPU Scheduling
• Printer Queue
• BFS
• Ticket Booking
      `,
      code: `#include <iostream>
#include <queue>

using namespace std;

int main()
{
    queue<int> q;

    q.push(10);
    q.push(20);
    q.push(30);

    cout<<q.front();

    return 0;
}`,
      language: "cpp",
      output: "10",
    },

    {
      title: "Recursion",
      content: `
Recursion is a technique where a function calls itself.

Every recursive function must have a base case.

Applications

• Factorial
• Fibonacci
• Tree Traversal
• Backtracking
      `,
      code: `#include <iostream>

using namespace std;

int factorial(int n)
{
    if(n==1)
        return 1;

    return n*factorial(n-1);
}

int main()
{
    cout<<factorial(5);

    return 0;
}`,
      language: "cpp",
      output: "120",
    },

    {
      title: "Hashing",
      content: `
Hashing stores data using key-value pairs.

Advantages

• Very fast lookup
• Efficient insertion
• Efficient deletion

Average Time Complexity

Search: O(1)
Insert: O(1)
Delete: O(1)

Hashing is widely used in databases, compilers, and caches.
      `,
      code: `#include <iostream>
#include <unordered_map>

using namespace std;

int main()
{
    unordered_map<string,int> marks;

    marks["Alice"]=90;
    marks["Bob"]=85;

    cout<<marks["Alice"];

    return 0;
}`,
      language: "cpp",
      output: "90",
    },    {
      title: "Trees",
      content: `
A Tree is a hierarchical, non-linear data structure.

Terminology:

• Root Node
• Parent Node
• Child Node
• Leaf Node
• Height
• Depth
• Subtree

Applications

• File Systems
• XML/HTML Documents
• Databases
• Compilers
• Artificial Intelligence
      `,
    },

    {
      title: "Binary Tree",
      content: `
A Binary Tree is a tree in which each node has at most two children.

Types

• Full Binary Tree
• Complete Binary Tree
• Perfect Binary Tree
• Balanced Binary Tree

Traversal Methods

• Preorder
• Inorder
• Postorder
• Level Order
      `,
      code: `#include <iostream>

using namespace std;

struct Node
{
    int data;
    Node *left;
    Node *right;
};

int main()
{
    Node *root = new Node{10, nullptr, nullptr};

    root->left = new Node{20, nullptr, nullptr};
    root->right = new Node{30, nullptr, nullptr};

    cout << root->data;

    return 0;
}`,
      language: "cpp",
      output: "10",
      tip: "Binary Trees are the foundation of many advanced data structures.",
    },

    {
      title: "Binary Search Tree (BST)",
      content: `
A Binary Search Tree follows this rule:

Left Subtree < Root < Right Subtree

Advantages

• Fast Searching
• Fast Insertion
• Fast Deletion

Average Complexity

Search : O(log n)
Insert : O(log n)
Delete : O(log n)
      `,
      code: `#include <iostream>

using namespace std;

struct Node
{
    int data;
    Node *left;
    Node *right;
};

int main()
{
    Node *root = new Node{50,nullptr,nullptr};

    root->left = new Node{30,nullptr,nullptr};
    root->right = new Node{70,nullptr,nullptr};

    cout << root->left->data;

    return 0;
}`,
      language: "cpp",
      output: "30",
    },

    {
      title: "Tree Traversals",
      content: `
Tree Traversals visit every node exactly once.

Traversal Types

1. Preorder
Root → Left → Right

2. Inorder
Left → Root → Right

3. Postorder
Left → Right → Root

4. Level Order
Level by Level

Applications

• Expression Trees
• Directory Structures
• Syntax Trees
      `,
    },

    {
      title: "Heap",
      content: `
A Heap is a Complete Binary Tree.

Types

• Max Heap
• Min Heap

Operations

• Insert
• Delete
• Heapify

Applications

• Priority Queue
• Heap Sort
• Scheduling
• Dijkstra Algorithm
      `,
      code: `#include <iostream>
#include <queue>

using namespace std;

int main()
{
    priority_queue<int> pq;

    pq.push(10);
    pq.push(50);
    pq.push(20);

    cout << pq.top();

    return 0;
}`,
      language: "cpp",
      output: "50",
      tip: "C++ priority_queue implements a Max Heap by default.",
    },

    {
      title: "Graph",
      content: `
A Graph consists of vertices and edges.

Graphs can represent:

• Social Networks
• Google Maps
• Computer Networks
• Flight Routes
• Recommendation Systems

Types

• Directed Graph
• Undirected Graph
• Weighted Graph
• Unweighted Graph
• Cyclic Graph
• Acyclic Graph
      `,
    },

    {
      title: "Graph Representation",
      content: `
Graphs are commonly represented in two ways.

1. Adjacency Matrix

Advantages
• Simple
• Fast edge lookup

Disadvantages
• Uses more memory

2. Adjacency List

Advantages
• Memory efficient
• Preferred for sparse graphs

Most competitive programming problems use adjacency lists.
      `,
      code: `#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> graph[4];

    graph[0].push_back(1);
    graph[0].push_back(2);

    graph[1].push_back(3);

    cout << graph[0][0];

    return 0;
}`,
      language: "cpp",
      output: "1",
    },    {
      title: "Breadth First Search (BFS)",
      content: `
Breadth First Search (BFS) is a graph traversal algorithm.

It visits all neighboring vertices before moving to the next level.

Data Structure Used

• Queue

Applications

• Shortest Path in Unweighted Graph
• GPS Navigation
• Social Networks
• Web Crawling

Time Complexity

O(V + E)
      `,
      code: `#include <iostream>
#include <vector>
#include <queue>

using namespace std;

int main()
{
    vector<int> graph[5];

    graph[0]={1,2};
    graph[1]={3};
    graph[2]={4};

    vector<bool> visited(5,false);

    queue<int> q;

    q.push(0);
    visited[0]=true;

    while(!q.empty())
    {
        int node=q.front();
        q.pop();

        cout<<node<<" ";

        for(int next:graph[node])
        {
            if(!visited[next])
            {
                visited[next]=true;
                q.push(next);
            }
        }
    }

    return 0;
}`,
      language: "cpp",
      output: "0 1 2 3 4",
      tip: "BFS always explores level by level.",
    },

    {
      title: "Depth First Search (DFS)",
      content: `
Depth First Search explores one branch completely before backtracking.

Data Structure Used

• Stack
or
• Recursion

Applications

• Cycle Detection
• Topological Sorting
• Maze Solving
• Path Finding

Time Complexity

O(V + E)
      `,
      code: `#include <iostream>
#include <vector>

using namespace std;

vector<int> graph[5];
bool visited[5];

void dfs(int node)
{
    visited[node]=true;

    cout<<node<<" ";

    for(int next:graph[node])
    {
        if(!visited[next])
            dfs(next);
    }
}

int main()
{
    graph[0]={1,2};
    graph[1]={3};
    graph[2]={4};

    dfs(0);

    return 0;
}`,
      language: "cpp",
      output: "0 1 3 2 4",
    },

    {
      title: "Dynamic Programming",
      content: `
Dynamic Programming (DP) solves complex problems by breaking them into smaller overlapping subproblems.

Principles

• Optimal Substructure
• Overlapping Subproblems

Applications

• Fibonacci
• Knapsack
• Longest Common Subsequence
• Matrix Chain Multiplication

Dynamic Programming avoids repeated calculations.
      `,
      code: `#include <iostream>

using namespace std;

int main()
{
    int dp[11];

    dp[0]=0;
    dp[1]=1;

    for(int i=2;i<=10;i++)
    {
        dp[i]=dp[i-1]+dp[i-2];
    }

    cout<<dp[10];

    return 0;
}`,
      language: "cpp",
      output: "55",
      tip: "Store previously computed results to improve performance.",
    },

    {
      title: "Greedy Algorithm",
      content: `
A Greedy Algorithm makes the locally optimal choice at each step.

Applications

• Activity Selection
• Huffman Coding
• Prim's Algorithm
• Kruskal's Algorithm
• Dijkstra Algorithm

Greedy algorithms are simple and efficient but do not always produce the optimal solution.
      `,
    },

    {
      title: "Backtracking",
      content: `
Backtracking tries all possible solutions and abandons invalid paths.

Applications

• Sudoku Solver
• N-Queens Problem
• Maze Problems
• Rat in a Maze
• Graph Coloring
• Permutations
      `,
      code: `#include <iostream>

using namespace std;

void printNumbers(int n)
{
    if(n==0)
        return;

    printNumbers(n-1);

    cout<<n<<" ";
}

int main()
{
    printNumbers(5);

    return 0;
}`,
      language: "cpp",
      output: "1 2 3 4 5",
    },

    {
      title: "Divide and Conquer",
      content: `
Divide and Conquer divides a problem into smaller independent subproblems.

Steps

• Divide
• Conquer
• Combine

Examples

• Merge Sort
• Quick Sort
• Binary Search

Time Complexity depends on how the problem is divided and combined.
      `,
      tip: "Merge Sort and Quick Sort are classic Divide and Conquer algorithms.",
    },    {
      title: "DSA Interview Questions",
      content: `
Common DSA Interview Questions

1. What is the difference between an Array and a Linked List?

2. Explain Stack and Queue.

3. What is Recursion?

4. What is Dynamic Programming?

5. Explain Binary Search.

6. Difference between DFS and BFS.

7. What is a Binary Search Tree?

8. Explain Time Complexity.

9. What is a Heap?

10. Difference between HashMap and HashTable.

These topics are frequently asked in coding interviews.
      `,
    },

    {
      title: "Practice Questions",
      content: `
Beginner

1. Find the largest element in an array.
2. Reverse an array.
3. Find the second largest element.
4. Remove duplicate elements.
5. Count frequency of each element.

Intermediate

6. Implement Stack using Array.
7. Implement Queue using Array.
8. Reverse a Linked List.
9. Binary Search implementation.
10. Bubble Sort implementation.

Advanced

11. Merge Sort
12. Quick Sort
13. DFS Traversal
14. BFS Traversal
15. Detect Cycle in Graph
16. Dijkstra Algorithm
17. Topological Sort
18. Minimum Spanning Tree
19. Longest Common Subsequence
20. 0/1 Knapsack
      `,
    },

    {
      title: "Mini Project",
      content: `
Project Name

Student Record Management System

Concepts Used

• Arrays
• Searching
• Sorting
• Functions
• File Handling

Features

• Add Student
• Delete Student
• Search Student
• Update Student
• Display Students
• Sort Students
• Save Records
• Load Records

This project combines multiple DSA concepts into one practical application.
      `,
    },

    {
      title: "Summary",
      content: `
Congratulations!

You have completed the fundamentals of Data Structures and Algorithms.

Topics Covered

✓ Time Complexity
✓ Space Complexity
✓ Arrays
✓ Searching
✓ Sorting
✓ Linked List
✓ Stack
✓ Queue
✓ Trees
✓ Graphs
✓ Heap
✓ Hashing
✓ Dynamic Programming
✓ Greedy Algorithms
✓ Backtracking

Next Steps

• Solve problems daily on LeetCode, HackerRank, or Codeforces.
• Learn advanced graph algorithms.
• Practice dynamic programming regularly.
• Build small projects using DSA concepts.
• Participate in coding contests to improve speed and accuracy.

Consistent practice is the key to mastering DSA.
      `,
    }
  ],
};