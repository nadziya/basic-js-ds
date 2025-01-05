const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.top = null;
    this.end = null;
  }

  isEmpty() {
    return this.top == null;
  }

  getUnderlyingList() {
    return this.top;
  }

  enqueue(value) {
    const newList = new ListNode(value);
    if (this.isEmpty()) {
      this.top = newList;
      this.end = newList;
    } else {
      this.end.next = newList;
      this.end = newList;
    }
    return this;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    let removeItem = this.top;
    if (this.top === this.end) {
      this.end = null;
    }
    this.top = this.top.next;
    return removeItem;
  }
  
}

module.exports = {
  Queue
};
