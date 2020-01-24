class maxHeap {
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
      if (childTwoIndex !== -1 && heap[childTwoIndex] > heap[childOneIndex]) {
        indexToSwap = childTwoIndex;
      } else {
        indexToSwap = childOneIndex;
      }
      if (heap[currentIndex] < heap[indexToSwap]) {
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
    while (parentIndex >= 0 && heap[parentIndex] < heap[currentIndex]) {
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
const maxHeap1 = new maxHeap(array);
console.log(array);
maxHeap1.remove();
console.log(array);
maxHeap1.insert(-1);
console.log(array);
maxHeap1.insert(66);
console.log(array);
