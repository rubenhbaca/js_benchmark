import { test } from 'ava';

test.afterEach(t => {
	console.log('');
});

test('Teting Ava', t => {
	let a = 1;
	let b = 1;

	t.is(a + b, 2);
});