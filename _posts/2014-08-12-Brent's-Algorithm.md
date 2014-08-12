---
layout: post
title: LeetCode Linked list Cycle II ---- Brent's Algorithm
---

{{ page.title }}
================

<p class="meta">1 Aug 2014 - Shanghai</p>

<h2>Solution B:</h2>
In the [LeetCode Linked list Cycle II](/2014/08/01/LeetCode-Linked-list-Cycle-II.html), we have seen Floyds' cycle-finding algorithm ---- Tortoise and hare. Meanwhile on the forum [@dan_li](https://oj.leetcode.com/discuss/396/is-there-any-better-answer-for-the-linked-list-cycle-ii) proposed another algorithm called Brent's Algorithm that is faster than Floyds' and also use <span class="math">O(n)</span> space complexity.

<h3>Brent's Algorithm:</h3>
The basic idea of Brent's Algorithm is quite similar with Floyds'. Now suppose that hare and tortoise are both already in the cycle, then let tortoise stationary. If hare runs a whole lap, apparently hare will overlap tortoise and the number of step that hare runs is length of cycle. Brent's Algorithm makes use of this simple idea. Just read the python code and comments! 

<h3>Code in Python:</h3>
<pre class="prettyprint linenums">
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    # @param head, a ListNode
    # @return a list node
    def detectCycle(self, head):
        power = lam = 1 # lam is length of the cycle, power is the max number of tries
        
        fast = head # fast = hare
        slow = head # slow = tortoise
        
        if not (head and head.next):
            return None
            
        fast = fast.next 
        # find where hare and tortoise overlap
        while fast != slow:
            if power == lam: # if hare doesn't overlap tortoise in power steps
                slow = fast # let tortoise advance which makes sure tortoise will be in the cycle
                power *= 2 # double the max number of tries
                lam = 0 # start a new turn
            
            if fast.next:
                fast = fast.next
            else:
                return None
                
            lam += 1
        # find the beginning of cycle   
        fast = slow = head
        
        for i in range(lam):
            fast = fast.next
        # the distance between hare and tortoise is lam
        while fast != slow: # the same procedure as Floyds' to find the beginning node of the cycle
            fast = fast.next
            slow = slow.next
        
        
        return fast
</pre>

<h3>Advantages:</h3>
Regarding Wikipedia, Brent's algorithm has two advantages over Tortoise and hare:

* The algorithm fins out the length of cycle directly which is <i>lam</i> in the code.
* Every stage tortoise doesn't need to move and hare only need to jump one step while in Floyds' we need totally 3 steps.

Finally Brent claims that his algorithm runs around 36% more quickly than Floyds'.

<h2>Reference:</h2>
* [LeetCode Forum](https://oj.leetcode.com/discuss/396/is-there-any-better-answer-for-the-linked-list-cycle-ii)
* [Wikipedia Cycle Detection](http://en.wikipedia.org/wiki/Cycle_detection)