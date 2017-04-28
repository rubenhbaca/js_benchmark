export function quickSort(items: any[], left?: number, right?: number) {

	let index;

	if (items.length > 1) {

		left = typeof left !== 'number' ? 0 : left;
		right = typeof right !== 'number' ? items.length - 1 : right;

		index = partition(items, left, right);

		if (left < index - 1) {
			quickSort(items, left, index - 1);
		}

		if (index < right) {
			quickSort(items, index, right);
		}

	}

	return items;
}

function partition(items: any[], left: number, right: number) {

	let pivot = items[Math.floor((right + left) / 2)],
		i = left,
		j = right;


	while (i <= j) {

		while (items[i] < pivot) {
			i++;
		}

		while (items[j] > pivot) {
			j--;
		}

		if (i <= j) {
			swap(items, i, j);
			i++;
			j--;
		}
	}

	return i;
}

function swap(items: any[], firstIndex: number, secondIndex: number) {
	let temp = items[firstIndex];
	items[firstIndex] = items[secondIndex];
	items[secondIndex] = temp;
}