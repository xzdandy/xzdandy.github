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
{% highlight python %}# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    # @param head, a ListNode
    # @return a list node
    def detectCycle(self, head):
        power = lam = 1
        
        fast = head
        slow = head
        
        if not (head and head.next):
            return None
            
        fast = fast.next
        
        while fast != slow:
            if power == lam:
                slow = fast
                power *= 2
                lam = 0
            
            if fast.next:
                fast = fast.next
            else:
                return None
                
            lam += 1
           
        fast = slow = head
        
        for i in range(lam):
            fast = fast.next
        
        while fast != slow:
            fast = fast.next
            slow = slow.next
        
        
        return fast
{% endhighlight %}

<hr / >
 a

<h3>Advantages:</h3>
Regarding Wikipedia, Brent's algorithm has two advantages over Tortoise and hare:

* The algorithm fins out the length of cycle directly which is <i>lam</i> in the code.
* Every stage tortoise doesn't need to move and hare only need to jump one step while in Floyds' we need totally 3 steps.
* Finally Brent claims that his algorithm runs around 36% more quickly than Floyds'.

<h2>Reference:</h2>
* [LeetCode Forum](https://oj.leetcode.com/discuss/396/is-there-any-better-answer-for-the-linked-list-cycle-ii)
* [Wikipedia Cycle Detection](http://en.wikipedia.org/wiki/Cycle_detection)