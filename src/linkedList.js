import Node from '../src/node'

'use strict'

export default class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
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
    }
    else {
      this.tail.next = node
      this.tail = node
    }
    this.size++
  }

  insertFirst(data) {
    let node = new Node( data ), currentNode = this.head

    if ( !currentNode ) {
      this.head = node
      this.tail = node
    }
    else {
      node.next = currentNode
      this.head = node
    }
    this.size++
  }

  insertBefore(target, data) {
    let node = new Node( data ), currentNode = this.head

    while (currentNode) {
      if (currentNode.data === target) {
        node.next = currentNode
        this.head = node
        this.size++
        return
      }
      if (currentNode.next.data === target) {
        node.next = currentNode.next
        currentNode.next = node
        this.size++
        return
      }
      if (currentNode === this.tail) {
        return
      }
      else {
        currentNode = currentNode.next
      }
    }
  }

  insertAfter(target, data) {
    let node = new Node( data ), currentNode = this.head

    while (currentNode) {
      if (currentNode.data === target && currentNode === this.tail) {
        this.tail.next = node
        this.tail = node
        this.size++
        return
      }
      if (currentNode.data === target) {
        node.next = currentNode.next
        currentNode.next = node
        this.size++
        return
      }
      if (currentNode === this.tail) {
        return
      }
      else {
        currentNode = currentNode.next
      }
    }
  }

  remove() {
    let currentNode = this.head

    while (currentNode) {
      if (currentNode.next === this.tail) {
        this.tail = currentNode
        currentNode.next = null
        this.size--
        return
      }
      else {
        currentNode = currentNode.next
      }
    }
  }

  removeFirst() {
    let currentNode = this.head

    this.head = currentNode.next
    currentNode = null
    this.size--
  }

  size() {
    return this.size
  }

  isEmpty() {
    if (this.size === 0) {
      return true
    }
      return false
  }

  clear() {
    this.head = this.tail = null
    this.size = 0
  }

}
