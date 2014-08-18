---
layout: post
title: LeetCode Single Number and Extension
---

{{ page.title }}
================

<p class="meta">18 Aug 2014 - Shanghai</p>

## Problem:
Given an array of integers, every element appears twice except for one. Find that single one.

<hr />

## Solution:
This problem is not so difficult. Firstly, we will give a solution with <span class="math">O(n)</span> time complexity and <span class="math">O(1)</span> space complexity. Secondly, we will talk about a more general version of this problem.

Now let us think about a bit operation **xor** which in most programming language is represented by **^**. 