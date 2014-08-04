---
layout: post
title: LeetCode Linked list Cycle II
---

{{ page.title }}
================

<p class="meta">1 Aug 2014 - Shanghai</p>

<h2>Problem:</h2> Given a linked list, return the node where the cycle begins. If there is no cycle, return null. 

<hr />

<h2>Solution A:</h2> In the discussion, [@stackpop](https://oj.leetcode.com/discuss/user/stackpop) gives a very interesting and beautiful answer, which is also called "Tortoise and hare(Floyds' cycle-finding algorithm)". Following, we will introduce and prove this algorithm.

<h3>Tortoise and hare:</h3>
Firstly, for a linked list we can have only one cycle and suppose the node where the cycle begins is <span class="math">x</math>.  
