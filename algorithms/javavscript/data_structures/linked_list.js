class LinkedList {
  constructor() {
    this.tail = this.head = null;
    this.length = 0;
  }
  
  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;      
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length++;
  }
  
  pop() {
    return this.delete(this.length-1);
//     let node = this.head;
//     let count = 1;
//     while (count < this.length - 1) {
//       node = node.next;
//       count++;
//     }
    
//     const rtn = node.next;
//     node.next = null;
//     this.length--;
//     return rtn.value;
  }
  
  _find(value, test = this._test) {
    let current = this.head;
    let i = 0;
    while(current) {
      if (test(value, current.value, i, current)) {
        return current;
      }      
      current = current.next;
      i++;
    }    
    return null;
  }
  
  get(index) {
    const node = this._find(index, this._testIndex);
    if (!node) return null;
    return node.value;
//    let count = 0;
//    let node = this.head;
//    while (count != index) {
//      node = node.next;
//      count++;
//    }
//    return node.value;
  }
      
  delete(index) {
    if (index === 0) {
      const head = this.head;
      if (head) {
        this.head = head.next;
      }
      else {
        this.head = null;
      }
      
      this.length--;
      return head.value;
    }
    
    const node = this._find(index - 1, this._testIndex);
    const excise = node.next;
    if (!excise) return null;
    node.next = excise.next;
    if (node.next && !node.next.next) this.tail = node.next;
    
    this.length--;
    return excise.value;
//     let search = 0;
//     let node = this.head;
//     let prev = null;
//     while (search < index) {
//       prev = node;
//       node = node.next;
//       search++;
//     }    
    
//     if (prev === null) {
//       this.head = node.next;  
//     } 
//     else {
//       prev.next = node.next;      
//     }

//     this.length--;
  }
  
  _test(a, b) {
    return a === b;
  }
  
  _testIndex(search, __, i) {
    return search === i;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = LinkedList;
