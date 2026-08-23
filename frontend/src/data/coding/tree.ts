import { CodingCategory } from "../../types/coding";

export const trees: CodingCategory = {
    title: "Trees",

    description:
        "Practice important binary tree and tree-based interview questions.",

    questions: [

        {
            id: "maximum-depth-binary-tree",

            title: "Maximum Depth of Binary Tree",

            difficulty: "Easy",

            problem:
                "Given the root of a binary tree, return its maximum depth. The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",

            input: `root = [3,9,20,null,null,15,7]`,

            output: `3`,

            explanation:
                "The longest path is 3 → 20 → 15 or 3 → 20 → 7, which contains 3 nodes.",

            codeSolution: {

                explanation:
                    "Use recursion. The depth of a node is one plus the maximum depth of its left and right subtrees.",

                time: "O(n)",

                space: "O(h)",

                solutions: [

                    {
                        language: "cpp",

                        code: `class Solution {

public:

    int maxDepth(TreeNode* root) {

        if(root == nullptr)
            return 0;

        return 1 + max(
            maxDepth(root->left),
            maxDepth(root->right)
        );
    }
};`
                    },

                    {
                        language: "java",

                        code: `class Solution {

    public int maxDepth(TreeNode root) {

        if(root == null)
            return 0;

        return 1 + Math.max(
            maxDepth(root.left),
            maxDepth(root.right)
        );
    }
}`
                    },

                    {
                        language: "python",

                        code: `class Solution:

    def maxDepth(self, root):

        if root is None:
            return 0

        return 1 + max(
            self.maxDepth(root.left),
            self.maxDepth(root.right)
        )`
                    },

                    {
                        language: "javascript",

                        code: `function maxDepth(root) {

    if (root === null)
        return 0;

    return 1 + Math.max(
        maxDepth(root.left),
        maxDepth(root.right)
    );
}`
                    }

                ]

            }

        },


        {
            id: "same-tree",

            title: "Same Tree",

            difficulty: "Easy",

            problem:
                "Given the roots of two binary trees p and q, determine whether the two trees are identical.",

            input:
                `p = [1,2,3]
q = [1,2,3]`,

            output:
                `true`,

            explanation:
                "Both trees have the same structure and the same node values.",

            codeSolution: {

                explanation:
                    "Compare the current nodes and recursively compare their left and right subtrees.",

                time: "O(n)",

                space: "O(h)",

                solutions: [

                    {
                        language: "cpp",

                        code: `class Solution {

public:

    bool isSameTree(TreeNode* p, TreeNode* q) {

        if(p == nullptr && q == nullptr)
            return true;

        if(p == nullptr || q == nullptr)
            return false;

        if(p->val != q->val)
            return false;

        return isSameTree(p->left, q->left)
            && isSameTree(p->right, q->right);
    }
};`
                    },

                    {
                        language: "java",

                        code: `class Solution {

    public boolean isSameTree(
        TreeNode p,
        TreeNode q
    ) {

        if(p == null && q == null)
            return true;

        if(p == null || q == null)
            return false;

        if(p.val != q.val)
            return false;

        return isSameTree(p.left, q.left)
            && isSameTree(p.right, q.right);
    }
}`
                    },

                    {
                        language: "python",

                        code: `class Solution:

    def isSameTree(self, p, q):

        if p is None and q is None:
            return True

        if p is None or q is None:
            return False

        if p.val != q.val:
            return False

        return (
            self.isSameTree(p.left, q.left)
            and
            self.isSameTree(p.right, q.right)
        )`
                    },

                    {
                        language: "javascript",

                        code: `function isSameTree(p, q) {

    if (p === null && q === null)
        return true;

    if (p === null || q === null)
        return false;

    if (p.val !== q.val)
        return false;

    return (
        isSameTree(p.left, q.left) &&
        isSameTree(p.right, q.right)
    );
}`
                    }

                ]

            }

        },


        {
            id: "invert-binary-tree",

            title: "Invert Binary Tree",

            difficulty: "Easy",

            problem:
                "Given the root of a binary tree, invert the tree and return its root.",

            input:
                `root = [4,2,7,1,3,6,9]`,

            output:
                `[4,7,2,9,6,3,1]`,

            explanation:
                "For every node, swap its left and right children.",

            codeSolution: {

                explanation:
                    "Recursively invert the left and right subtrees and then swap them.",

                time: "O(n)",

                space: "O(h)",

                solutions: [

                    {
                        language: "cpp",

                        code: `class Solution {

public:

    TreeNode* invertTree(TreeNode* root) {

        if(root == nullptr)
            return nullptr;

        swap(root->left, root->right);

        invertTree(root->left);
        invertTree(root->right);

        return root;
    }
};`
                    },

                    {
                        language: "java",

                        code: `class Solution {

    public TreeNode invertTree(TreeNode root) {

        if(root == null)
            return null;

        TreeNode temp = root.left;

        root.left = root.right;
        root.right = temp;

        invertTree(root.left);
        invertTree(root.right);

        return root;
    }
}`
                    },

                    {
                        language: "python",

                        code: `class Solution:

    def invertTree(self, root):

        if root is None:
            return None

        root.left, root.right = (
            root.right,
            root.left
        )

        self.invertTree(root.left)
        self.invertTree(root.right)

        return root`
                    },

                    {
                        language: "javascript",

                        code: `function invertTree(root) {

    if (root === null)
        return null;

    [root.left, root.right] =
        [root.right, root.left];

    invertTree(root.left);
    invertTree(root.right);

    return root;
}`
                    }

                ]

            }

        }

    ]
};