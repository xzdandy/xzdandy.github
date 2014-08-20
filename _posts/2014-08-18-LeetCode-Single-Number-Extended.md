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

Now let us think about a bit operation **xor** which in most programming language is represented by **xor**. Following is the table for **xor** operation.

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

Now we consider two identical number, for example, **5** and **5**. Apparently the 2 base of them are still the same which is **101**. Using the rule above, we can get <span class="math">5 \mbox{ xor } 5 = (101)\_{2} \mbox{ xor } (101)\_{2} = 0</span>. We can expand this nice property to more numbers, and we get <span class="math">5 \mbox{ xor } 5 \mbox{ xor } 4 \mbox{ xor } 4 \mbox{ xor } 3 \mbox{ xor } 3 \mbox{ xor } 2 = 2</span>. Notice since all the pair of same numbers will become 0 through **xor** operation, the number left will be what can't be grouped into pairs, in other words it appears odd times. Using this idea, we can solve this problem in a direct way.

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
</pre> 

## Extension:
Given an array of integers, every element appears *k* times except for one. Find that single one who appears *l* times.

The idea is from [@ranmocy](https://oj.leetcode.com/discuss/857/constant-space-solution). We will still make use of bit operation, but this time it's more complex. We need a array **x[i]** with size *k* to save the bits appear **i** times. In detail **x[1]** means the bits that appear once, while **x[k-1]** means the bits that appears **k-1** times. **x[0]** is special, for it means both **0** times and **k** times. Next, for every input number **a**, we update the array by **x[i] = (x[i-1] & a) | (x[i] & ~a)**. Except **x[0] = (x[k] & a) | (x[0] & ~a)**.

The idea is not so explicit to understand, you may try some real numbers just like xor above to help figuring out. Following, I will give my code in Python.

## Code In Python:
<pre class="prettyprint linenums">
class Solution:
    def singleNumber(self, A, k, l):
        x = [0] * k
		x[0] = ~0 # Notice we need initiate x[0] to all "111...111" which is "-1" in decimal. 
		
		for num in A:
			temp = x[k-1]
			for i in range(k-1,0,-1):
				x[i] = (x[i-1] & a) | (x[i] & ~a) # update the array 
			x[0] = (temp & a) | (x[0] & ~a)
		
		return x[l]
</pre> 


## Reference:
* [LeetCode Forum](https://oj.leetcode.com/discuss/oj/single-number)
* [Wikipedia XOR gate](http://en.wikipedia.org/wiki/XOR_gate)