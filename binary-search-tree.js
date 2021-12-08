class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  insert(val){
    insertLeaf = (branch) => {
      const currentVal = branch.val;
      if(val < currentVal){
        if(!branch.left){
          branch.left = new Node(val);
          return this;
        } else {
          return insertLeaf(branch.left);
        }
      } else 
      if(val > currentVal){
        if(!branch.right){
          branch.right = new Node(val);
          return this;
        } else {
          return insertLeaf(branch.right);
        }
      }   
    }
    if(!this.root){
      this.root = new Node(val);
      return this;
    } else {
      return insertLeaf(this.root);
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    insertLeaf = (branch) => {
      const currentVal = branch.val;
      if(val < currentVal){
        if(!branch.left){
          branch.left = new Node(val);
          return this;
        } else {
          return insertLeaf(branch.left);
        }
      } else 
      if(val > currentVal){
        if(!branch.right){
          branch.right = new Node(val);
          return this;
        } else {
          return insertLeaf(branch.right);
        }
      }   
    }
    if(!this.root){
      this.root = new Node(val);
      return this;
    } else {
      return insertLeaf(this.root);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

    let curr = this.root;
    let back = undefined;

    while(curr){
      if(val < curr.val){
        curr = curr.left;
      } else 
      if(val > curr.val){
        curr = curr.right;
      } else {
        back = curr;
        break;
      }
    }

    return back;

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, branch = this.root) {

    if(branch){
      if(val < branch.val){
        return this.findRecursively(val,branch.left);
      } else 
      if(val > branch.val){
        return this.findRecursively(val,branch.right);
      } else {
        return branch;
      }
    }

    return branch;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root) {
    let back = [];
    let curr = this.root;
    if(curr){
      back.push(curr);
      curr = this.left;
      back.push(...this.dfsPreOrder(curr));
      curr = this.right;
      back.push(...this.dfsPreOrder(curr));
    }
    return back;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let back = [];
    let curr = this.root;
    if(curr){
      back.push(curr);
      curr = this.left;
      back.push(...this.dfsPreOrder(curr));
      curr = this.right;
      back.push(...this.dfsPreOrder(curr));
    }
    return back;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let back = [];
    let curr = this.root;
    if(curr){
      back.push(curr);
      curr = this.left;
      back.push(...this.dfsPreOrder(curr));
      curr = this.right;
      back.push(...this.dfsPreOrder(curr));
    }
    return back;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }


}

module.exports = BinarySearchTree;
