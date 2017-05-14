import { test } from 'ava';
import * as benchmark from 'benchmark';

let arr: string[] = [];
for (let i = 0; i < 1000; i++) {
	arr[i] = 'value' + i;
}

function someFn(ix) {
	return ix * 5 + 1 / 3 * 8;
}

test('Loop Benchmark', t => {
	let suite = new benchmark.Suite;

	suite
		// add tests
		.add('For loop, basic', function () {
			for (let i = 0; i < arr.length; i++) {
				someFn(i);
			}
		})
		.add('While loop, basic', function () {
			let i = 0;
			while (i < arr.length) {
				someFn(i);
				i++;
			}
		})
		.add('While loop, cached, increment out', function () {
			let i = 0;
			let count = arr.length;
			while (i < count) {
				someFn(i);
				i++;
			}
		})
		.add('While loop, cached, increment in', function () {
			let i = -1;
			let count = arr.length;
			while (++i < count) {
				someFn(i);
			}
		})
		.add('For loop, cached', function () {
			for (let i = 0, len = arr.length; i < len; i++) {
				someFn(i);
			}
		})
		.add('For loop, i--', function () {
			for (let i = arr.length; i > 0; i--) {
				someFn(i);
			}
		})
		.add('Do-while loop, i--', function () {
			let i = arr.length - 1;
			do {
				someFn(i);
			}
			while (i--);
		})
		.add('Do-while loop, --i', function () {
			let i = arr.length;
			if (i > 0) {
				do {
					someFn(i);
				}
				while (--i);
			}
		})
		.add('For..in loop', function () {
			for (let i in arr) {
				someFn(i);
			}
		})
		// add listeners
		.on('cycle', function (event) {
			console.log('    ' + String(event.target));
		})
		.on('complete', function () {
			console.log('\n    Fastest is ' + this.filter('fastest').map('name'));
		})
		// run async
		.run({ 'async': false });

	t.true(true);
});