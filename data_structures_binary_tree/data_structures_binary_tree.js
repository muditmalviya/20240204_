/**
 * Implementation of a Binary Tree in JavaScript.
 * @author Mudit
 */

// Node class to represent a node in the binary tree
class Node {
    /**
     * Constructor for a Node object.
     * @param {number} data - The data to be stored in the node.
     */
    constructor(data) {
      /**
       * The data stored in this node.
       * @type {number}
       */
      this.data = data;
  
      /**
       *reference of left child node.
       * @type {Node|null}
       */
      this.left = null;
  
      /**
       *reference of right child node.
       * @type {Node|null}
       */
      this.right = null;
    }
  }
  
  // BinaryTree class to represent the binary tree
  class BinaryTree {
    /**
     * Constructor for a BinaryTree object.
     */
    constructor() {
      /**
       * The root node of the binary tree.
       * @type {Node|null}
       */
      this.root = null;
    }
  
    /**
     * Inserts a new node into the binary tree.
     * @param {number} data - The data to be inserted.
     */
    insert(data) {
      const newNode = new Node(data);
      if (this.root === null) {
        this.root = newNode;
      } 
      else {
        this.insertNode(this.root, newNode);
      }
    }
  
    /**
     * inserts a node into the binary tree recursively.
     * @param {Node} node - The current node being used.
     * @param {Node} newNode - The node to be inserted.
     */
    insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
        }
        else {
          this.insertNode(node.left, newNode);
        }
      } 
      else {
        if (node.right === null) {
          node.right = newNode;
        } 
        else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    /**
     * Performs in-order traversal of the binary tree and then prints.
     * @param {Node} node - The current node being usedd.
     */
    inorder(node) {
      if (node !== null) {
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right);
      }
    }
  
    /**
     * Performs a preorder traversal of the binary tree and then print.
     * @param {Node} node - The current node being used.
     */
    preorder(node) {
      if (node !== null) {
        console.log(node.data);
        this.preorder(node.left);
        this.preorder(node.right);
      }
    }
  
    /**
     * Performs a postorder traversal of the binary tree and then prints.
     * @param {Node} node - The current node being used.
     */
    postorder(node) {
      if (node !== null) {
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.data);
      }
    }
  
    /**
     * Main function to test the BinaryTree class.
     */
    static main() {
      const tree = new BinaryTree();
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
      tree.insert(2);
      tree.insert(7);
      tree.insert(12);
      tree.insert(17);
  
      console.log("Inorder traversal:");
      tree.inorder(tree.root);
  
      console.log("Preorder traversal:");
      tree.preorder(tree.root);
  
      console.log("Postorder traversal:");
      tree.postorder(tree.root);
    }
}