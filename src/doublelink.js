import Node from '../src/node'

export default class Doublelink {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  insert(data) {
    let node = new Node( data )

    if ( this.size ) {
      this.tail.next = node
      node.previous = this.tail
      this.tail = node
    }
    else {
      this.head = node
      this.tail = node
    }
    this.size++
  }



}
