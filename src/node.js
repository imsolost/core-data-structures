'use strict'

export default class Node {
  constructor(data) {
    this.data = data
    this.next = undefined
  }

  getData() {
    return this.data.data
  }

  setNext(input) {
    this.data.next = input
    return this
  }

  getNext() {
    if (this.data.next) {
      return this.data.next
    }
    return null
  }
}
