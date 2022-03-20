class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new TreeNode(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (current) {
      if (val === current.val) {
        return null;
      }
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
      current = current.left;
    }
  }

  findRecursive(val) {
    if (!this.root) {
      return null;
    }

    function innerFind(treeNode) {
      if (treeNode.val === val) {
        return treeNode;
      } else if (treeNode.left && treeNode.left.val > val) {
        return innerFind(treeNode.left);
      } else if (treeNode.right && treeNode.right.val < val) {
        return innerFind(treeNode.right);
      }
    }

    const result = innerFind(this.root);

    return result;
  }

  findIterative(val) {
    if (!this.root) {
      return null;
    }

    let current = this.root;

    while (current) {
      if (current.val === val) {
        return current;
      }
      if (current.left && current.left.val < val) {
        current = current.left;
      } else {
        // === val || val > current.left.val (meaning current.right should be searched [if exists])
        if (current.right) {
          current = current.right;
        }
      }
    }

    return !!current; // true or false
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(12);
tree.insert(11);
tree.insert(14);
tree.insert(8);
tree.insert(5);
tree.insert(6);
tree.insert(2);
console.log(tree);
// const res = tree.findRecursive(6);
const res = tree.findIterative(6);
console.log(res);