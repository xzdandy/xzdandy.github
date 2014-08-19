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

Now let us think about a bit operation **xor** which in most programming language is represented by **^**. Following is the table for **xor** operation.

<table>
<tr bgcolor="#DDEEFF" align="center">
<td colspan="2"><b>INPUT</b><br />
A &#160; B</td>
<td><b>OUTPUT</b><br />
A XOR B</td>
</tr>
<tr bgcolor="#DDFFDD" align="center">
<td>0</td>
<td>0</td>
<td>0</td>
</tr>
<tr bgcolor="#DDFFDD" align="center">
<td>0</td>
<td>1</td>
<td>1</td>
</tr>
<tr bgcolor="#DDFFDD" align="center">
<td>1</td>
<td>0</td>
<td>1</td>
</tr>
<tr bgcolor="#DDFFDD" align="center">
<td>1</td>
<td>1</td>
<td>0</td>
</tr>
</table>

Now we consider two identical number, for example, **5** and **5**. Apparently the 2 base of them are still the same which is **101**. Using the rule above, we can get <span class="math">5 \mbox{ ^ } 5 = (101)\_{2} \mbox{ ^ } (101)\_{2} = 0</span>. We can expand this nice property to more numbers, and we get <span class="math">5 \mbox{ ^ } 5 \mbox{ ^ } 4 \mbox{ ^ } 4 \mbox{ ^ } 3 \mbox{ ^ } 3 \mbox{ ^ } 2 = 2</span>. Notice since all the pair of same numbers will become 0 through **xor** operation, the number left will be what can't be grouped into pairs, in other words it appears odd times. Using this idea, we can solve this problem in a direct way.

## Code In Python:
<pre class="prettyprint linenums">
class Solution:
    # @param A, a list of integer
    # @return an integer
    def singleNumber(self, A):
        res = 0
        for num in A:
            res ^= num
        return res
<\pre> 

## Extension:


## Reference:
* [LeetCode Forum](https://oj.leetcode.com/discuss/oj/single-number)
* [Wikipedia XOR gate](http://en.wikipedia.org/wiki/XOR_gate)