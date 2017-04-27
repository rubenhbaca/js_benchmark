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
  native x 7.92 ops/sec ±0.17% (24 runs sampled)
  timsort x 1,035 ops/sec ±0.22% (95 runs sampled)
  underscore x 2.57 ops/sec ±21.05% (11 runs sampled)
  lodash x 0.41 ops/sec ±9.32% (5 runs sampled)
  Fastest is timsort
√ Sort Benchmark (44.8s)
```


Test
---

```
npm run test
```