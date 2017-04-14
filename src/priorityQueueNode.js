import Node from '../src/node'

export default class priorityQueueNode {
  constructor() {
    this.size = 0
    this.head = null
    this.tail = null
  }

  enqueue(data, priority) {
    let node = new Node( data, priority ), currentNode = this.head

    if ( !currentNode ) {
      this.head = node
      this.tail = node
      this.size++
    }

    while (currentNode) {
      if (currentNode.priority > priority) {
        node.next = currentNode
        this.head = node
        this.size++
        return
      }
      if (currentNode === this.tail) {
        this.tail.next = node
        this.tail = node
        this.size++
        return
      }
        currentNode = currentNode.next
    }
  }

  dequeue() {
    let currentNode = this.head, deletedNode

    if (this.size === 1) {
      this.head = this.tail = null
      this.size--
    }
    if (this.size > 0) {
      while (currentNode) {
        if (currentNode.next === this.tail) {
          deletedNode =  currentNode.next
          this.tail = currentNode
          currentNode.next = null
          this.size--
          return deletedNode
        }
          currentNode = currentNode.next
      }
    }
    return null
  }

  front() {
    if ( this.size > 0 ) {
      return this.tail
    }
    return null
  }

  back() {
    if ( this.size > 0 ) {
      return this.head
    }
    return null
  }

  isEmpty() {
    if ( this.size === 0 ) {
      return true
    }
    return false
  }

  length() {
    return this.size
  }

}
