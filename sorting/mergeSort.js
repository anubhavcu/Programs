//Time- O(nlog(n))
//space- O(n)

function mergeSort(array) {
  if (array.length === 1) return array;
  let middle = Math.floor(array.length / 2);
  // console.log(array.length);
  let leftArray = array.slice(0, middle),
    rightArray = array.slice(middle);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  let sortedArray = new Array(leftArray.length + rightArray.length);
  let leftIndex = 0,
    rightIndex = 0,
    sortedIndex = 0;
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] <= rightArray[rightIndex]) {
      sortedArray[sortedIndex] = leftArray[leftIndex];
      sortedIndex += 1;
      leftIndex += 1;
    } else {
      sortedArray[sortedIndex] = rightArray[rightIndex];
      sortedIndex += 1;
      rightIndex += 1;
    }
  }
  //for leftover elements in any one of the arrays
  while (leftIndex < leftArray.length) {
    sortedArray[sortedIndex] = leftArray[leftIndex];
    sortedIndex += 1;
    leftIndex += 1;
  }
  while (rightIndex < rightArray.length) {
    sortedArray[sortedIndex] = rightArray[rightIndex];
    sortedIndex += 1;
    rightIndex += 1;
  }
  return sortedArray;
}

let array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 32, 5, 6, 321, 65];
console.log("Before sorting - ", array);
console.log("after sorting- ", mergeSort(array));
