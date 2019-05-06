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

Loop
```
  For loop, basic                   x 726,492   ops/sec ±0.68% (96 runs sampled)
  While loop, basic                 x 2,550,891 ops/sec ±1.12% (95 runs sampled)
  While loop, cached, increment out x 2,563,286 ops/sec ±0.19% (96 runs sampled)
  While loop, cached, increment in  x 2,138,139 ops/sec ±0.20% (98 runs sampled)
  For loop, cached                  x 730,071   ops/sec ±0.14% (99 runs sampled)
  For loop, i--                     x 728,685   ops/sec ±0.13% (99 runs sampled)
  Do-while loop, i--                x 2,123,349 ops/sec ±0.98% (95 runs sampled)
  Do-while loop, --i                x 2,132,423 ops/sec ±0.16% (98 runs sampled)
  For..in loop                      x 22,820    ops/sec ±0.48% (97 runs sampled)

  Fastest is While loop, cached, increment out
√ loop » Loop Benchmark (49.5s)
```

Dictionary vs Array
```
Dictionary Lookup x 20,750 ops/sec ±0.87% (96 runs sampled)
Array Lookup, find x 2,872 ops/sec ±0.66% (98 runs sampled)

Fastest is Dictionary Lookup
√ array » Array vs Dictionary, Lookup Benchmark (10.9s)
```

Test
---

```
npm run test
```