---
layout: post
title: LeetCode Linked list Cycle II
---

{{ page.title }}
================

<p class="meta">1 Aug 2014 - Shanghai</p>

<h2>Problem:</h2> Given a linked list, return the node where the cycle begins. If there is no cycle, return null. 

<hr />

<h2>Solution A:</h2> In the discussion, [@stackpop](https://oj.leetcode.com/discuss/396/is-there-any-better-answer-for-the-linked-list-cycle-ii) gives a very interesting and beautiful answer, which is also called "Tortoise and hare(Floyds' cycle-finding algorithm)". Following, we will introduce and prove this algorithm.

<h3>Tortoise and hare:</h3>
Firstly, for a linked list we can have only one cycle and suppose the node where the cycle begins is <span class="math">x</span> where <span class="math">x</span> defines the distance between this node and the head of the list. We also define <span class="math">l</span> to be the length of the cycle. 

Now suppose we have a hare that runs 2 steps every time and a tortoise that runs 1 step every time. The hare will run into the cycle first, and then the tortoise. Notice that hare runs faster than tortoise so there must some time they will overlap each other. And we suppose the node they overlap is <span class="math">m</span> where <span class="math">m</span> is the distance between this node and <span class="math">x</span>. We still need two more variables <span class="math">t</span>, <span class="math">k</span> where each represents the number of laps they have run in the cycle.

Using this information, we can already prove this algorithm. The total number of steps hare runs is <span class="math">x + tl + m</span> while the tortoise's is <span class="math">x + kl + m</span>. Meanwhile the hare's speed is double the tortoise's so is the distance. Then we get:
<div class="math">
\begin{aligned}
&x + tl + m = 2(x + kl + m) \\
\Rightarrow &tl - 2kl = x + m \\ 
\Rightarrow &(tl - 2kl) \mbox{ mod l } \equiv (x+m) \mbox{ mod l } \equiv 0
\end{aligned}
</div>

We all need is <span class="math">(x+m) \mbox{ mod l } \equiv 0</span>. This means if we are on the node <span class="math">m</span> and we run more <span class="math">x</span> steps, we will return to the start point of the cycle which is also what we want in this problem. So we can just simulate the whole process and then get the answer. Following is the python code.

{% highlight python %}
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    # @param head, a ListNode
    # @return a list node
    def detectCycle(self, head):
		# fast is hare and slow is tortoise
        fast = head
        slow = head
        
        if not head:
            return None
        
		# find the point hare and tortoise overlap
        while True:
            if fast.next and fast.next.next:
                slow = slow.next
                fast = fast.next.next
            else:
                return None
            if fast == slow:
                break
        
		# the hare runs more x steps to find the ansmer
        slow = head
        while slow != fast:
            fast = fast.next
            slow = slow.next
        
        return fast
{% endhighlight %}

<hr / >

<h2>Reference:</h2>
[LeetCode Forum](https://oj.leetcode.com/discuss/396/is-there-any-better-answer-for-the-linked-list-cycle-ii)

[Wikipedia Cycle Detection](http://en.wikipedia.org/wiki/Cycle_detection)
