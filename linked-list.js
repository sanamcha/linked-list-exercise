/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if(!this.head) this.head = newNode;
    
    if(this.tail) this.tail.next = newNode;
     
    this.tail = newNode; 
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      
    } else {
      newNode.next = this.next;
      this.head = newNode; 
    }
    if(this.length === 0){
      return this.tail = this.head;
    } 
    this.length +=1;
  }

  /** pop(): return & remove last item. */

  pop() {
    let current = this.head;

    if (!this.head) {
      throw new Error("Empty List");
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return current.val;
    }

    while (current !== null) {
      if (current.next.next === null) {
        let val = current.next.val;
        current.next = null;
        this.tail = current;
        this.length--;
        return val;
      }
      current = current.next;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    let current = this.head;

    if (!this.head) {
      throw new Error("List is empty");
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return current.val;
    }

    let val = current.val;
    this.head = current.next;
    this.length--;
    return val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length ) {
      throw new Error("Not a valid index");
    }
    let current = this.head;
    let count = 0;
    while(current !== idx){
      if(count === idx ){
      return current.val;
    } else {
      current = current.next;
      count++;
    }
  }
}

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(idx < 0 || idx >= this.length ){
      throw new Error("Not a valid index");
    }
    let current = this.head;
    let count = 0;
    while(current !== null){
      if(count === idx){
        current.val = val;
        return;
      } else {
        current = current.next;
        count++;
      }
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(idx < 0 || idx > this.length){
      throw new Error("Not a valid index");
    }
    if(idx === 0){
      return this.unshift(val);
      
    } else if (idx === this.length){
      return this.push(val);
      
    }
    let newNode = new Node(val);
    let current = this.head;
    let count = 0;
    while(count !== null){
      if(count + 1 === idx) {
        let cur = current.next;
        current.next = newNode;
        newNode.next = cur;
        this.length++;
        return;
      }
      current = current.next;
      count++;
    }

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid Index");
    }
    if (idx === 0) {
      this.shift();
      return;
    }
    let current = this.head;
    let count = 0;
    while (current !== null) {
      if (count + 1 === idx) {
        count.next = count.next.next;
        this.length--;
      }
      count = count.next;
      count++;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let current = this.head;
    if(!current) return 0;
    let sum = 0;
    while(current !== null){
      sum += current.val;
      current = current.next;
    }
    return sum/this.length;
  }
}

module.exports = LinkedList;
