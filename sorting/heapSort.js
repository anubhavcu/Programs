//O(1) space
//O(nlog(n)) time - {O(n + nlog(n)) ~ O(nlog(n))}
//siftdown takes log(n) time and we are doing it on n elements so O(nlog(n))
//and buildHeap takes O(n) time which is insignificant term compared to O(nlog(n));
function heapSort(array) {
  // console.log(array);
  buildMaxHeap(array);
  // console.log("heap", array);
  for (let endIndex = array.length - 1; endIndex >= 1; endIndex--) {
    swap(0, endIndex, array);
    siftDown(0, endIndex - 1, array);
    // console.log(array);
  }
  return array;
}

function buildMaxHeap(array) {
  const lastParentIndex = Math.floor((array.length - 1) / 2);
  for (let i = lastParentIndex; i >= 0; i--) {
    siftDown(i, array.length - 1, array);
  }
}
function siftDown(currentIndex, endIndex, heap) {
  let childOneIndex = currentIndex * 2 + 1;
  while (childOneIndex <= endIndex) {
    let childTwoIndex =
      currentIndex * 2 + 2 <= endIndex ? currentIndex * 2 + 2 : -1;
    let indexToSwap;
    if (childTwoIndex !== -1 && heap[childTwoIndex] > heap[childOneIndex]) {
      indexToSwap = childTwoIndex;
    } else {
      indexToSwap = childOneIndex;
    }
    if (heap[indexToSwap] > heap[currentIndex]) {
      swap(indexToSwap, currentIndex, heap);
      currentIndex = indexToSwap;
      childOneIndex = currentIndex * 2 + 1;
    } else {
      return;
    }
  }
}
function swap(i, j, array) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
let array = [8, 5, 2, 9, 5, 6, 3];
console.log(heapSort(array));
