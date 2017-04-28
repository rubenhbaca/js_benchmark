JS Benchmark - Is a small benchmarking for js

Why
---
I build a lot of software and I want to know different aspects of js that I deal with. I want to make sure that my js is running fast. So, this project allows me to test a few theories to make the best decision.

  
Setup
---
 
```
npm install
```

Benchmarks
---

```
npm run benchmark
```

Sort
```
  native      x 7.84  ops/sec ±1.81%  (24 runs sampled)
  quickSort   x 46.61 ops/sec ±0.26%  (61 runs sampled)
  mergeSort   x 0.98  ops/sec ±0.81%  (7  runs sampled)
  heapSort    x 372   ops/sec ±1.01%  (93 runs sampled)
  timsort     x 1,036 ops/sec ±0.51%  (96 runs sampled)
  underscore  x 2.78  ops/sec ±16.08% (12 runs sampled)
  lodash      x 0.43  ops/sec ±5.33%  (6  runs sampled)
  
  Fastest is timsort
√ Sort Benchmark (1m 14.2s)
```


Test
---

```
npm run test
```