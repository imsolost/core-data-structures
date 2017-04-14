export default class Node {
  constructor(data, priority = null) {
    this.data = data
    this.priority = priority
    this.next = null
    this.previous = null
  }

  getData() {
    return this.data
  }

  setNext(input) {
    this.next = input
    return this
  }

  getNext() {
    if (this.next) {
      return this.next
    }
    return null
  }
}
