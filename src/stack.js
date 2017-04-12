'use strict'

export default class Stack {
  constructor() {
    this.size = 0
    this.storage = {}
  }

  push(data) {
    this.size++
    this.storage[this.size] = data
  }

  pop() {
    let size = this.size, deletedData

    if (size) {
      deletedData = this.storage[size]

      delete this.storage[size]
      this.size--

      return deletedData
    }
    return null
  }

  peek() {
    if (this.size) {
      return this.storage[this.size]
    }
    return null
  }

  isEmpty() {
    if (this.size === 0) {
      return true
    }
    return false
  }

  length() {
    return this.size
  }
}
