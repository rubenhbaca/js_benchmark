import { test } from 'ava';
import { quickSort, bubbleSort, selectionSort, mergeSort, heapSort } from '../';

let compFun = (a, b) => {
	return a - b;
};

let createArray = () => {
	let SIZE = 1 << 20;

	let a: number[] = [];

	for (let i = 0; i < SIZE; i++) {
		let r = (Math.random() * 10000) >>> 0;
		a.push(r);
	}

	return a;
};

// quick sort
test('quick sort will order a number array', t => {
	let arr = [5, 4, 3, 9, 7, 6, 8, 2, 1];
	// let nArr = sort(arr, compFun);
	let nArr = quickSort(arr);
	let gArr = arr.sort(compFun);

	t.deepEqual(nArr, gArr);
});

test('quick sort will order a number array with same numbers', t => {
	let arr = [5, 4, 3, 9, 7, 6, 8, 2, 1, 5, 4, 3, 9, 7, 6, 8, 2, 1];
	let nArr = quickSort(arr);
	let gArr = arr.sort(compFun);

	t.deepEqual(nArr, gArr);
});

test('quick sort will order a number array with large numbers', t => {
	let arr = [2580590, 437844, 3542805, 1314977, 2491367, 658924, 3910066, 3, 4644562, 2335955, 3758815, 2268599, 4565188, 2322649, 4592275, 2190449, 3453337, 1211610, 1];
	let nArr = quickSort(arr);
	let gArr = arr.sort(compFun);

	t.deepEqual(nArr, gArr);
});

test('quick sort will order a large number array', t => {
	let arr = createArray();
	let nArr = quickSort(arr);
	let gArr = arr.sort(compFun);

	t.deepEqual(nArr, gArr);
});

// bubble sort
test('bubble sort will order a number array', t => {
	let arr = [5, 4, 3, 9, 7, 6, 8, 2, 1];
	// let nArr = sort(arr, compFun);
	let nArr = bubbleSort(arr);
	let gArr = arr.sort(compFun);

	t.deepEqual(nArr, gArr);
});

test('bubble sort will order a number array with same numbers', t => {
	let arr = [5, 4, 3, 9, 7, 6, 8, 2, 1, 5, 4, 3, 9, 7, 6, 8, 2, 1];
	let nArr = bubbleSort(arr);
	let gArr = arr.sort(compFun);

	t.deepEqual(nArr, gArr);
});

test('bubble sort will order a number array with large numbers', t => {
	let arr = [2580590, 437844, 3542805, 1314977, 2491367, 658924, 3910066, 3, 4644562, 2335955, 3758815, 2268599, 4565188, 2322649, 4592275, 2190449, 3453337, 1211610, 1];
	let nArr = bubbleSort(arr);
	let gArr = arr.sort(compFun);

	t.deepEqual(nArr, gArr);
});

// so slow for testing
// test('bubble sort will order a large number array', t => {
// 	let arr = createArray();
// 	let nArr = bubbleSort(arr);
// 	let gArr = arr.sort(compFun);

// 	t.deepEqual(nArr, gArr);
// });

// selection sort
test('selection sort will order a number array', t => {
	let arr = [5, 4, 3, 9, 7, 6, 8, 2, 1];
	// let nArr = sort(arr, compFun);
	let nArr = selectionSort(arr);
	let gArr = arr.sort(compFun);

	t.deepEqual(nArr, gArr);
});

test('selection sort will order a number array with same numbers', t => {
	let arr = [5, 4, 3, 9, 7, 6, 8, 2, 1, 5, 4, 3, 9, 7, 6, 8, 2, 1];
	let nArr = selectionSort(arr);
	let gArr = arr.sort(compFun);

	t.deepEqual(nArr, gArr);
});

test('selection sort will order a number array with large numbers', t => {
	let arr = [2580590, 437844, 3542805, 1314977, 2491367, 658924, 3910066, 3, 4644562, 2335955, 3758815, 2268599, 4565188, 2322649, 4592275, 2190449, 3453337, 1211610, 1];
	let nArr = selectionSort(arr);
	let gArr = arr.sort(compFun);

	t.deepEqual(nArr, gArr);
});

// so slow for testing
// test('selection sort will order a large number array', t => {
// 	let arr = createArray();
// 	let nArr = selectionSort(arr);
// 	let gArr = arr.sort(compFun);

// 	t.deepEqual(nArr, gArr);
// });


// merge sort
test('merge sort will order a number array', t => {
	let arr = [5, 4, 3, 9, 7, 6, 8, 2, 1];
	// let nArr = sort(arr, compFun);
	let nArr = mergeSort(arr);
	let gArr = arr.sort(compFun);

	t.deepEqual(nArr, gArr);
});

test('merge sort will order a number array with same numbers', t => {
	let arr = [5, 4, 3, 9, 7, 6, 8, 2, 1, 5, 4, 3, 9, 7, 6, 8, 2, 1];
	let nArr = mergeSort(arr);
	let gArr = arr.sort(compFun);

	t.deepEqual(nArr, gArr);
});

test('merge sort will order a number array with large numbers', t => {
	let arr = [2580590, 437844, 3542805, 1314977, 2491367, 658924, 3910066, 3, 4644562, 2335955, 3758815, 2268599, 4565188, 2322649, 4592275, 2190449, 3453337, 1211610, 1];
	let nArr = mergeSort(arr);
	let gArr = arr.sort(compFun);

	t.deepEqual(nArr, gArr);
});

test('merge sort will order a large number array', t => {
	let arr = createArray();
	let nArr = mergeSort(arr);
	let gArr = arr.sort(compFun);

	t.deepEqual(nArr, gArr);
});

// heap sort
test('heap sort will order a number array', t => {
	let arr = [5, 4, 3, 9, 7, 6, 8, 2, 1];
	// let nArr = sort(arr, compFun);
	let nArr = heapSort(arr);
	let gArr = arr.sort(compFun);

	t.deepEqual(nArr, gArr);
});

test('heap sort will order a number array with same numbers', t => {
	let arr = [5, 4, 3, 9, 7, 6, 8, 2, 1, 5, 4, 3, 9, 7, 6, 8, 2, 1];
	let nArr = heapSort(arr);
	let gArr = arr.sort(compFun);

	t.deepEqual(nArr, gArr);
});

test('heap sort will order a number array with large numbers', t => {
	let arr = [2580590, 437844, 3542805, 1314977, 2491367, 658924, 3910066, 3, 4644562, 2335955, 3758815, 2268599, 4565188, 2322649, 4592275, 2190449, 3453337, 1211610, 1];
	let nArr = heapSort(arr);
	let gArr = arr.sort(compFun);

	t.deepEqual(nArr, gArr);
});

test('heap sort will order a large number array', t => {
	let arr = createArray();
	let nArr = heapSort(arr);
	let gArr = arr.sort(compFun);

	t.deepEqual(nArr, gArr);
});