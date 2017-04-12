'use strict'

export default class Stack {
  constructor() {
    this.size = 0
    this.storage = {}
  }

  push(data) {
    let size = this.size++
    this.storage[size] = data
  }

  pop() {
    let size = this.size, deletedData

    if (size) {
      deletedData = this.storage[size - 1]

      delete this.storage[size - 1]
      this.size--

      return deletedData
    }
    return null
  }

  peek() {
    let size = this.size

    if (size) {
      return this.storage[size - 1]
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
