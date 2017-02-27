---
layout: post
title: Link all containers together
date: 2017-02-26 22:06
categories: daily
---

1. Check the [Tapir](http://irenezhang.net/papers/tapir-sosp15.pdf) paper: How is transcation implemented in non-distributed environment? Also paper refers:
  > This ordered log abstraction is easily and efficiently implemented with a spinning disk.
  What is spinning disk?
2. Optimized linkedlist, remove no needed head node.
3. Instead of linking all nodes in different linkedlist (complexed and erronal). Try to link the linkedlists to simplify the implementation.
4. Use random generated correctnessTest => multithread gives wrong result? => Fix redefinition of variable.
5. Set the boundary to be the geo of first elements to make fast path check more likely?
6. Fast path result sometimes not correct? => __Need FIX!!!__
