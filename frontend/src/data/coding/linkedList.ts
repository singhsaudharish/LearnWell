import { CodingCategory } from "../../types/coding";

export const linkedList: CodingCategory = {
  title: "Linked List",

  description:
    "Practice the most important linked list interview questions from beginner to intermediate level.",

  questions: [

    // ============================================================
    // 1. REVERSE LINKED LIST
    // ============================================================

    {
      id: "reverse-linked-list",

      title: "Reverse Linked List",

      difficulty: "Easy",

      problem:
        "Given the head of a singly linked list, reverse the list and return the reversed list.",

      input: `head = [1,2,3,4,5]`,

      output: `[5,4,3,2,1]`,

      explanation:
        "Reverse the direction of every node's next pointer. The original head becomes the last node and the original last node becomes the new head.",

      codeSolution: {

        explanation:
          "Use three pointers: previous, current, and next. Move through the list while changing each node's next pointer to point to the previous node.",

        time: "O(n)",

        space: "O(1)",

        solutions: [

          {
            language: "cpp",

            code: `class Solution {

public:

    ListNode* reverseList(ListNode* head) {

        ListNode* previous = nullptr;
        ListNode* current = head;

        while(current != nullptr) {

            ListNode* next =
                current->next;

            current->next =
                previous;

            previous =
                current;

            current =
                next;
        }

        return previous;
    }
};`
          },

          {
            language: "java",

            code: `class Solution {

    public ListNode reverseList(
        ListNode head
    ) {

        ListNode previous = null;
        ListNode current = head;

        while(current != null) {

            ListNode next =
                current.next;

            current.next =
                previous;

            previous =
                current;

            current =
                next;
        }

        return previous;
    }
}`
          },

          {
            language: "python",

            code: `class Solution:

    def reverseList(self, head):

        previous = None
        current = head

        while current is not None:

            next_node = current.next

            current.next = previous

            previous = current

            current = next_node

        return previous`
          },

          {
            language: "javascript",

            code: `function reverseList(head) {

    let previous = null;
    let current = head;

    while (current !== null) {

        let next =
            current.next;

        current.next =
            previous;

        previous =
            current;

        current =
            next;
    }

    return previous;
}`
          }

        ]
      }
    },


    // ============================================================
    // 2. MERGE TWO SORTED LISTS
    // ============================================================

    {
      id: "merge-two-sorted-lists",

      title: "Merge Two Sorted Lists",

      difficulty: "Easy",

      problem:
        "You are given the heads of two sorted linked lists. Merge the two lists into one sorted linked list and return its head.",

      input: `list1 = [1,2,4]
list2 = [1,3,4]`,

      output: `[1,1,2,3,4,4]`,

      explanation:
        "Compare the current nodes of both lists and always attach the smaller node to the result list.",

      codeSolution: {

        explanation:
          "Use a dummy node and a current pointer. Compare nodes from both lists and connect the smaller node to the result.",

        time: "O(n + m)",

        space: "O(1)",

        solutions: [

          {
            language: "cpp",

            code: `class Solution {

public:

    ListNode* mergeTwoLists(
        ListNode* list1,
        ListNode* list2
    ) {

        ListNode dummy(0);
        ListNode* current =
            &dummy;

        while(
            list1 != nullptr &&
            list2 != nullptr
        ) {

            if(list1->val <= list2->val) {

                current->next =
                    list1;

                list1 =
                    list1->next;

            } else {

                current->next =
                    list2;

                list2 =
                    list2->next;
            }

            current =
                current->next;
        }

        if(list1 != nullptr)
            current->next = list1;

        else
            current->next = list2;

        return dummy.next;
    }
};`
          },

          {
            language: "java",

            code: `class Solution {

    public ListNode mergeTwoLists(
        ListNode list1,
        ListNode list2
    ) {

        ListNode dummy =
            new ListNode(0);

        ListNode current =
            dummy;

        while(
            list1 != null &&
            list2 != null
        ) {

            if(list1.val <= list2.val) {

                current.next =
                    list1;

                list1 =
                    list1.next;

            } else {

                current.next =
                    list2;

                list2 =
                    list2.next;
            }

            current =
                current.next;
        }

        if(list1 != null)
            current.next = list1;

        else
            current.next = list2;

        return dummy.next;
    }
}`
          },

          {
            language: "python",

            code: `class Solution:

    def mergeTwoLists(
        self,
        list1,
        list2
    ):

        dummy = ListNode(0)
        current = dummy

        while list1 and list2:

            if list1.val <= list2.val:

                current.next = list1
                list1 = list1.next

            else:

                current.next = list2
                list2 = list2.next

            current = current.next

        if list1:
            current.next = list1

        else:
            current.next = list2

        return dummy.next`
          },

          {
            language: "javascript",

            code: `function mergeTwoLists(
    list1,
    list2
) {

    const dummy =
        new ListNode(0);

    let current =
        dummy;

    while(
        list1 !== null &&
        list2 !== null
    ) {

        if(list1.val <= list2.val) {

            current.next =
                list1;

            list1 =
                list1.next;

        } else {

            current.next =
                list2;

            list2 =
                list2.next;
        }

        current =
            current.next;
    }

    if(list1 !== null)
        current.next = list1;

    else
        current.next = list2;

    return dummy.next;
}`
          }

        ]
      }
    },


    // ============================================================
    // 3. MIDDLE OF THE LINKED LIST
    // ============================================================

    {
      id: "middle-of-linked-list",

      title: "Middle of the Linked List",

      difficulty: "Easy",

      problem:
        "Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.",

      input:
        `head = [1,2,3,4,5]`,

      output:
        `[3,4,5]`,

      explanation:
        "The middle node of the list [1,2,3,4,5] is node 3. We can find it efficiently using slow and fast pointers.",

      codeSolution: {

        explanation:
          "Use two pointers. The slow pointer moves one step at a time while the fast pointer moves two steps. When fast reaches the end, slow will be at the middle.",

        time: "O(n)",

        space: "O(1)",

        solutions: [

          {
            language: "cpp",

            code: `class Solution {

public:

    ListNode* middleNode(
        ListNode* head
    ) {

        ListNode* slow = head;
        ListNode* fast = head;

        while(
            fast != nullptr &&
            fast->next != nullptr
        ) {

            slow =
                slow->next;

            fast =
                fast->next->next;
        }

        return slow;
    }
};`
          },

          {
            language: "java",

            code: `class Solution {

    public ListNode middleNode(
        ListNode head
    ) {

        ListNode slow = head;
        ListNode fast = head;

        while(
            fast != null &&
            fast.next != null
        ) {

            slow =
                slow.next;

            fast =
                fast.next.next;
        }

        return slow;
    }
}`
          },

          {
            language: "python",

            code: `class Solution:

    def middleNode(self, head):

        slow = head
        fast = head

        while (
            fast is not None
            and fast.next is not None
        ):

            slow = slow.next
            fast = fast.next.next

        return slow`
          },

          {
            language: "javascript",

            code: `function middleNode(head) {

    let slow = head;
    let fast = head;

    while(
        fast !== null &&
        fast.next !== null
    ) {

        slow =
            slow.next;

        fast =
            fast.next.next;
    }

    return slow;
}`
          }

        ]
      }
    },


    // ============================================================
    // 4. LINKED LIST CYCLE
    // ============================================================

    {
      id: "linked-list-cycle",

      title: "Linked List Cycle",

      difficulty: "Easy",

      problem:
        "Given the head of a linked list, determine if the linked list contains a cycle. A cycle exists if some node can be reached again by continuously following the next pointer.",

      input:
        `head = [3,2,0,-4]
pos = 1`,

      output:
        `true`,

      explanation:
        "The last node points back to the node at position 1, creating a cycle.",

      codeSolution: {

        explanation:
          "Use Floyd's Cycle Detection Algorithm. Move one pointer one step and another pointer two steps. If they meet, a cycle exists.",

        time: "O(n)",

        space: "O(1)",

        solutions: [

          {
            language: "cpp",

            code: `class Solution {

public:

    bool hasCycle(
        ListNode* head
    ) {

        ListNode* slow = head;
        ListNode* fast = head;

        while(
            fast != nullptr &&
            fast->next != nullptr
        ) {

            slow =
                slow->next;

            fast =
                fast->next->next;

            if(slow == fast)
                return true;
        }

        return false;
    }
};`
          },

          {
            language: "java",

            code: `class Solution {

    public boolean hasCycle(
        ListNode head
    ) {

        ListNode slow = head;
        ListNode fast = head;

        while(
            fast != null &&
            fast.next != null
        ) {

            slow =
                slow.next;

            fast =
                fast.next.next;

            if(slow == fast)
                return true;
        }

        return false;
    }
}`
          },

          {
            language: "python",

            code: `class Solution:

    def hasCycle(self, head):

        slow = head
        fast = head

        while (
            fast is not None
            and fast.next is not None
        ):

            slow = slow.next
            fast = fast.next.next

            if slow == fast:
                return True

        return False`
          },

          {
            language: "javascript",

            code: `function hasCycle(head) {

    let slow = head;
    let fast = head;

    while(
        fast !== null &&
        fast.next !== null
    ) {

        slow =
            slow.next;

        fast =
            fast.next.next;

        if(slow === fast)
            return true;
    }

    return false;
}`
          }

        ]
      }
    },


    // ============================================================
    // 5. REMOVE NTH NODE FROM END
    // ============================================================

    {
      id: "remove-nth-node-from-end",

      title: "Remove Nth Node From End",

      difficulty: "Medium",

      problem:
        "Given the head of a linked list, remove the nth node from the end of the list and return its head.",

      input:
        `head = [1,2,3,4,5]
n = 2`,

      output:
        `[1,2,3,5]`,

      explanation:
        "The second node from the end is 4, so we remove it from the linked list.",

      codeSolution: {

        explanation:
          "Use two pointers with a dummy node. Move the fast pointer n steps ahead, then move both pointers until fast reaches the end. The slow pointer will be positioned before the node that needs to be removed.",

        time: "O(n)",

        space: "O(1)",

        solutions: [

          {
            language: "cpp",

            code: `class Solution {

public:

    ListNode* removeNthFromEnd(
        ListNode* head,
        int n
    ) {

        ListNode dummy(0);
        dummy.next = head;

        ListNode* slow =
            &dummy;

        ListNode* fast =
            &dummy;

        for(int i = 0; i < n; i++) {

            fast =
                fast->next;
        }

        while(fast->next != nullptr) {

            slow =
                slow->next;

            fast =
                fast->next;
        }

        slow->next =
            slow->next->next;

        return dummy.next;
    }
};`
          },

          {
            language: "java",

            code: `class Solution {

    public ListNode removeNthFromEnd(
        ListNode head,
        int n
    ) {

        ListNode dummy =
            new ListNode(0);

        dummy.next = head;

        ListNode slow = dummy;
        ListNode fast = dummy;

        for(int i = 0; i < n; i++) {

            fast =
                fast.next;
        }

        while(fast.next != null) {

            slow =
                slow.next;

            fast =
                fast.next;
        }

        slow.next =
            slow.next.next;

        return dummy.next;
    }
}`
          },

          {
            language: "python",

            code: `class Solution:

    def removeNthFromEnd(
        self,
        head,
        n
    ):

        dummy = ListNode(0)
        dummy.next = head

        slow = dummy
        fast = dummy

        for _ in range(n):

            fast = fast.next

        while fast.next:

            slow = slow.next
            fast = fast.next

        slow.next = slow.next.next

        return dummy.next`
          },

          {
            language: "javascript",

            code: `function removeNthFromEnd(
    head,
    n
) {

    const dummy =
        new ListNode(0);

    dummy.next = head;

    let slow = dummy;
    let fast = dummy;

    for(let i = 0; i < n; i++) {

        fast =
            fast.next;
    }

    while(fast.next !== null) {

        slow =
            slow.next;

        fast =
            fast.next;
    }

    slow.next =
        slow.next.next;

    return dummy.next;
}`
          }

        ]
      }
    }

  ]
};