class minHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }
  //O(n) time || O(1) space
  buildHeap(array) {
    const lastParentIndex = Math.floor((array.length - 1) / 2);
    for (let i = lastParentIndex; i >= 0; i--) {
      this.siftDown(i, array.length - 1, array);
    }
    return array;
  }
  //O(log(n)) || O(1) space
  siftDown(currentIndex, endIndex, heap) {
    let childOneIndex = currentIndex * 2 + 1;
    while (childOneIndex <= endIndex) {
      //just to ensure that a node has a second child and is not a leaf node
      let childTwoIndex =
        currentIndex * 2 + 2 <= endIndex ? currentIndex * 2 + 2 : -1;
      let indexToSwap;
      if (childTwoIndex !== -1 && heap[childTwoIndex] < heap[childOneIndex]) {
        indexToSwap = childTwoIndex;
      } else {
        indexToSwap = childOneIndex;
      }
      if (heap[currentIndex] > heap[indexToSwap]) {
        this.swap(currentIndex, indexToSwap, heap);
        currentIndex = indexToSwap;
        childOneIndex = currentIndex * 2 + 1;
      } else {
        return;
      }
    }
  }
  //O(log(n)) || O(1) space
  siftUp(currentIndex, heap) {
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    while (parentIndex >= 0 && heap[parentIndex] > heap[currentIndex]) {
      this.swap(parentIndex, currentIndex, heap);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }
  //O(log(n)) || O(1) space
  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }
  //O(log(n)) || O(1) space
  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const elementToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return elementToRemove;
  }
  swap(i, j, array) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
let array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 32, 5, 6, 321, 65];
console.log(array);
const minHeap1 = new minHeap(array);
console.log(array);
minHeap1.remove();
console.log(array);
minHeap1.insert(-1);
console.log(array);

// Actually, building a heap with repeated calls of siftDown has a complexity of O(n) whereas building it with repeated calls of siftUp has a complexity of O(nlogn).

// This is due to the fact that when you use siftDown, the time taken by each call decreases with the depth of the node because these nodes are closer to the leaves. When you use siftUp, the number of swaps increases with the depth of the node because if you are at full depth, you may have to swap all the way to the root. As the number of nodes grows exponentially with the depth of the tree, using siftUp gives a more expensive algorithm.

// Moreover, if you are using a Max-heap to do some sort of sorting where you pop the max element of the heap and then reheapify it, it's easier to do so by using siftDown. You can reheapify in O(logn) time by popping the max element, putting the last element at the root node (which was empty because you popped it) and then sifting it down all the way back to its correct spot.
