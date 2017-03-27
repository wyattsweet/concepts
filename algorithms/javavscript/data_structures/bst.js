class Tree {
  constructor() {
    this.root = null;
  }

  toObject() {
    return this.root;
  }

  add(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = value;
    } else {
      // iterative approach
      let next = true;
      while(next) {
        if 
      }
    }
  }
}

class Node {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
