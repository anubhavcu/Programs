//worst - O(n^2) time || O(log(n)) space
//best - O(nlog(n)) time || O(log(n)) space  (function calls in the call stack)
function quickSort(array) {
  quickSortHelper(array, 0, array.length - 1);
  return array;
}

function quickSortHelper(array, startIndex, endIndex) {
  if (startIndex >= endIndex) return; //single element or empty array
  const pivot = startIndex;
  let leftIndex = startIndex + 1,
    rightIndex = endIndex;
  while (rightIndex >= leftIndex) {
    if (array[leftIndex] >= array[pivot] && array[rightIndex] <= array[pivot]) {
      swap(leftIndex, rightIndex, array);
    }
    if (array[leftIndex] <= array[pivot]) leftIndex++;
    if (array[rightIndex] >= array[pivot]) rightIndex--;
  }
  swap(rightIndex, pivot, array); //after the end of while loop left and right index have crossed paths
  const leftSubArrayIsSmaller =
    rightIndex - 1 - startIndex < endIndex - (rightIndex + 1);
  if (leftSubArrayIsSmaller) {
    quickSortHelper(array, startIndex, rightIndex - 1);
    quickSortHelper(array, rightIndex + 1, endIndex);
  } else {
    quickSortHelper(array, rightIndex + 1, endIndex);
    quickSortHelper(array, startIndex, rightIndex - 1);
  }
}
function swap(i, j, array) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
let array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 32, 5, 6, 321, 65];
console.log("Before sorting - ", array);
console.log("after sorting(quickSort)- ", quickSort(array));
