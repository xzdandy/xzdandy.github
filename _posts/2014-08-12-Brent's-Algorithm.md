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

<h2>Reference:</h2>
* [LeetCode Forum](https://oj.leetcode.com/discuss/396/is-there-any-better-answer-for-the-linked-list-cycle-ii)
* [Wikipedia Cycle Detection](http://en.wikipedia.org/wiki/Cycle_detection)