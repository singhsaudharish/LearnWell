import { CodingCategory } from "../../types/coding";

export const graph: CodingCategory = {
  title: "Graph",

  description:
    "Practice important graph traversal, connected components, cycle detection, topological sorting, and shortest path interview questions.",

  questions: [

    // ============================================================
    // 1. FIND IF PATH EXISTS IN GRAPH
    // ============================================================

    {
      id: "find-if-path-exists",

      title: "Find if Path Exists in Graph",

      difficulty: "Easy",

      problem:
        "There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1. Given edges and two vertices source and destination, determine whether there is a valid path from source to destination.",

      input:
        `n = 3
edges = [[0,1],[1,2]]
source = 0
destination = 2`,

      output:
        `true`,

      explanation:
        "There is a path from vertex 0 to vertex 2: 0 → 1 → 2.",

      codeSolution: {

        explanation:
          "Build an adjacency list and use DFS to explore the graph. If the destination vertex is reached, a valid path exists.",

        time: "O(V + E)",

        space: "O(V + E)",

        solutions: [

          {
            language: "cpp",

            code: `class Solution {

public:

    bool dfs(
        int node,
        int destination,
        vector<vector<int>>& graph,
        vector<bool>& visited
    ) {

        if(node == destination)
            return true;

        visited[node] = true;

        for(int neighbor : graph[node]) {

            if(!visited[neighbor]) {

                if(
                    dfs(
                        neighbor,
                        destination,
                        graph,
                        visited
                    )
                ) {

                    return true;
                }
            }
        }

        return false;
    }


    bool validPath(
        int n,
        vector<vector<int>>& edges,
        int source,
        int destination
    ) {

        vector<vector<int>> graph(n);

        for(auto edge : edges) {

            int u = edge[0];
            int v = edge[1];

            graph[u].push_back(v);
            graph[v].push_back(u);
        }

        vector<bool> visited(n, false);

        return dfs(
            source,
            destination,
            graph,
            visited
        );
    }
};`
          },

          {
            language: "java",

            code: `class Solution {

    public boolean validPath(
        int n,
        int[][] edges,
        int source,
        int destination
    ) {

        List<List<Integer>> graph =
            new ArrayList<>();

        for(int i = 0; i < n; i++) {

            graph.add(
                new ArrayList<>()
            );
        }

        for(int[] edge : edges) {

            graph.get(edge[0])
                .add(edge[1]);

            graph.get(edge[1])
                .add(edge[0]);
        }

        boolean[] visited =
            new boolean[n];

        return dfs(
            source,
            destination,
            graph,
            visited
        );
    }


    private boolean dfs(
        int node,
        int destination,
        List<List<Integer>> graph,
        boolean[] visited
    ) {

        if(node == destination)
            return true;

        visited[node] = true;

        for(int neighbor : graph.get(node)) {

            if(!visited[neighbor]) {

                if(
                    dfs(
                        neighbor,
                        destination,
                        graph,
                        visited
                    )
                ) {

                    return true;
                }
            }
        }

        return false;
    }
}`
          },

          {
            language: "python",

            code: `class Solution:

    def validPath(
        self,
        n,
        edges,
        source,
        destination
    ):

        graph = [
            []
            for _ in range(n)
        ]

        for u, v in edges:

            graph[u].append(v)
            graph[v].append(u)

        visited = set()

        def dfs(node):

            if node == destination:
                return True

            visited.add(node)

            for neighbor in graph[node]:

                if neighbor not in visited:

                    if dfs(neighbor):
                        return True

            return False

        return dfs(source)`
          },

          {
            language: "javascript",

            code: `function validPath(
    n,
    edges,
    source,
    destination
) {

    const graph =
        Array.from(
            { length: n },
            () => []
        );

    for(const [u, v] of edges) {

        graph[u].push(v);
        graph[v].push(u);
    }

    const visited =
        new Set();

    function dfs(node) {

        if(node === destination)
            return true;

        visited.add(node);

        for(const neighbor of graph[node]) {

            if(!visited.has(neighbor)) {

                if(dfs(neighbor))
                    return true;
            }
        }

        return false;
    }

    return dfs(source);
}`
          }

        ]
      }
    },


    // ============================================================
    // 2. NUMBER OF ISLANDS
    // ============================================================

    {
      id: "number-of-islands",

      title: "Number of Islands",

      difficulty: "Medium",

      problem:
        "Given an m x n 2D binary grid representing a map of 1s (land) and 0s (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",

      input:
        `grid = [
  ["1","1","0","0"],
  ["1","0","0","1"],
  ["0","0","1","1"],
  ["0","0","0","0"]
]`,

      output:
        `3`,

      explanation:
        "Each connected group of land cells represents one island. Use DFS or BFS to visit every cell belonging to an island.",

      codeSolution: {

        explanation:
          "Scan the grid. Whenever an unvisited land cell is found, start DFS and mark all connected land cells as visited. Each DFS represents one island.",

        time: "O(m × n)",

        space: "O(m × n)",

        solutions: [

          {
            language: "cpp",

            code: `class Solution {

public:

    void dfs(
        vector<vector<char>>& grid,
        int r,
        int c
    ) {

        int rows = grid.size();
        int cols = grid[0].size();

        if(
            r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= cols ||
            grid[r][c] == '0'
        ) {

            return;
        }

        grid[r][c] = '0';

        dfs(grid, r + 1, c);
        dfs(grid, r - 1, c);
        dfs(grid, r, c + 1);
        dfs(grid, r, c - 1);
    }


    int numIslands(
        vector<vector<char>>& grid
    ) {

        int count = 0;

        for(int r = 0; r < grid.size(); r++) {

            for(int c = 0; c < grid[0].size(); c++) {

                if(grid[r][c] == '1') {

                    count++;

                    dfs(grid, r, c);
                }
            }
        }

        return count;
    }
};`
          },

          {
            language: "java",

            code: `class Solution {

    public int numIslands(
        char[][] grid
    ) {

        int count = 0;

        for(int r = 0; r < grid.length; r++) {

            for(
                int c = 0;
                c < grid[0].length;
                c++
            ) {

                if(grid[r][c] == '1') {

                    count++;

                    dfs(
                        grid,
                        r,
                        c
                    );
                }
            }
        }

        return count;
    }


    private void dfs(
        char[][] grid,
        int r,
        int c
    ) {

        if(
            r < 0 ||
            r >= grid.length ||
            c < 0 ||
            c >= grid[0].length ||
            grid[r][c] == '0'
        ) {

            return;
        }

        grid[r][c] = '0';

        dfs(grid, r + 1, c);
        dfs(grid, r - 1, c);
        dfs(grid, r, c + 1);
        dfs(grid, r, c - 1);
    }
}`
          },

          {
            language: "python",

            code: `class Solution:

    def numIslands(self, grid):

        rows = len(grid)
        cols = len(grid[0])

        def dfs(r, c):

            if (
                r < 0 or
                r >= rows or
                c < 0 or
                c >= cols or
                grid[r][c] == "0"
            ):

                return

            grid[r][c] = "0"

            dfs(r + 1, c)
            dfs(r - 1, c)
            dfs(r, c + 1)
            dfs(r, c - 1)

        count = 0

        for r in range(rows):

            for c in range(cols):

                if grid[r][c] == "1":

                    count += 1

                    dfs(r, c)

        return count`
          },

          {
            language: "javascript",

            code: `function numIslands(grid) {

    const rows =
        grid.length;

    const cols =
        grid[0].length;

    function dfs(r, c) {

        if(
            r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= cols ||
            grid[r][c] === "0"
        ) {

            return;
        }

        grid[r][c] = "0";

        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

    let count = 0;

    for(let r = 0; r < rows; r++) {

        for(let c = 0; c < cols; c++) {

            if(grid[r][c] === "1") {

                count++;

                dfs(r, c);
            }
        }
    }

    return count;
}`
          }

        ]
      }
    },


    // ============================================================
    // 3. CLONE GRAPH
    // ============================================================

    {
      id: "clone-graph",

      title: "Clone Graph",

      difficulty: "Medium",

      problem:
        "Given a reference of a node in a connected undirected graph, return a deep copy of the graph.",

      input:
        `Adjacency list:

1: [2,4]
2: [1,3]
3: [2,4]
4: [1,3]`,

      output:
        `Cloned graph`,

      explanation:
        "Use DFS or BFS to visit every node and create a new copy of each node. A hash map is used to avoid creating duplicate copies and to handle cycles.",

      codeSolution: {

        explanation:
          "Use a map from original nodes to cloned nodes. When a node is first encountered, create its clone and recursively clone its neighbors.",

        time: "O(V + E)",

        space: "O(V)",

        solutions: [

          {
            language: "cpp",

            code: `class Solution {

private:

    unordered_map<Node*, Node*> mp;

public:

    Node* cloneGraph(Node* node) {

        if(node == nullptr)
            return nullptr;

        if(mp.count(node))
            return mp[node];

        Node* clone =
            new Node(node->val);

        mp[node] = clone;

        for(Node* neighbor : node->neighbors) {

            clone->neighbors.push_back(
                cloneGraph(neighbor)
            );
        }

        return clone;
    }
};`
          },

          {
            language: "java",

            code: `class Solution {

    private Map<Node, Node> map =
        new HashMap<>();

    public Node cloneGraph(Node node) {

        if(node == null)
            return null;

        if(map.containsKey(node))
            return map.get(node);

        Node clone =
            new Node(node.val);

        map.put(node, clone);

        for(Node neighbor :
            node.neighbors) {

            clone.neighbors.add(
                cloneGraph(neighbor)
            );
        }

        return clone;
    }
}`
          },

          {
            language: "python",

            code: `class Solution:

    def __init__(self):

        self.map = {}

    def cloneGraph(self, node):

        if not node:
            return None

        if node in self.map:
            return self.map[node]

        clone = Node(node.val)

        self.map[node] = clone

        for neighbor in node.neighbors:

            clone.neighbors.append(
                self.cloneGraph(neighbor)
            )

        return clone`
          },

          {
            language: "javascript",

            code: `function cloneGraph(node) {

    const map =
        new Map();

    function dfs(node) {

        if(!node)
            return null;

        if(map.has(node))
            return map.get(node);

        const clone =
            new Node(node.val);

        map.set(node, clone);

        for(
            const neighbor
            of node.neighbors
        ) {

            clone.neighbors.push(
                dfs(neighbor)
            );
        }

        return clone;
    }

    return dfs(node);
}`
          }

        ]
      }
    },


    // ============================================================
    // 4. COURSE SCHEDULE
    // ============================================================

    {
      id: "course-schedule",

      title: "Course Schedule",

      difficulty: "Medium",

      problem:
        "There are a total of numCourses courses labeled from 0 to numCourses - 1. You are given prerequisite pairs where prerequisites[i] = [a, b] means you must take course b before course a. Determine if it is possible to finish all courses.",

      input:
        `numCourses = 2
prerequisites = [[1,0]]`,

      output:
        `true`,

      explanation:
        "Course 0 must be completed before course 1. Since there is no cycle, all courses can be completed.",

      codeSolution: {

        explanation:
          "This is a directed graph problem. Use topological sorting with indegrees. If all courses can be processed, there is no cycle.",

        time: "O(V + E)",

        space: "O(V + E)",

        solutions: [

          {
            language: "cpp",

            code: `class Solution {

public:

    bool canFinish(
        int numCourses,
        vector<vector<int>>& prerequisites
    ) {

        vector<vector<int>> graph(
            numCourses
        );

        vector<int> indegree(
            numCourses,
            0
        );

        for(auto pair : prerequisites) {

            int course = pair[0];
            int prerequisite = pair[1];

            graph[prerequisite]
                .push_back(course);

            indegree[course]++;
        }

        queue<int> q;

        for(int i = 0; i < numCourses; i++) {

            if(indegree[i] == 0)
                q.push(i);
        }

        int completed = 0;

        while(!q.empty()) {

            int course =
                q.front();

            q.pop();

            completed++;

            for(int next : graph[course]) {

                indegree[next]--;

                if(indegree[next] == 0)
                    q.push(next);
            }
        }

        return completed == numCourses;
    }
};`
          },

          {
            language: "java",

            code: `class Solution {

    public boolean canFinish(
        int numCourses,
        int[][] prerequisites
    ) {

        List<List<Integer>> graph =
            new ArrayList<>();

        for(int i = 0; i < numCourses; i++) {

            graph.add(
                new ArrayList<>()
            );
        }

        int[] indegree =
            new int[numCourses];

        for(int[] pair : prerequisites) {

            graph.get(pair[1])
                .add(pair[0]);

            indegree[pair[0]]++;
        }

        Queue<Integer> q =
            new LinkedList<>();

        for(int i = 0; i < numCourses; i++) {

            if(indegree[i] == 0)
                q.offer(i);
        }

        int completed = 0;

        while(!q.isEmpty()) {

            int course =
                q.poll();

            completed++;

            for(int next :
                graph.get(course)) {

                indegree[next]--;

                if(indegree[next] == 0)
                    q.offer(next);
            }
        }

        return completed == numCourses;
    }
}`
          },

          {
            language: "python",

            code: `class Solution:

    def canFinish(
        self,
        numCourses,
        prerequisites
    ):

        graph = [
            []
            for _ in range(numCourses)
        ]

        indegree = [
            0
            for _ in range(numCourses)
        ]

        for course, prerequisite in prerequisites:

            graph[prerequisite].append(
                course
            )

            indegree[course] += 1

        q = deque()

        for i in range(numCourses):

            if indegree[i] == 0:
                q.append(i)

        completed = 0

        while q:

            course = q.popleft()

            completed += 1

            for next_course in graph[course]:

                indegree[next_course] -= 1

                if indegree[next_course] == 0:

                    q.append(next_course)

        return completed == numCourses`
          },

          {
            language: "javascript",

            code: `function canFinish(
    numCourses,
    prerequisites
) {

    const graph =
        Array.from(
            { length: numCourses },
            () => []
        );

    const indegree =
        new Array(numCourses)
            .fill(0);

    for(
        const [course, prerequisite]
        of prerequisites
    ) {

        graph[prerequisite]
            .push(course);

        indegree[course]++;
    }

    const queue = [];

    for(let i = 0; i < numCourses; i++) {

        if(indegree[i] === 0)
            queue.push(i);
    }

    let front = 0;
    let completed = 0;

    while(front < queue.length) {

        const course =
            queue[front++];

        completed++;

        for(
            const next
            of graph[course]
        ) {

            indegree[next]--;

            if(indegree[next] === 0) {

                queue.push(next);
            }
        }
    }

    return completed === numCourses;
}`
          }

        ]
      }
    },


    // ============================================================
    // 5. NETWORK DELAY TIME
    // ============================================================

    {
      id: "network-delay-time",

      title: "Network Delay Time",

      difficulty: "Medium",

      problem:
        "You are given a network of n nodes labeled from 1 to n and directed travel times. Find the minimum time required for a signal sent from a given node k to reach all nodes. If it is impossible to reach every node, return -1.",

      input:
        `times = [[2,1,1],[2,3,1],[3,4,1]]
n = 4
k = 2`,

      output:
        `2`,

      explanation:
        "The signal travels from node 2 to node 1 in 1 unit of time, to node 3 in 1 unit, and from node 3 to node 4 in another unit. Therefore, the maximum shortest distance is 2.",

      codeSolution: {

        explanation:
          "Use Dijkstra's algorithm with a priority queue to find the shortest distance from the starting node to every other node.",

        time: "O((V + E) log V)",

        space: "O(V + E)",

        solutions: [

          {
            language: "cpp",

            code: `class Solution {

public:

    int networkDelayTime(
        vector<vector<int>>& times,
        int n,
        int k
    ) {

        vector<vector<pair<int,int>>> graph(
            n + 1
        );

        for(auto edge : times) {

            int u = edge[0];
            int v = edge[1];
            int w = edge[2];

            graph[u].push_back(
                {v, w}
            );
        }

        vector<int> dist(
            n + 1,
            INT_MAX
        );

        priority_queue<
            pair<int,int>,
            vector<pair<int,int>>,
            greater<pair<int,int>>
        > pq;

        dist[k] = 0;

        pq.push({0, k});

        while(!pq.empty()) {

            auto [time, node] =
                pq.top();

            pq.pop();

            if(time > dist[node])
                continue;

            for(auto [next, weight] :
                graph[node]) {

                int newTime =
                    time + weight;

                if(
                    newTime <
                    dist[next]
                ) {

                    dist[next] =
                        newTime;

                    pq.push({
                        newTime,
                        next
                    });
                }
            }
        }

        int answer = 0;

        for(int i = 1; i <= n; i++) {

            if(dist[i] == INT_MAX)
                return -1;

            answer =
                max(answer, dist[i]);
        }

        return answer;
    }
};`
          },

          {
            language: "java",

            code: `class Solution {

    public int networkDelayTime(
        int[][] times,
        int n,
        int k
    ) {

        List<List<int[]>> graph =
            new ArrayList<>();

        for(int i = 0; i <= n; i++) {

            graph.add(
                new ArrayList<>()
            );
        }

        for(int[] edge : times) {

            graph.get(edge[0]).add(
                new int[]{
                    edge[1],
                    edge[2]
                }
            );
        }

        int[] dist =
            new int[n + 1];

        Arrays.fill(
            dist,
            Integer.MAX_VALUE
        );

        PriorityQueue<int[]> pq =
            new PriorityQueue<>(
                Comparator.comparingInt(
                    a -> a[0]
                )
            );

        dist[k] = 0;

        pq.offer(
            new int[]{0, k}
        );

        while(!pq.isEmpty()) {

            int[] current =
                pq.poll();

            int time =
                current[0];

            int node =
                current[1];

            if(time > dist[node])
                continue;

            for(int[] edge :
                graph.get(node)) {

                int next =
                    edge[0];

                int weight =
                    edge[1];

                int newTime =
                    time + weight;

                if(
                    newTime <
                    dist[next]
                ) {

                    dist[next] =
                        newTime;

                    pq.offer(
                        new int[]{
                            newTime,
                            next
                        }
                    );
                }
            }
        }

        int answer = 0;

        for(int i = 1; i <= n; i++) {

            if(
                dist[i] ==
                Integer.MAX_VALUE
            ) {

                return -1;
            }

            answer =
                Math.max(
                    answer,
                    dist[i]
                );
        }

        return answer;
    }
}`
          },

          {
            language: "python",

            code: `class Solution:

    def networkDelayTime(
        self,
        times,
        n,
        k
    ):

        graph = [
            []
            for _ in range(n + 1)
        ]

        for u, v, w in times:

            graph[u].append(
                (v, w)
            )

        dist = [
            float("inf")
            for _ in range(n + 1)
        ]

        dist[k] = 0

        heap = [(0, k)]

        while heap:

            time, node = heappop(heap)

            if time > dist[node]:
                continue

            for next_node, weight in graph[node]:

                new_time =
                    time + weight

                if new_time < dist[next_node]:

                    dist[next_node] =
                        new_time

                    heappush(
                        heap,
                        (
                            new_time,
                            next_node
                        )
                    )

        answer = max(
            dist[1:]
        )

        if answer == float("inf"):

            return -1

        return answer`
          },

          {
            language: "javascript",

            code: `function networkDelayTime(
    times,
    n,
    k
) {

    const graph =
        Array.from(
            { length: n + 1 },
            () => []
        );

    for(
        const [u, v, w]
        of times
    ) {

        graph[u].push([
            v,
            w
        ]);
    }

    const dist =
        new Array(n + 1)
            .fill(Infinity);

    dist[k] = 0;

    const heap = [
        [0, k]
    ];

    function popMin() {

        heap.sort(
            (a, b) =>
                a[0] - b[0]
        );

        return heap.shift();
    }

    while(heap.length > 0) {

        const [
            time,
            node
        ] = popMin();

        if(time > dist[node])
            continue;

        for(
            const [next, weight]
            of graph[node]
        ) {

            const newTime =
                time + weight;

            if(
                newTime <
                dist[next]
            ) {

                dist[next] =
                    newTime;

                heap.push([
                    newTime,
                    next
                ]);
            }
        }
    }

    let answer = 0;

    for(let i = 1; i <= n; i++) {

        if(dist[i] === Infinity)
            return -1;

        answer =
            Math.max(
                answer,
                dist[i]
            );
    }

    return answer;
}`
          }

        ]
      }
    }

  ]
};