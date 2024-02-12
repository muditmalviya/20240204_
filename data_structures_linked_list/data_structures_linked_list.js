/** Creating class for linkedlist to do multiple operations in it
 *  @author Mudit
 */

/** Class representing a node of a linkedlist which contain two fields
 * data of that node and address of next node
 */
class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  /** Class representing LinkedList and multiple operations to perform
   *  in Linkedlist
   */
  class LinkedList {
    /** To initilize the linkedlist head and initilize the size of 
     * linkedlist
     */
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    /** Function to insert first node in a linkedlist
     * @param {Number} data data of first node of linkedlist
     */
    insertFirst(data) {
      this.head = new Node(data, this.head);
      this.size++;
    }
  
    /** Function to insert the element from the back of linkedlist
     *  @param {Number} data data of the last element of linkedlist
     */
    insertLast(data) {
      let node = new Node(data);
      let current;
  
      // If linkedlist is empty assign it as first node
      if (!this.head) {
        this.head = node;
      } else {
        current = this.head;
        //loop to find the last node in a linkedlist
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
      //incrementing the size of linkedlist
      this.size++;
    }
  
    /** Insert the node at the given index in a linkedlist
     * @param {Number} data data of the new node
     * @param {Number} index position number to insert at
     */
    insertAt(data, index) {
      //  If index is out of range return without doing anything
      if (index > 0 && index > this.size) {
        return;
      }
  
      /** If we have to insert node at o'th index we will simply
       * call the insert at first in index function
       */
      if (index === 0) {
        this.insertFirst(data);
        return;
      }
     /** Created current and previous node and then traversing
      * the linkedlist to find the desired node and then changing
      * the chains of linkedlist
      */
      const node = new Node(data);
      let current, previous;
      current = this.head;
      let count = 0;
  
      while (count < index) {
        previous = current; // Node before index
        count++;
        current = current.next; // Node after index
      }
  
      node.next = current;
      previous.next = node;
  
      this.size++;
    }
  
    /** Function to get the data of the asked index
     * @param {Number} index index of the asked index data
     */
    getAt(index) {
      let current = this.head;
      let count = 0;

      /** Directly printing the data if found and if not found
       *  returning NULL
       */
      while (current) {
        if (count == index) {
          console.log(current.data);
        }
        count++;
        current = current.next;
      }
      return null;
    }
  
    /** Function delete the node of the given index
     * @param {Number} index index to delete in linkedlist 
     */
    removeAt(index) {
      //Checking if the index belongs to valid range of not
      if (index > 0 && index > this.size) {
        return;
      }


      let current = this.head;
      let previous;
      let count = 0;
  
      // Remove first index else traversing the linkedlist
      if (index === 0) {
        this.head = current.next;
      } else {
        while (count < index) {
          count++;
          previous = current;
          current = current.next;
        }
  
        previous.next = current.next;
      }
  
      this.size--;
    }
  
    /** Function to remove the entire linkedlist */
    clearList() {
      this.head = null;
      this.size = 0;
    }
  
    /** Function to print the entire linkedlist data */
    printListData() {
      let current = this.head;
  
      //traversing the linkedlist to print all elements
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  const ll = new LinkedList();
  
  ll.insertFirst(100);
  ll.insertFirst(200);
  ll.insertFirst(300);
  ll.insertLast(400);
  ll.insertAt(500, 3);
  
  // ll.clearList();
  // ll.getAt(2);
  
  ll.printListData();