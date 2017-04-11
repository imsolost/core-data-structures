import Node from '../src/node'

'use strict'

export default class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  getHeadNode() {
    return this.head
  }

  getTailNode() {
    return this.tail
  }

  contains(data) {
    let currentNode = this.head

    while (currentNode) {
      if (currentNode.data === data) {
        return true
      }
      if (currentNode === this.tail) {
        return false
      }
      else {
        currentNode = currentNode.next
      }
    }
  }

  find(data) {
    let currentNode = this.head

    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode
      }
      if (currentNode === this.tail) {
        return -1
      }
      else {
        currentNode = currentNode.next
      }
    }
  }

  insert(data) {
    let node = new Node( data ), currentNode = this.head

    if ( !currentNode ) {
      this.head = node
      this.tail = node
      return node
    }
    else {
      this.tail.next = node
      this.tail = node
    }

  }

  insertFirst(data) {
    let node = new Node( data ), currentNode = this.head

    if ( !currentNode ) {
      this.head = node
      this.tail = node
      return node
    }
    else {
      this.head.next = node
      this.head = node
      return node
    }

  }

  insertBefore(data) {
    let currentNode = this.head

    while (currentNode) {
      if (currentNode.data === data) {
        return true
      }
      if (currentNode === this.tail) {
        return false
      }
      else {
        currentNode = currentNode.next
      }
    }
  }

  insertAfter(target, data) {

  }

  remove() {

  }

  removeFirst() {

  }

  isEmpty() {

  }

  size() {

  }

  clear() {

  }
}
