import { test } from 'ava';
import { quickSort, bubbleSort, selectionSort, mergeSort, heapSort } from '../'
import * as timsort from 'timsort';
import * as underscore from 'underscore';
import * as lodash from 'lodash';
import * as benchmark from 'benchmark';

let createArray = function () {
	let SIZE = 1 << 20;

	let a: number[] = [];

	for (let i = 0; i < SIZE; i++) {
		let r = (Math.random() * 10000) >>> 0;
		a.push(r);
	}

	return a;
};

let compFun = function (x, y) {
	return x - y;
};

test('Sort Benchmark', t => {
	let suite = new benchmark.Suite;

	let arraySample: number[] = createArray();

	suite
		// add tests
		.add('native', function () {
			arraySample.sort(compFun);
		})
		.add('quickSort', function () {
			quickSort(arraySample);
		})
		// .add('bubbleSort', function () { // too slow
		// 	bubbleSort(arraySample);
		// })
		// .add('selectionSort', function () { // too slow
		// 	selectionSort(arraySample);
		// })
		.add('mergeSort', function () {
			mergeSort(arraySample);
		})
		.add('heapSort', function () {
			heapSort(arraySample);
		})
		.add('timsort', function () {
			timsort.sort(arraySample, compFun);
		})
		.add('underscore', function () {
			underscore.sortBy(arraySample, compFun);
		})
		.add('lodash', function () {
			lodash.sortBy(arraySample);
		})
		// add listeners
		.on('cycle', function (event) {
			console.log('    ' + String(event.target));
			arraySample = createArray();
		})
		.on('complete', function () {
			console.log('\n    Fastest is ' + this.filter('fastest').map('name') + '\n');
		})
		// run async
		.run({ 'async': false });

	t.true(true);
});