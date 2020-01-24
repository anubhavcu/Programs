//worst - O(n^2) time || O(1) space
//best - O(n) time || O(1) space   (array is already sorted)
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array);
      j -= 1;
    }
  }
  return array;
}
function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
let array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 32, 5, 6, 321, 65];
console.log("Before sorting - ", array);
console.log("after sorting(insertionSort)- ", insertionSort(array));
