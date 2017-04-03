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
      this.root = node;
    } else {
      // iterative approach
      let next = true;
      let thisNode = this.root;
      debugger;
      while(next) {
        if (value < thisNode.value && thisNode.left === null) {
          thisNode.left = node
          next = false;
        } else if (value > thisNode.value && thisNode.right === null) {
          thisNode.right = node;
          next = false;
        } else if (value < thisNode.value) {
          thisNode = thisNode.left;
        } else {
          thisNode = thisNode.right;
        }
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

const tree = new Tree();
tree.add(4);
tree.add(6);
tree.add(3);
tree.add(7);
tree.add(2);
tree.add(31);
console.log(tree);
